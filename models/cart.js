 const fs = require('fs');
 const path = require('path');
 const rootDir = require('../utils/getRootDir');
 const Product = require('../models/product');

 const p = path.join(rootDir,'db','cart.json');

 module.exports = class Cart {
    static addProduct(id,price) {
        let cart = {products:[], totalPrice: 0};
        fs.readFile(p,(err, fileContent) => {
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if(existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
            }else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products,updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +price;
            cart.totalPrice = cart.totalPrice.toFixed(2);

            fs.writeFile(p,JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })
    }
 }