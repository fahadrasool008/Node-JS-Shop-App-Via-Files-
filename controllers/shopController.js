const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getShop = (req, res) => {
  Product.fetchAll().then((rows,fieldData) => {
    console.log(rows);
    
    res.render("shop/product-list", { path: "/shop", products: rows[0] });
  }).catch(err => console.log(err));
};

exports.getProducts = (req, res) => {
  Product.fetchAll().then((rows,fieldData) => {

    res.render("shop/product-list", { path: "/shop", products: rows[0] });
  }).catch(err => console.log(err));
};

exports.getProductById = (req,res) => {
  Product.getProductById(req.params.productId).then((rows,_) => {
    res.render('shop/product-details',{product:rows[0][0],path:'/products'});
  })
}
exports.getCart = (req, res) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      let cartProducts = [];
      for (const product of products) {
            const productData = cart.products.find(prod => prod.id === product.id);
            if(productData) {
              cartProducts.push({product: product, qty: productData.qty});
            }
      }
      res.render("shop/cart", { path: "/cart",cartProducts:cartProducts});
    })
  })
  
};

exports.postAddToCart = (req, res) => {
  Product.getProductById(req.params.productId,(product) => {
    Cart.addProduct(product.id,product.price);
    res.redirect('/');
  });
};

exports.getRemoveFromCart = (req, res) => {
  Cart.removeFromCart(req.params.productId,req.query.price);
  console.log("Cart Reached");
  
  res.redirect('/cart');
};
