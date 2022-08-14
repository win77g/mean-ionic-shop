
const mongoose = require("mongoose");

// model addProductInBasketNotUser
const ProductInBasketNotUserSchema = new mongoose.Schema({
  nameProduct: {type: String,required: true,},
  price: {type: String,required: true,},
  productID: {type: String,required: true,},
  subCategoryName: {type: String,required: true,},
  client: {type: String,required: true,},
  qty: {type: Number,required: true,},
  amount: {type: String,required: true,},
  images:[{type: String,required: true,}],
  
});

// Creating model objects
const ProductInBasketNotUser = mongoose.model("ProductInBasketNotUser", ProductInBasketNotUserSchema);

module.exports = ProductInBasketNotUser;