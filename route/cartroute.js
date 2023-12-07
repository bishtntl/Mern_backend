const { Cart, getcartadd, DeleteCart } = require("../controller/Addcontroller");

const Cartroute = require("express").Router();
Cartroute.get("/addgetcart", getcartadd);
Cartroute.post("/addcart", Cart);


module.exports = { Cartroute };
