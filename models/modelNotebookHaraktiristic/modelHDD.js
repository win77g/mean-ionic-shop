const mongoose = require("mongoose");


// model hdd
const HDDNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    HDDName: {type: String,required: true,}
})

// Creating model objects
const HDDNotebook = mongoose.model("HDDNotebook", HDDNotebookSchema);

module.exports = HDDNotebook;