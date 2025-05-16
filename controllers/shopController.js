const Product = require("../models/product");

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
exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart" });
};
