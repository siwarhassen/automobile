const express = require('express');
const favorisCtrl = require('../controllers/favoris');
const router = express.Router();
router.post('/api/ajouterfavoris',favorisCtrl.ajouterfavoris);
router.use('/api/afficherf/:iduser',favorisCtrl.fav);
router.use('/api/verifierfavoris/:iduser/:idvoiture',favorisCtrl.onefavoris);
router.delete('/api/supprimerfavoris/:id', favorisCtrl.deletefavoris);
module.exports = router;
