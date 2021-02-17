const express = require('express');
const voitureCtrl = require('../controllers/voiture');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
router.use('/api/voitures_anciennes',voitureCtrl.affichervoituresanciennes);
router.use('/api/nouvelles_voitures/:marque', voitureCtrl.affichernouvellesvoitures);
router.use('/api/detailvoiture/:id',voitureCtrl.detailvoiture);
router.post('/api/ajoutervoiture',voitureCtrl.ajoutervoiture);
router.use('/api/mesvoitures/:userId', voitureCtrl.affichermesvoitures);
router.delete('/api/supprimervoiture/:id', voitureCtrl.supprimervoiture);
router.post('/api/ajoutervoitureimage',multer, voitureCtrl.ajoutervoitureimage);
router.put('/api/modifiervoiture/:id',multer, voitureCtrl.modifiervoiture);
router.use('/api/chercherancienne/:marque/:modele/:kilometrage/:annee', voitureCtrl.chercherancienne);
router.use('/api/cherchernouvelle/:marque/:modele', voitureCtrl.cherchernouvelle);

router.use('/api/modeleparmarque/:marque', voitureCtrl.modeleparmarque);

module.exports = router;
