const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Load env variable from .env
require('dotenv').load();


const Dish = require('./models/dish');


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

app.post('/api/dishes', (req, res, next) => {
  const dish = new Dish({
    name: req.body.name,
    desc: req.body.desc
  });
  dish.save()
    .then(result => {
      res.status(201).json({
        dishId: result._id
      })
    })
    .catch((e)=> res.status(422).json({message: e}))
  ;
});

app.get('/api/dishes', (req, res, next) => {
  Dish.find()
    .then(documents => res.status(200).json({dishes: documents}))
    .catch(e => res.status.status(404).json({message: e}))
  ;
});

app.delete('/api/dishes/:id', (req, res, next) => {
  Dish.deleteOne({
    _id: req.params.id
  })
    .then(dish => {
      res.status(202).json({
        dish: dish
      })
    })
    .catch(e => res.status(404).json({message: 'Record not found'}))
  ;
});

module.exports = app;
