const path = require('path');
const rootDir = require('../utils/getRootDir');
const fs = require('fs');

const p = path.join(rootDir,'db','products.json');

const getProductFromFile = (cb) => {
            let products = [];
            fs.readFile(p,(err,content) => {
                if(err){
                   return cb([]);
                }
                products = JSON.parse(content);
                cb(products);
            })
        }

module.exports = class Product{
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
        
        save() {
            getProductFromFile(products => {
                this.id = Math.random().toString();
                products.push(this)
                fs.writeFile(p,JSON.stringify(products),(err) => {
                    console.log(err); 
                })
            })
        }

        static fetchAll(cb) {
            getProductFromFile(cb)
        }
        static getProductById(id,cb) {
            getProductFromFile((products) => {
                const product = products.find(product => product.id === id);
                cb(product);
            })
        }
    }