const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const route = require('./routes')
const{startDB} = require('./db')


var cors = require('cors')

app.use(cors())

app.use('/', route)

  app.listen(port, () => {
    startDB()
    console.log(`🚀 server running on PORT: ${port}`);
  });



module.exports = app;
