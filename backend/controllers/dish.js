const router = require('express').Router();
const Dish = require('../models/dish');


router.post('/', (req, res, next) => {
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
    .catch((e) => res.status(422).json({
      message: e
    }));
});

router.get('/', (req, res, next) => {
  Dish.find()
    .then(documents => res.status(200).json({
      dishes: documents
    }))
    .catch(e => res.status.status(404).json({
      message: e
    }));
});

router.delete('/:id', (req, res, next) => {
  Dish.deleteOne({
      _id: req.params.id
    })
    .then(dish => {
      res.status(202).json({
        dish: dish
      })
    })
    .catch(e => res.status(404).json({
      message: 'Record not found'
    }));
});

module.exports = router;