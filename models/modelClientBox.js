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
    point:{type:Boolean},

  });  
  const Order = mongoose.Schema({
    data:{type: Date, default: Date.now},
    email: {type: String,required: true},
    delivery: [{type: DeliveryClient}],
    payMethod:{type:String},
    productInBasket: [{type: ProductInBasketForRegisterClient}],
  })
  const Profile = mongoose.Schema({
    name:{type: String},
    email: {type: String},
    sex: {type: String},
    birthday:{type:String},
    phone:{type:String},
  })
  const Favorit = mongoose.Schema({
    id:{type: String},
    name: {type: String},
    subCategoryName: {type: String},
    price:{type:String},
    images:{type:String},
  })
  const History = mongoose.Schema({
    id:{type: String},
    name: {type: String},
    subCategoryName: {type: String},
    price:{type:String},
    images:{type:String},
  })
// model MainCategory
const clientBoxSchema = new mongoose.Schema({
   
    // clientID: {type: String,required: true,},
    email: {type: String,required: true,},
    userIdFirebase: {type: String, unique : true, required : true, dropDups: true},
    delivery: [{type: DeliveryClient}],
    payMethod:{type: String},
    order: [{type: Order}],
    productInBasket: [{type: ProductInBasketForRegisterClient}],
    profile: [{type: Profile}],
    currency:{type: String},
    language:{type: String},
    favorites:[{type: Favorit}],
    history:[{type: History}],
   })

// Creating model objects
const clientBox = mongoose.model("clientBox",clientBoxSchema);

module.exports = clientBox;