const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/add-product',adminController.getAddProduct);
router.post('/add-product',adminController.postAddProduct);
router.get('/admin-products',adminController.getAdminProducts);

module.exports = router;
