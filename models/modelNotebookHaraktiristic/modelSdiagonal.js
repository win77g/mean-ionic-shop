const mongoose = require("mongoose");


// model sdiagonal
const SdiagonalNotebooSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    sdiagonalName: {type: String,required: true,}
})

// Creating model objects
const SdiagonalNotebook = mongoose.model("SdiagonalNotebook", SdiagonalNotebooSchema);

module.exports = SdiagonalNotebook;