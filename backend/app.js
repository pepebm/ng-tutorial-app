const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controllers = require('./controllers');
// Load env variable from .env
require('dotenv').load();


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongocluster-ky7uf.mongodb.net/${process.env.DB_NAME}?retryWrites=true`)
  .then(() => console.log('Connected to database.'))
  .catch((e)=> console.log('No connection with db ' + e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/', controllers);

module.exports = app;
