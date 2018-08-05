const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.load();


const Dish = require('./models/dish');


mongoose.connect(`mongodb+srv://peps:${process.env.DB_PASS}@mongocluster-ky7uf.mongodb.net/test?retryWrites=true`)
  .then(() => {
    console.log('Connected to database.');
  })
  .catch((e)=>{
    console.log('No connection with db ' + e);
  });

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
  console.log(dish);
  res.status(201).json({dish: dish});
});

app.get('/api/dishes', (req, res, next) => {
  const dishes = [
    {
      id: 1,
      name: 'Rib Eye',
      desc: 'Juicy red meat.'
    },
    {
      id: 2,
      name: 'Chicken breasy',
      desc: 'Best organic chicken for you.'
    },
    {
      id: 3,
      name: 'Cesar Salad',
      desc: 'Good lettuce with bread. Can add chicken fajitas.'
    },
    {
      id: 1,
      name: 'Fish sticks',
      desc: 'Fish of the day served in a organic stick.'
    }
  ];
  res.status(200).json({dishes: dishes});
});

module.exports = app;
