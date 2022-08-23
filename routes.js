const express = require("express");
const NotebookModel = require("./models/modelNotebook");
const mainCategoryModel = require("./models/modelMainCategory");
const subCategoryModel = require("./models/modelSubCategory");
const BrandNotebookModel = require("./models/modelNotebookHaraktiristic/modelBrend");
const ProcessorNotebookModel = require("./models/modelNotebookHaraktiristic/modelProcessor");
const SdiagonalNotebookModel = require("./models/modelNotebookHaraktiristic/modelSdiagonal");
const RamNotebookModel = require("./models/modelNotebookHaraktiristic/modelRam");
const VideokartNotebookModel = require("./models/modelNotebookHaraktiristic/modelVideokart");
const HDDNotebookModel = require("./models/modelNotebookHaraktiristic/modelHDD");
const VSSDNotebookModel = require("./models/modelNotebookHaraktiristic/modelVSSD");
const OSNotebookModel = require("./models/modelNotebookHaraktiristic/modelOS");
const CoreNotebookModel = require("./models/modelNotebookHaraktiristic/modelCore");
const ScreenNotebookModel = require("./models/modelNotebookHaraktiristic/modelScreen");
const MemoryVCNotebookModel = require("./models/modelNotebookHaraktiristic/modelMemoryVC");
const ProductInBasketNotUserModel = require("./models/modelProductInBasketNotUser");
const clientBoxModel = require("./models/modelClientBox");
const OrderModel = require("./models/modelOrder");
const OrModel = require("./models/modelOr");
const NotebookFilterModel = require("./models/modelNotebookFilter");

const app = express();
// var cors = require('cors')

// var corsOptions = {
//   origin: 'http://localhost:8100',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.get("/", async (req, res) => {
    res.json({ message: "Welcome to my application." });
  });
// add category
app.post("/add_mainCategory",async (request, response) => {
  const category = new mainCategoryModel(request.body);
console.log('/add_mainCategory')
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
// get categorys
app.get("/get_mainCategorys", async (request, response) => {
  const category = await mainCategoryModel.find({});
  console.log(category)
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
// add subcategory
app.post("/add_subCategory",async (request, response) => {
  const category = new subCategoryModel(request.body);
console.log('/add_subCategory')
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
// get subcategorys
app.get("/get_subCategorys", async (request, response) => {
  const subcategory = await subCategoryModel.find({});
  console.log(subcategory)
  try {
    response.send(subcategory);
  } catch (error) {
    response.status(500).send(error);
  }
});
// get subcategorys where
app.get('/get_subCategory_where/:id', async (request, response) => {
  const subcategory = await subCategoryModel.find({'mainCategoryId':request.params.id});;
  try {
    response.send(subcategory);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/add_notebook",async (request, response) => {
    const notebook = new NotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await notebook.save();
      response.send(notebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
// 
app.get("/notebook", async (request, response) => {
    const notebook = await NotebookModel.find({});
    console.log(notebook)
    try {
      response.send(notebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
//

app.get("/category/:name", async (request, response) => {
  
  const page = request.query.page;
  const sort = request.query.sort;
  const skip = page * 6
  console.log(page,request.query,skip,sort)   
  if(request.params.name === 'Notebook'){// выводим модель 
    const notebook = await NotebookModel.find(request.query).sort(sort).limit(6).skip(skip);
  
    const brend = []
    const processor = []
    const sdiagonal = []
    const ram = []
    const videokart = []
    const hdd = []
    const os = []
    const vssd = []
    const core = []
    const memoryVC = []
    for (const key in notebook) {
      brend.push(notebook[key].brand_name)
      processor.push(notebook[key].processor_name)
      sdiagonal.push(notebook[key].sdiagonal_name)
      ram.push(notebook[key].ram_name)
      videokart.push(notebook[key].videokart_name)
      hdd.push(notebook[key].hdd_name)
      os.push(notebook[key].os_name)
      vssd.push(notebook[key].vssd_name)
      core.push(notebook[key].core_name)
      memoryVC.push(notebook[key].memoryVC_name)
    }
    // 
    const brand2 = {};
    brend.forEach(item => {
      brand2[item] = (brand2[item] || 0) + 1;
    });
    const processor2 = {};
    processor.forEach(item => {
      processor2[item] = (processor2[item] || 0) + 1;
    });
    const sdiagonal2 = {};
    sdiagonal.forEach(item => {
      sdiagonal2[item] = (sdiagonal2[item] || 0) + 1;
    });
    const ram2 = {};
    ram.forEach(item => {
      ram2[item] = (ram2[item] || 0) + 1;
    });
    const videokart2 = {};
    videokart.forEach(item => {
      videokart2[item] = (videokart2[item] || 0) + 1;
    });
    const hdd2 = {};
    hdd.forEach(item => {
      hdd2[item] = (hdd2[item] || 0) + 1;
    });
    const os2 = {};
    os.forEach(item => {
      os2[item] = (os2[item] || 0) + 1;
    });
    const vssd2 = {};
    vssd.forEach(item => {
      vssd2[item] = (vssd2[item] || 0) + 1;
    });
    const core2 = {};
    core.forEach(item => {
      core2[item] = (core2[item] || 0) + 1;
    });
    const memoryVC2 = {};
    memoryVC.forEach(item => {
      memoryVC2[item] = (memoryVC2[item] || 0) + 1;
    });
    // console.log(typeof(memoryVC2))
    let f = {
      'brend':brand2,
      'processor':processor2,
      'sdiagonal':sdiagonal2,
      'ram':ram2,
      'videokart':videokart2,
      'os':os2,
      'vssd':vssd2,
      'core':core2,
      'memoryVC':memoryVC2,
    }
    
    let filter = JSON.stringify(f)
    // console.log(filter)
    // var r = Object.assign({}, f);
    
    let q ={
      'filter':filter
    }
    
    const notebookFilter = new NotebookFilterModel(q);
    
  try {
    
    // await notebookFilter.save();
    response.json(notebook);
  } catch (error) {
    response.status(500).send(error);
  }
  }
});

//  haracteristiki Notebook


  // add brand
  app.post("/add_brandNotebook",async (request, response) => {
    const brandNotebook = new BrandNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await brandNotebook.save();
      response.send(brandNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get brand
  app.get("/brand_notebook", async (request, response) => {
    const brandNotebook = await BrandNotebookModel.find({});
    console.log(brandNotebook)
    try {
      response.send(brandNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete brand
  app.delete("/brand_notebook_delete/:id", async (request, response) => {
    try {
      const food = await BrandNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!food) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add processor
  app.post("/add_processorNotebook",async (request, response) => {
    const processorNotebook = new ProcessorNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await processorNotebook.save();
      response.send(processorNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get processor
  app.get("/processor_notebook", async (request, response) => {
    const processorNotebook = await ProcessorNotebookModel.find({});
    console.log(processorNotebook)
    try {
      response.send(processorNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete processor
  app.delete("/processor_notebook_delete/:id", async (request, response) => {
    try {
      const processor= await ProcessorNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!processor) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add sdiagonal
  app.post("/add_sdiagonalNotebook",async (request, response) => {
    const sdiagonalNotebook = new SdiagonalNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await sdiagonalNotebook.save();
      response.send(sdiagonalNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get sdiagonal
  app.get("/sdiagonal_notebook", async (request, response) => {
    const sdiagonalNotebook = await SdiagonalNotebookModel.find({});
    console.log(sdiagonalNotebook)
    try {
      response.send(sdiagonalNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete processor
  app.delete("/sdiagonal_notebook_delete/:id", async (request, response) => {
    try {
      const processor = await SdiagonalNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!processor) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add ram
  app.post("/add_ramNotebook",async (request, response) => {
    const ramNotebook = new RamNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await ramNotebook.save();
      response.send(ramNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get ram
  app.get("/ram_notebook", async (request, response) => {
    const ramNotebook = await RamNotebookModel.find({});
    console.log(ramNotebook)
    try {
      response.send(ramNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete processor
  app.delete("/ram_notebook_delete/:id", async (request, response) => {
    try {
      const ramNotebook = await RamNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!ramNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add videokart
  app.post("/add_videokartNotebook",async (request, response) => {
    const videokartNotebook = new VideokartNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await videokartNotebook.save();
      response.send(videokartNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get videokart
  app.get("/videokart_notebook", async (request, response) => {
    const videokartNotebook = await VideokartNotebookModel.find({});
    console.log(videokartNotebook)
    try {
      response.send(videokartNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete videokart
  app.delete("/videokart_notebook_delete/:id", async (request, response) => {
    try {
      const videokartNotebook = await VideokartNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!videokartNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
   // add hdd
   app.post("/add_hddNotebook",async (request, response) => {
    const hddNotebook = new HDDNotebookModel(request.body);
  console.log('/add_notebook')
    try {
      await hddNotebook.save();
      response.send(hddNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get hdd
  app.get("/hdd_notebook", async (request, response) => {
    const hddNotebook = await HDDNotebookModel.find({});
    console.log(hddNotebook)
    try {
      response.send(hddNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete hdd
  app.delete("/hdd_notebook_delete/:id", async (request, response) => {
    try {
      const hddNotebook = await HDDNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!hddNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add os
  app.post("/add_osNotebook",async (request, response) => {
    const osNotebook = new OSNotebookModel(request.body);
  
    try {
      await osNotebook.save();
      response.send(osNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get hdd
  app.get("/os_notebook", async (request, response) => {
    const osNotebook = await OSNotebookModel.find({});
    
    try {
      response.send(osNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete hdd
  app.delete("/os_notebook_delete/:id", async (request, response) => {
    try {
      const osNotebook = await OSNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!osNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add vssd
  app.post("/add_vssdNotebook",async (request, response) => {
    const vssdNotebook = new VSSDNotebookModel(request.body);
 
    try {
      await vssdNotebook.save();
      response.send(vssdNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get hdd
  app.get("/vssd_notebook", async (request, response) => {
    const vssdNotebook = await VSSDNotebookModel.find({});
   
    try {
      response.send(vssdNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete hdd
  app.delete("/vssd_notebook_delete/:id", async (request, response) => {
    try {
      const vssdNotebook = await VSSDNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!vssdNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
   // add core
   app.post("/add_coreNotebook",async (request, response) => {
    const coreNotebook = new CoreNotebookModel(request.body);
  
    try {
      await coreNotebook.save();
      response.send(coreNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get core
  app.get("/core_notebook", async (request, response) => {
    const coreNotebook = await CoreNotebookModel.find({});
   
    try {
      response.send(coreNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete core
  app.delete("/core_notebook_delete/:id", async (request, response) => {
    try {
      const coreNotebook = await CoreNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!coreNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add screen
  app.post("/add_screenNotebook",async (request, response) => {
    const screenNotebook = new ScreenNotebookModel(request.body);
 
    try {
      await screenNotebook.save();
      response.send(screenNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get core
  app.get("/screen_notebook", async (request, response) => {
    const screenNotebook = await ScreenNotebookModel.find({});
   
    try {
      response.send(screenNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete screen
  app.delete("/screen_notebook_delete/:id", async (request, response) => {
    try {
      const screenNotebook = await ScreenNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!screenNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add MemoryVC
  app.post("/add_MemoryVCNotebook",async (request, response) => {
    const MemoryVCNotebook = new MemoryVCNotebookModel(request.body);
  
    try {
      await MemoryVCNotebook.save();
      response.send(MemoryVCNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
});
  // get core
  app.get("/MemoryVC_notebook", async (request, response) => {
    const MemoryVCNotebook = await MemoryVCNotebookModel.find({});
    console.log(MemoryVCNotebook)
    try {
      response.send(MemoryVCNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // delete MemoryVC
  app.delete("/MemoryVC_notebook_delete/:id", async (request, response) => {
    try {
      const MemoryVCNotebook = await MemoryVCNotebookModel.findByIdAndDelete(request.params.id);
  
      if (!MemoryVCNotebook) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  // add product in basket not user addProductInBasketNotUser
  app.post("/addProductInBasketNotUser",async (request, response) => {
    console.log(request.body)
    const ProductInBasket = new ProductInBasketNotUserModel(request.body);
      console.log(ProductInBasket)
    try {
      await ProductInBasket.save();
      response.send(ProductInBasket);
    } catch (error) {
      response.status(500).send(error);
    }
});
// get product in basket where getSameProductInBasketNotUser
app.get('/productInBasketNotUser_where/:id', async (request, response) => {
  const productInBasket = await ProductInBasketNotUserModel.find({'client':request.params.id});;
  try {
    response.send(productInBasket);
  } catch (error) {
    response.status(500).send(error);
  }
});
// get same product in basket
app.get('/getSameProductInBasketNotUser_where/:id', async (request, response) => {
  const productInBasket = await ProductInBasketNotUserModel.find({'productID':request.params.id});;
  try {
    response.send(productInBasket);
  } catch (error) {
    response.status(500).send(error);
  }
});
// delete same product in basket
app.delete('/deleteProductInBasketNotUser_where/:id', async (request, response) => {
  const productInBasket = await ProductInBasketNotUserModel.deleteMany({'client':request.params.id});
  try {
    response.send(productInBasket);
  } catch (error) {
    response.status(500).send(error);
  }
});
// update same product clientBoxSchema
app.put("/product/:id",async (request, response) => {
  const { id } = request.params;
  
  
  try {
    const product = await ProductInBasketNotUserModel.findByIdAndUpdate(id, { 
      qty:request.body.qty,
      amount:request.body.amount
    });
    //response.send(product);
    response.json(product);
  } catch (e) {
    response.status(500).send(e);
  }
});
//delete product in basket
app.delete("/deleteProductinbasketNotRegister/:id", async (request, response) => {
  try {
    const food = await ProductInBasketNotUserModel.deleteMany({'_id':request.params.id});

    if (!food) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
// ---------------------------Order--------------------------------
// create order
// app.post("/createOrder", cors(corsOptions),async (request, response) => {
//   const clientBox = new OrderModel(request.body);
//   try {
//     await clientBox.save();
//     response.send(clientBox);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// create order
app.post("/createOr",async (request, response) => {
  const clientBox = new OrModel(request.body);
  try {
    await clientBox.save();
    response.send(clientBox);
  } catch (error) {
    response.status(500).send(error);
  }
});

// ---------------------------CLIENT BOX----------------------------

app.post("/createClientBox",async (request, response) => {
  const clientBox = new clientBoxModel(request.body);
  try {
    await clientBox.save();
    response.send(clientBox);
  } catch (error) {
    response.status(500).send(error);
  }
});

// get same product in basket
app.get('/getClientBox_where/:id', async (request, response) => {
  const ClientBox = await clientBoxModel.find({'userIdFirebase':request.params.id});;
  try {
    response.send(ClientBox);
  } catch (error) {
    response.status(500).send(error);
  }
});
// update  product clientBox
app.put("/updateProductInBasketInClientBox/:id",async (request, response) => {
  const { id } = request.params;
 
  
  try {
    const product = await clientBoxModel.findByIdAndUpdate({_id : id},{ 

      productInBasket: request.body
    });
    //response.send(product);
    response.json(product);
  } catch (e) {
    response.status(500).send(e);
  }
});
// update  delivery clientBox
app.put("/updateDeliveryInClientBox/:id",async (request, response) => {
  const { id } = request.params;
  
  
  try {
    const product = await clientBoxModel.findByIdAndUpdate(id,{ 
      delivery:request.body,
      
    },{new: true});
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
// update  payMathod clientBox
app.put("/updatePayMathodInClientBox/:id",async (request, response) => {
  const { id } = request.params;
  
  
  try {
    const product = await clientBoxModel.findByIdAndUpdate(id,{ 
      payMethod:request.body.payMethod,
      
    },{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});

// update order clientBox
app.put("/updateOrderInClientBox/:id",async (request, response) => {
  const { id } = request.params;
  
  
  try {
    const product = await clientBoxModel.updateOne({_id:id},{ 
      $push:{order:{$each:[request.body]}}
      
    },{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
// clear field productInBasket in clientBox
app.put("/clearFieldProductInBasketInClientBox/:id",async (request, response) => {
  const { id } = request.params;
  
  
  try {
    const product = await clientBoxModel.updateOne({_id:id},{ 
      $unset:{productInBasket:""}
      
    });
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
// delete one order in clientBox
app.put("/deleteOneOrderInClientBox/:id", async (request, response) => {
  console.log(request.params,request.body)
  const { id } = request.params;
  try {
    const food = await clientBoxModel.updateOne(
      
      {'_id':id},
      {$pull:{order:{_id:request.body}}},
      {new: true});// return order

    if (!food) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
// create data for filter bar
app.get('/filterNotebook/', async (request, response) => {
    const filterNotebook = await  NotebookFilterModel.find({});
    try {
      response.send(filterNotebook);
    } catch (error) {
      response.status(500).send(error);
    }
  });
// create data for filter bar
// app.get('/filteringNotebookCollectionAndSkroll/', async (request, response) => {
//   const page = request.query.page;
//   console.log(page)
//   const skip = page * 4

//   const filterNotebook = await  NotebookModel.find(request.query).limit(4).skip(skip);
//   try {
//     response.send(filterNotebook);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });  
// get filering data from colection notebook
  app.get("/filteringNotebookCollection/", async (request, response) => {
    
     
      
      const notebook = await NotebookModel.find(request.query);
      // console.log(notebook)
      // 
      const brend = []
      const processor = []
      const sdiagonal = []
      const ram = []
      const videokart = []
      const hdd = []
      const os = []
      const vssd = []
      const core = []
      const memoryVC = []
      for (const key in notebook) {
        brend.push(notebook[key].brand_name)
        processor.push(notebook[key].processor_name)
        sdiagonal.push(notebook[key].sdiagonal_name)
        ram.push(notebook[key].ram_name)
        videokart.push(notebook[key].videokart_name)
        hdd.push(notebook[key].hdd_name)
        os.push(notebook[key].os_name)
        vssd.push(notebook[key].vssd_name)
        core.push(notebook[key].core_name)
        memoryVC.push(notebook[key].memoryVC_name)
      }
      // 
      const brand2 = {};
      brend.forEach(item => {
        brand2[item] = (brand2[item] || 0) + 1;
      });
      const processor2 = {};
      processor.forEach(item => {
        processor2[item] = (processor2[item] || 0) + 1;
      });
      const sdiagonal2 = {};
      sdiagonal.forEach(item => {
        sdiagonal2[item] = (sdiagonal2[item] || 0) + 1;
      });
      const ram2 = {};
      ram.forEach(item => {
        ram2[item] = (ram2[item] || 0) + 1;
      });
      const videokart2 = {};
      videokart.forEach(item => {
        videokart2[item] = (videokart2[item] || 0) + 1;
      });
      const hdd2 = {};
      hdd.forEach(item => {
        hdd2[item] = (hdd2[item] || 0) + 1;
      });
      const os2 = {};
      os.forEach(item => {
        os2[item] = (os2[item] || 0) + 1;
      });
      const vssd2 = {};
      vssd.forEach(item => {
        vssd2[item] = (vssd2[item] || 0) + 1;
      });
      const core2 = {};
      core.forEach(item => {
        core2[item] = (core2[item] || 0) + 1;
      });
      const memoryVC2 = {};
      memoryVC.forEach(item => {
        memoryVC2[item] = (memoryVC2[item] || 0) + 1;
      });
      // console.log(typeof(memoryVC2))
      let f = {
        'brend':brand2,
        'processor':processor2,
        'sdiagonal':sdiagonal2,
        'ram':ram2,
        'videokart':videokart2,
        'os':os2,
        'vssd':vssd2,
        'core':core2,
        'memoryVC':memoryVC2,
      }
      
      // let filter = JSON.stringify(f)
      // console.log(filter)
      // var r = Object.assign({}, f);
      
      let q ={
        'filter':f
      }
      // 
      try {
        response.json({q});
      } catch (error) {
        response.status(500).send(error);
      }
      
   
  });
// ...
// get item
app.get('/getItem/:subCategoryName', async (request, response) => {
  console.log(request.params,request.query)
  if(request.params.subCategoryName === 'Notebook'){// выводим модель 
     const product = await NotebookModel.find({'_id':request.query.id});
  try {
    response.send(product);
  } catch (error) {
    response.status(500).send(error);
  }
 }
});

module.exports = app;