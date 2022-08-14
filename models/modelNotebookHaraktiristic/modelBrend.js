const mongoose = require("mongoose");


// model Notebook
const BrandNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    brandName: {type: String,required: true,}
})

// Creating model objects
const BrandNotebook = mongoose.model("BrandNotebook", BrandNotebookSchema);

module.exports = BrandNotebook;