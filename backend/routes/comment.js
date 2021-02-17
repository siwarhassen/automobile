const express = require('express');
const commentCtrl = require('../controllers/comment');
const router = express.Router();

router.post('/api/ajoutercomment',commentCtrl.ajoutercomment);
router.use('/api/affichercomments/:idvoiture',commentCtrl.comments);
router.use('/api/a/:message',commentCtrl.c);
router.delete('/api/supprimercommentaire/:id', commentCtrl.deletecomment);
module.exports = router;
