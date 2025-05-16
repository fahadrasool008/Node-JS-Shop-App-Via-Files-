const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');


router.get('/',shopController.getShop);
router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);

module.exports = router;
