const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product.ejs',{path:'/add-product'})
}
exports.getAdminProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/product-list',{path:'/admin-products',products:products});
    })
}

exports.postAddProduct = (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let description = req.body.description;
    let price = req.body.price;
    const product = new Product(title,url,description,price);
    product.save();
    res.redirect('/');
}