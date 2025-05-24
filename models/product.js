const db = require('../utils/database')
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
            return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)',[this.title,this.price, this.description, this.imageUrl]);
        }

        update() {
            return db.execute('UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?',[this.title, this.price, this.description, this.imageUrl, this.id])
        }

        static delete(id) {
           return db.execute('DELETE FROM products WHERE id = ?',[id]);
        }

        static fetchAll() {
         return db.query('SELECT * FROM PRODUCTS');
        }
        
        static getProductById(id) {
            return db.query(`SELECT * FROM PRODUCTS WHERE id=${id}`);
        }
    }