const mongoose = require("mongoose");
// model addProductInBasketNotUser
const ProductInBasketForRegisterClient =  mongoose.Schema({
    nameProduct: {type: String},
    price: {type: String},
    productID: {type: String},
    subCategoryName: {type: String},
    idUserFirebase: {type: String},
    qty: {type: Number},
    amount: {type: String},
    images:[{type: String}],
  });
  const DeliveryClient =  mongoose.Schema({
    name:{type: String},
    phone: {type: String},
    city: {type: String},
    street: {type: String},
    psc: {type: String},

  });  
// model MainCategory
const OrSchema = new mongoose.Schema({
   
    // clientID: {type: String,required: true,},
    data:{type: Date, default: Date.now},
    email: {type: String,required: true},
    userIdFirebase: {type: String},
    delivery: [{type: DeliveryClient}],
    payMethod:{type:String},
    productInBasket: [{type: ProductInBasketForRegisterClient}],
    
   })

// Creating model objects
const Or = mongoose.model("Or",OrSchema);

module.exports = Or;