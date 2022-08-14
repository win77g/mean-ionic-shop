const mongoose = require("mongoose");


// model Notebook
const RamNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    ramName: {type: String,required: true,}
})

// Creating model objects
const RamNotebook = mongoose.model("RamNotebook", RamNotebookSchema);

module.exports = RamNotebook;