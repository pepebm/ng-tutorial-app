const router = require('express').Router();
const dish = require('./dish');

router.get('/', (req, res) => 
  res.status(200).json({ message: 'Connected' })
);

router.use('/api/dishes', dish);


module.exports = router;