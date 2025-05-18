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
