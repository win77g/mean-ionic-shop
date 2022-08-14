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
  const Order = mongoose.Schema({
    data:{type: Date, default: Date.now},
    email: {type: String,required: true},
    delivery: [{type: DeliveryClient}],
    payMethod:{type:String},
    productInBasket: [{type: ProductInBasketForRegisterClient}],
  })
// model MainCategory
const clientBoxSchema = new mongoose.Schema({
   
    // clientID: {type: String,required: true,},
    email: {type: String,required: true,},
    userIdFirebase: {type: String, unique : true, required : true, dropDups: true},
    delivery: [{type: DeliveryClient}],
    payMethod:{type:String},
    order: [{type: Order}],
    productInBasket: [{type: ProductInBasketForRegisterClient}],
    
   })

// Creating model objects
const clientBox = mongoose.model("clientBox",clientBoxSchema);

module.exports = clientBox;