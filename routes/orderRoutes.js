// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordersController');

// Route for creating a new order
router.post('/orders', orderController.createOrder);
router.post('/orders/:id',orderController.createOrderItems);
router.get('/orders/:id',orderController.getOrder);
router.get('/orders',orderController.getAllOrder);

module.exports = router;
