const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product.ejs',{path:'/add-product',editing: false})
}
exports.getAdminProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/product-list',{path:'/admin-products',products:products});
    })
}
exports.getEditProduct = (req, res) => {
    const editingMode = req.query.edit;
    console.log("Editing Mode:", editingMode);
    
    Product.getProductById(req.params.productId,(product) => {
        res.render(
            'admin/add-product.ejs',
            {
                path:'/add-product',
                product: product,
                editing: editingMode,
            })
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

exports.postEditProduct = (req, res) => {
    let id = req.params.productId
    let title = req.body.title;
    let url = req.body.url;
    let description = req.body.description;
    let price = req.body.price;
        
    const product = new Product(title,url,description,price);
    product.id = id;
    product.update();
    res.redirect('/');
}

exports.postDeleteProduct = (req, res) => {
    Product.delete(req.params.productId);
    res.redirect('/admin-products');
}