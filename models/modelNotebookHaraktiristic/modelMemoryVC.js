const mongoose = require("mongoose");


// model Notebook
const MemoryVCNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    MemoryVCName: {type: String,required: true,}
})

// Creating model objects
const MemoryVCNotebook = mongoose.model("MemoryVCNotebook", MemoryVCNotebookSchema);

module.exports = MemoryVCNotebook;