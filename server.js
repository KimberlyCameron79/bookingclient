const express = require("express");

const app = express();

const dbConfig = require('./db')

const port= process.env.PORT || 5000;

dbConfig();

app.listen(port, () => console.log(`Node server started using nodemon`));