const mongoose = require("mongoose");

// model Notebook
const Filter = new mongoose.Schema({

  brand: [{type: String}],
  processor: [{type: String}],
  sdiagonal: [{type: String}],
  ram: [{type: String}],
  videokart: [{type: String}],
  hdd: [{type: String}],
  os: [{type: String}],
  vssd: [{type: String}],
  core: [{type: String}],
  memoryVC: [{type: String}],

});

const NotebookFilterSchema = new mongoose.Schema({

  filter: {type: String},
  

});

// Creating model objects
const NotebookFilter = mongoose.model("NotebookFilter", NotebookFilterSchema);

module.exports = NotebookFilter;



