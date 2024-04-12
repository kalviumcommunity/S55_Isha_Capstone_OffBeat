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

app.get('/connect', async (req, res) => {
    const connectionStatus = await getStatus();
    res.send(connectionStatus);
});

app.get('/data', async (req, res) => {
    try {
        const locate = await userModel.find();
        res.json(locate);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/insert', async (req, res) => {
    try {  
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: "Invalid request body" });
        }
        const insert = await userModel.create(req.body);
        res.json(insert);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occoured while inserting data', err);
    }
});

app.get('/data/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getId = await userModel.findById(_id);

        if (!getId) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json(getId);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.delete('/delete/:id', async (req, res) => {
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



module.exports = app;
