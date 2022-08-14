const mongoose = require("mongoose");


// model Processor
const ProcessorNotebookSchema = new mongoose.Schema({
    idSubcategory: {type: String,required: true,},
    processorName: {type: String,required: true,}
})

// Creating model objects
const ProcessorNotebook = mongoose.model("ProcessorNotebook", ProcessorNotebookSchema);

module.exports = ProcessorNotebook;