const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/add-product',adminController.getAddProduct);
router.get('/admin-products',adminController.getAdminProducts);

module.exports = router;
