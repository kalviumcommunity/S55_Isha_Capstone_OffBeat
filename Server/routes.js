const express = require('express');
const app = express.Router();
const { getStatus } = require('./db');
const { userModel } = require('./Schema');
require('dotenv').config()

app.use(express.json());

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
        const insert = await userModel.create(req.body);
        res.json(insert);
    } catch (err){
        console.error(err);
        res.status(500).send('Cannot add');
    }
})


module.exports = app;