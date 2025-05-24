const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product.ejs',{path:'/add-product',editing: false})
}
exports.getAdminProducts = (req, res) => {
    Product.fetchAll().then((rows,fieldData) => {
        res.render('admin/product-list',{path:'/admin-products',products:rows[0]});
    }).catch(err => console.log(err));
}
exports.getEditProduct = (req, res) => {
    const editingMode = req.query.edit;
    
    Product.getProductById(req.params.productId).then((rows,fieldData) => {
        console.log("Rows",rows);
        
        res.render(
            'admin/add-product.ejs',
            {
                path:'/add-product',
                product: rows[0][0],
                editing: editingMode,
            });
    })
}

exports.postAddProduct = (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let description = req.body.description;
    let price = req.body.price;
    const product = new Product(title,url,description,price);
    product.save().then(() => {

        res.redirect('/admin-products');
    })
}

exports.postEditProduct = (req, res) => {
    let id = req.params.productId
    let title = req.body.title;
    let url = req.body.url;
    let description = req.body.description;
    let price = req.body.price;
        
    const product = new Product(title,url,description,price);
    product.id = id;
    product.update().then(() => {

        res.redirect('/admin-products');
    });
}

exports.postDeleteProduct = (req, res) => {
    Product.delete(req.params.productId).then(() => {
        res.redirect('/admin-products');
    }).catch(err => console.log(err));
    
}