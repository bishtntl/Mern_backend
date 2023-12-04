const { createData, getData } = require("../controller/product");
const productRouter = require("express").Router();
productRouter.post("/createdata", createData);
productRouter.get("/getdata", getData);
module.exports = productRouter;
