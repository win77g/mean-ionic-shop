const mongoose = require("mongoose");

// model MainCategory
const mainCategorySchema = new mongoose.Schema({
  mainCategory: {type: String,required: true,}
})

// Creating model objects
const mainCategory = mongoose.model("mainCategory", mainCategorySchema);

module.exports = mainCategory;