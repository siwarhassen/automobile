const Voiture = require('../models/Voiture');
exports.affichervoituresanciennes= (req, res, next) => {
  Voiture.find({ type: "old"})
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};
exports.affichernouvellesvoitures=(req, res, next) => {
  Voiture.find({ type: "new",marque:req.params.marque })
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};
exports.detailvoiture= (req, res, next) => {
  Voiture.findOne({ _id: req.params.id })
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(404).json({ error }));
};
exports.ajoutervoiture=(req, res, next) => {
  delete req.body._id;
  const voiture = new Voiture({
    ...req.body
  });
  voiture.save()
    .then(() => res.status(201).json(voiture))
    .catch(error => res.status(400).json({ error }));
};

exports.affichermesvoitures=(req, res, next) => {
  Voiture.find({ userId: req.params.userId})
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};

exports.supprimervoiture= (req, res, next) => {
  Voiture.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.ajoutervoitureimage = (req, res, next) => {
  const thingObject = JSON.parse(req.body.voiture);
  delete thingObject._id;
  const voiture = new Voiture({
    ...thingObject,
    photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,

  });
  voiture.save()
    .then(() => res.status(201).json(voiture))
    .catch(error => res.status(400).json({ error }));
};

exports.modifiervoiture=(req, res, next) => {
  const thingObject = req.file ?
    {
      ...JSON.parse(req.body.voiture),
      photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Voiture.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
    .then(() => res.status(200).json({ voiture}))
    .catch(error => res.status(400).json({ message:"ouups" }));
};




exports.chercherancienne=(req, res, next) => {
  Voiture.find({ type: "old",marque:req.params.marque,modele:req.params.modele,kilometrage:{$lte : req.params.kilometrage},annee:{$gte: req.params.annee} })
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};

exports.cherchernouvelle=(req, res, next) => {
  Voiture.find({ type: "new",marque:req.params.marque,modele:req.params.modele })
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};
exports.modeleparmarque=(req, res, next) => {
  Voiture.find({ type: "old",marque:req.params.marque })
    .then(voiture => res.status(200).json(voiture))
    .catch(error => res.status(400).json({ error }));

};
