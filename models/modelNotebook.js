const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

// model Notebook
const NotebookSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  price: {type: String,required: true,},
  mainCategory_Id: {type: String,required: true,},
  subCategory_Id: {type: String,required: true,},
  brand_name: {type: String,required: true,},
  processor_name: {type: String,required: true,},
  sdiagonal_name: {type: String,required: true,},
  ram_name: {type: String,required: true,},
  videokart_name: {type: String,required: true,},
  hdd_name: {type: String,required: true,},
  os_name: {type: String,required: true,},
  vssd_name: {type: String,required: true,},
  core_name: {type: String,required: true,},
  memoryVC_name: {type: String,required: true,},
  description: {type: String,required: true,},
  description_short: {type: String,required: true,},
  description_seo: {type: String,required: true,},
  key_wordSEO: {type: String,required: true,},
  images:[{type: String,required: true,}],
  
});

// Creating model objects
NotebookSchema.plugin(mongoosePaginate);
// declare a mongoose document based on a Typescript interface representing your schema


const Notebook = mongoose.model("Notebook", NotebookSchema);



module.exports = Notebook;



