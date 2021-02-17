const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Comment = require('../models/Comment.js');
const voitureSchema = mongoose.Schema({
  marque: { type: String, required: true },
  modele: { type: String, required: true },
  kilometrage: { type: Number, required: true },
  prix:{type: Number, required: true},
  annee:{type: Number},
  adresse: { type: String },
  telephone: { type: Number },
  nbrcylindre:{type: Number },
  nbreplace:{type: Number },
  nbreporte:{type: Number },
  description: { type: String},
  couleur: { type: String},
  transmission: { type: String},
  boite: { type: String},
  puissancefiscale: { type: String},
  energie: { type: String},
  carosserie: { type: String},
  photo: { type: String},
  photo1: { type: String},
  photo2: { type: String},
  photo3: { type: String},
  photo4: { type: String},
  userId: { type: String },
    type: { type: String},
     comments : { type: Schema.Types.ObjectId, ref: 'Comment' }
});

module.exports = mongoose.model('Voiture', voitureSchema);
