const express = require('express');
const app = express();
const port = 3000;

app.get('/connect', (req,res) => {
    res.send('Connected')
})

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`)
})

module.exports = app;
