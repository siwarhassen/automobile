const Favori = require('../models/Favoris');
const Voiture = require('../models/Voiture');
const User = require('../models/User');
exports.ajouterfavoris=(req, res, next) => {
  delete req.body._id;
  const favoris = new Favori({
    ...req.body
  });
  favoris.save()
    .then(() => res.status(201).json(favoris))
    .catch(error => res.status(400).json({ message: 'Objet noooon !' }));
};


exports.fav= (req, res, next) => {
  Favori.find({ user:req.params.iduser }).populate('voiture')
    .then(favoris => res.status(200).json(favoris))
    .catch(error => res.status(404).json({ error }));
};

exports.onefavoris= (req, res, next) => {
  Favori.findOne({ user:req.params.iduser ,voiture:req.params.idvoiture })
    .then(favoris => res.status(200).json(favoris))
    .catch(error => res.status(404).json({ error }));
};

exports.deletefavoris= (req, res, next) => {

  Favori.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};
