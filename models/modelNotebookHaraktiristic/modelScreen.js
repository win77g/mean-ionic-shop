const mongoose = require("mongoose");


// model Screen
const ScreenNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    screenName: {type: String,required: true,}
})

// Creating model objects
const ScreenNotebook = mongoose.model("ScreenNotebook", ScreenNotebookSchema);

module.exports = ScreenNotebook;