const mongoose = require("mongoose");


// model Videokart
const VideokartNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    VideokartName: {type: String,required: true,}
})

// Creating model objects
const VideokartNotebook = mongoose.model("VideokartNotebook", VideokartNotebookSchema);

module.exports = VideokartNotebook;