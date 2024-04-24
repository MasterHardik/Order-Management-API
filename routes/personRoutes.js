// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personControler');

// Define routes for CRUD operations
router.get('/person', personController.getAllPersons);
router.get('/person/:id', personController.getPersonById);
router.post('/person', personController.createPerson);
router.put('/person/:id', personController.updatePerson);
router.delete('/person/:id', personController.deletePerson);

module.exports = router;
