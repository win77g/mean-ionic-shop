const mongoose = require("mongoose");


// model hdd
const OSNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    OSName: {type: String,required: true,}
})

// Creating model objects
const OSNotebook = mongoose.model("OSNotebook", OSNotebookSchema);

module.exports = OSNotebook;