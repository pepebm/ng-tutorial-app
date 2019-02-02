const router = require('express').Router();
// Controllers
const dish = require('./dish');
const drink = require('./drink');

// Test endpoint 
router.get('/', (req, res) => 
  res.status(200).json({ message: 'Connected' })
);

router.use('/api/dishes', dish);
router.use('/api/drinks', drink);


module.exports = router;