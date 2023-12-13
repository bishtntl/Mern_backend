const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  category: String,
  img: String,
  name:String,
  heading:String,
  rating:String,
  price:String,
  prevprice:String,
  headinghover:String,
  totalhour:String,
  about:String,
  para:String,
  predata:String,
  pre:String,
  time:String,
  courses:String
});
const DataAll = mongoose.model("DataAll", userSchema);
module.exports = DataAll;
