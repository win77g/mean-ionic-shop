const mongoose = require("mongoose");


// model CoreNotebook
const CoreNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    coreName: {type: String,required: true,}
})

// Creating model objects
const CoreNotebook = mongoose.model("CoreNotebook", CoreNotebookSchema);

module.exports = CoreNotebook;