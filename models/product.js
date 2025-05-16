const path = require('path');
const rootDir = require('../utils/getRootDir');
const fs = require('fs');

module.exports = class Product{
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
        save() {
            const p = path.join(rootDir,'db','products.json');
            let products = [];
            fs.readFile(p,(err,content) => {
                if(!err) {
                    products = JSON.parse(content);   
                }
                products.push(this);
                fs.writeFile(p,JSON.stringify(products),(err) => {
                    console.log(err);
                })
            })
        }

        static fetchAll(cb) {
            const p = path.join(rootDir,'db','products.json');
            let products = [];
            fs.readFile(p,(err,content) => {
                if(err){
                   return cb([]);
                }
                products = JSON.parse(content);
                cb(products);
            })
        }
    }