const {
  CartLearn,
  LearnGetCart,
  DeleteCart,
  DeleteCardone,
} = require("../controller/Addcontroller");
const { createData, getData } = require("../controller/product");

const productRouter = require("express").Router();
productRouter.post("/createdata", createData);
productRouter.get("/getdata", getData);
productRouter.post("/addlearn", CartLearn);
productRouter.get("/getlearn", LearnGetCart);
productRouter.post("/deletecart", DeleteCart);
productRouter.delete("/delete", DeleteCardone);

module.exports = productRouter;
