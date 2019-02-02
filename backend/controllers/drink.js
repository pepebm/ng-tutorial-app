const router = require('express').Router();
const Drink = require('../models/drink');

// Find all
router.get('/', (res, req) => {
  Drink.find()
    .then(documents => res.status(200).json({ drinks: documents }))
    .catch(e => res.status(404).json({ message: e }))
});

// Create new drink given the body parameters
// Params
// Name: string
// Size: number
// Alcohol: boolean
router.post('/', (res, req) => {
  const drink = new Drink({
    name: req.body.name,
    size: req.body.size,
    alcohol: req.body.alcohol
  });
  drink.save()
    .then(res => res.status(201).json({ drink: drink }))
    .catch(e => res.status(422).json({ message: e }))
  ;
});

// Deletes drink given existing id
// Query param
// id: mongodb id
router.delete('/:id', (res, req) => {
  Drink.deleteOne({ _id: req.params.id })
    .then(drink => res.status(202).json({ drink: drink }))
    .catch(e => res.status(422).json({ message: e }))
  ;
});

module.exports = router;