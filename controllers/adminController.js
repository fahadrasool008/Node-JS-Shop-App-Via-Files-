
exports.getAddProduct = (req, res) => {
    res.render('admin/add-product.ejs',{path:'/add-product'})
}
exports.getAdminProducts = (req, res) => {
    res.render('admin/admin-products',{path:'/admin-products'})
}