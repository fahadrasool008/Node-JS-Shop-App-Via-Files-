const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');


router.get('/',shopController.getShop);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProductById);
router.get('/cart',shopController.getCart);

router.post('/add-to-cart/:productId',shopController.postAddToCart);

module.exports = router;
