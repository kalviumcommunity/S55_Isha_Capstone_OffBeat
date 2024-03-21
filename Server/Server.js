const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


app.get('/connect', (req,res) => {
    res.send('Connected')
})

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`)
})

module.exports = app;

