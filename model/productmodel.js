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
 







  // rating:String,
  // name:String,
  // viewer:String,
  // previous_price:String,
  // price : String,
  // updated_date:String,
  // total_hrs:String,
  // para:String,
  // key_1:String,
  // key_2:String,
  // key_3:String,
  // page:String,
  // category:String,
  // sub_category:String,
  // popular_topic:String
});
const DataAll = mongoose.model("DataAll", userSchema);
module.exports = DataAll;
