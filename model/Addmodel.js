const mongoose = require("mongoose");

const CartAdd = mongoose.Schema({
  id: Number,
  img: String,
  heading: String,
  rating: String,
  name: String,
  headinghover: String,
  about: String,
  totalhour: String,
  price:String,
});


const CardLearn = mongoose.Schema({
    id : Number,
    img : String,
    heading:String,
    rating:String,
    name:String,
    price:Number,
    time:String,
    totalhour:String,
});



const Learning=mongoose.model("LearnAllCart",CardLearn)
const AddCart = mongoose.model("AddtoCartModel", CartAdd,);
module.exports = { AddCart,Learning };
