const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/add-product',adminController.getAddProduct);
router.get('/admin-products',adminController.getAdminProducts);
router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/add-product',adminController.postAddProduct);
router.post('/edit-product/:productId',adminController.postEditProduct);
router.get('/delete-product/:productId',adminController.postDeleteProduct);

module.exports = router;
