// routes/partyRoutes.js
const express = require('express');
const router = express.Router();
const partyController = require('../controllers/partyController');

// Define routes for CRUD operations
router.get('/party', partyController.getAllParties);
router.get('/party/:id', partyController.getPartyById);
router.post('/party', partyController.createParty);
router.put('/party/:id', partyController.updateParty);
router.delete('/party/:id', partyController.deleteParty);

module.exports = router;
