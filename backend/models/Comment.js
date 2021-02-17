const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Voiture = require('../models/Voiture');
const User = require('../models/User');
const uniqueValidator = require('mongoose-unique-validator');

const favorisSchema = mongoose.Schema({
  iduser: { type: String },
    idvoiture: { type: String },
    message: { type: String },
      idcreplay: { type: String },
       voiture : { type: Schema.Types.ObjectId, ref: 'Voiture' },
          user : { type: Schema.Types.ObjectId, ref: 'User' }
});

favorisSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comment', favorisSchema);
