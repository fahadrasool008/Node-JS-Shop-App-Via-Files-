const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getShop = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { path: "/shop", products: products });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { path: "/products", products: products });
  });
};

exports.getProductById = (req,res) => {
  Product.getProductById(req.params.productId,(product) => {
    res.render('shop/product-details',{product:product,path:'/products'});
    
  })
}
exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart" });
};

exports.postAddToCart = (req, res) => {
  Product.getProductById(req.params.productId,(product) => {
    Cart.addProduct(product.id,product.price);
    res.redirect('/');
  });
};
