const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const mongoose = require('mongoose')

let connectionStatus = "disconnected";

const startDB = async () => {
    try{
      await  mongoose.connect(process.env.MONGO_URI)
      connectionStatus = "Database connected"
    }catch(err){
      console.error("Failed to connect to DB")
      connectionStatus = "error";
    }
  };
  
  const stopDB = async () => {
    await mongoose.disconnect();
    connectionStatus = "closed"
  }


app.get('/connect', (req,res) => {
    res.send(connectionStatus)
})


app.listen(port, () => {
    startDB();
    console.log(`Server running on PORT: ${port}`)
})

module.exports = app;

