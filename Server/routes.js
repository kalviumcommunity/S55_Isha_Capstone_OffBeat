const express = require('express');
const app = express.Router();
const { getStatus } = require('./db');
const { userModel } = require('./Schema');
require('dotenv').config()

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

app.post('/add',async(req,res)=>{
    try{
        const add = await userModel.create(req.body)
        res.send(add)
    }catch(error){

        console.log(error)
        res.status(500).send('Internal Server Error')
    }
})


module.exports = app;