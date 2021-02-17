const mongoose = require('mongoose'), Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const Voiture = require('../models/Voiture');
const User = require('../models/User');
const favorisSchema = mongoose.Schema({
  voiture : { type: Schema.Types.ObjectId, ref: 'Voiture' },
     user : { type: Schema.Types.ObjectId, ref: 'User' }

});

favorisSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Favori', favorisSchema);
