const mongoose = require("mongoose");


// model Notebook
const VSSDNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    VSSDName: {type: String,required: true,}
})

// Creating model objects
const VSSDNotebook = mongoose.model("VSSDNotebook", VSSDNotebookSchema);

module.exports = VSSDNotebook;