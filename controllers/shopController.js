
exports.getShop = (req, res) => {
    res.render('shop/product-list',{path:'/shop'})
}
exports.getProducts = (req, res) => {
    res.render('shop/product-list',{path:'/products'})
}
exports.getCart = (req, res) => {
    res.render('shop/cart',{path:'/cart'})
}