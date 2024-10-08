const express = require('express');
const app = express.Router();
const { getStatus } = require('./db');
const { userModel } = require('./schema');
const { Model } = require('./userSchema');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(express.json());

// JWT verification middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(403).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Invalid token.');
    }
};

// Define Joi schema for POST /add route
const addValidationSchema = Joi.object({
    location: Joi.string().required(),
    name: Joi.string().required(),
    child_safe: Joi.string().required(),
    rating: Joi.number().required(),
    description: Joi.string().required(),
    created_by: Joi.string().required(),
    open_hours: Joi.string().required(),
});

// Define Joi schema for PUT /updateCard/:id route
const updateValidationSchema = Joi.object({
    location: Joi.string(),
    name: Joi.string(),
    child_safe: Joi.string(),
    rating: Joi.number(),
    description: Joi.string(),
    created_by: Joi.string(),
    open_hours: Joi.string(),
});

// GET request to get connection status
app.get('/', async (req, res) => {
    const connectionStatus = await getStatus();
    res.send(connectionStatus);
});

// POST request to add a new ice cream entity (protected)
app.post('/insert', verifyToken, async (req, res) => {
    try {
        const { error, value } = addValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const newData = await userModel.create(req.body);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT request to update ice cream entity by ID (protected)
app.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const entityId = req.params.id;
        const updateData = req.body;

        const { error, value } = updateValidationSchema.validate(updateData);
        if (error) {
            return res.status(422).json({ error: error.details.map(detail => detail.message) });
        }

        const updatedEntity = await userModel.findByIdAndUpdate(entityId, updateData, { new: true });

        if (!updatedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json(updatedEntity);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE request to delete ice cream entity by ID (protected)
app.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        const entityId = req.params.id;
        const deletedEntity = await userModel.findByIdAndDelete(entityId);

        if (!deletedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json({ message: 'Entity deleted successfully', deletedEntity });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// GET request to get ice cream entity by ID (protected)
app.get('/data/:id', verifyToken, async (req, res) => {
    try {
        const _id = req.params.id;
        const iceCreamEntity = await userModel.findById(_id);

        if (!iceCreamEntity) {
            return res.status(404).json({ error: 'Ice cream entity not found' });
        }

        res.json(iceCreamEntity);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// GET request to get all ice cream entities (protected)
app.get('/data', verifyToken, async (req, res) => {
    try {
        const iceCreamEntities = await userModel.find();
        res.json(iceCreamEntities);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const user = await Model.create({
            username: req.body.username,
            password: req.body.password
        });
        res.send(user);
    } catch (err) {
        console.error(err);
    }
});

// Login route with JWT token creation
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Model.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username / password' });
        }

        // Generate JWT token
        const token = jwt.sign({ username }, process.env.TOKEN, { expiresIn: '1h' });
        res.cookie('token', token, { maxAge: 60 * 60 * 1000 }); // 1 hour expiry
        res.status(200).json({ accessToken: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
});

// Auth route for generating token
app.post('/auth', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = {
            "username": username,
            "password": password
        };
        const TOKEN = jwt.sign(user, process.env.TOKEN);
        res.cookie('token', TOKEN, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year expiry
        res.json({ "accessToken": TOKEN });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
