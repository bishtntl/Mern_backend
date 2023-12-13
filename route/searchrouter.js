const searchapi = require("../controller/Search");
const searchroute = require("express").Router();
searchroute.get("/search/:key", searchapi);

module.exports = searchroute;
