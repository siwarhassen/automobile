const Comment = require('../models/Comment');
const Voiture = require('../models/Voiture');
const User = require('../models/User');
exports.ajoutercomment=(req, res, next) => {
  delete req.body._id;
  const comment = new Comment({
    ...req.body
  });
  comment.save()
    .then(() => res.status(201).json(comment.populate('user')))
    .catch(error => res.status(400).json({ message: 'Objet noooon !' }));
};


exports.comments= (req, res, next) => {
  Comment.find({voiture:req.params.idvoiture }).populate('user')
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({ error }));
};

exports.c= (req, res, next) => {
  Comment.find({message:req.params.message }).populate('user')
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({ error }));
};
exports.deletecomment= (req, res, next) => {

  Comment.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};
