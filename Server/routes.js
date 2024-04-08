const express = require('express');
const app = express.Router();
const { getStatus } = require('./db');
const { userModel } = require('./Schema');
const Joi = require('joi');
require('dotenv').config();


const schema = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    child_safe: Joi.boolean().requiured(),
    rating: Joi.number().requiured(),
    description: Joi.string().requiured(),
    open_hours: Joi.string().requiured()
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

module.exports = app;
