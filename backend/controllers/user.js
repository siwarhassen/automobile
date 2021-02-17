const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
              fullname:req.body.fullname,
                telnum:req.body.telnum,
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
               { userId: user._id },
               'RANDOM_TOKEN_SECRET',
               { expiresIn: '24h' }
             )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.detailuser= (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};


exports.getuser=(req, res, next) => {
  User.findOne({ email:req.params.email })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));

};
