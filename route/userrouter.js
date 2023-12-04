const { login, register } = require("../controller/usercontroller");
// const auth =require('../middleware/auth')

const userrouter = require("express").Router();
// routeone.get("/h",auth,home)
userrouter.post("/register", register);
userrouter.post("/login", login);

module.exports = userrouter;
