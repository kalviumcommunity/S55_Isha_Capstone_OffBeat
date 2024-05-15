const express = require('express');
const app = express.Router();
const { getStatus } = require('./db');
const { userModel } = require('./Schema');
const Joi = require('joi');
require('dotenv').config();

const schema = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    child_safe: Joi.boolean().required(),
    rating: Joi.number().required(),
    description: Joi.string().required(),
    open_hours: Joi.string().required()
});

const validateBody = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ error: "Unprocessable Entity: Invalid request body", details: error.details });
    }
    next();
};

app.get('/connect', async (req, res) => {
    const connectionStatus = await getStatus();
    res.send(connectionStatus);
});

app.get('/data', async (req, res) => {
    try {
        if (!userModel) {
            return res.status(500).send('Internal Server Error: userModel is not defined');
        }
        const locate = await userModel.find();
        res.json(locate);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

app.post('/insert', validateBody, async (req, res) => {
    try {  
        if (!userModel) {
            return res.status(500).send('Internal Server Error: userModel is not defined');
        }
        const insert = await userModel.create(req.body);
        res.json(insert);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while inserting data: ' + err);
    }
});

app.get('/data/:id', async (req, res) => {
    try {
        if (!userModel) {
            return res.status(500).send('Internal Server Error: userModel is not defined');
        }
        const _id = req.params.id;
        const getId = await userModel.findById(_id);

        if (!getId) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json(getId);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

app.put('/update/:id', validateBody, async (req, res) => {
    try {
        if (!userModel) {
            return res.status(500).send('Internal Server Error: userModel is not defined');
        }
        const _id = req.params.id;
        const updatedEntity = await userModel.findByIdAndUpdate(_id, req.body, { new: true });

        if (!updatedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json({ message: 'Entity updated successfully', updatedEntity });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        if (!userModel) {
            return res.status(500).send('Internal Server Error: userModel is not defined');
        }
        const entityId = req.params.id;
        const deletedEntity = await userModel.findByIdAndDelete(entityId);

        if (!deletedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json({ message: 'Entity deleted successfully', deletedEntity });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

module.exports = app;
