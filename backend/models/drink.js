const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  alcohol: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

module.exports = mongoose.model('Drink', drinkSchema);