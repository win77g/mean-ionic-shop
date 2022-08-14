const mongoose = require("mongoose");

// model SubCategory
const subCategorySchema = new mongoose.Schema({
  mainCategoryId: {type: String,required: true,},
  subCategory: {type: String,required: true,}
})

// Creating model objects
const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategory;