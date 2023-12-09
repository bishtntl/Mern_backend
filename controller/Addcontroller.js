const { AddCart, Learning } = require("../model/Addmodel");

const Cart = async (req, res) => {
  const dataone = req.body;
  const data = await AddCart.create(dataone);
  res.send(data);
};

const getcartadd = async (req, res) => {
  const data = await AddCart.find({});
  res.send(data);
};

// const DeleteCard = async (req,res) =>{
//   const deletedata = await AddCart.delete();
//   res.send(deletedata)
// }

const CartLearn = async (req, res) => {
  const data = req.body;
  const createdata = await Learning.create(data);
  res.send(createdata);
};
const LearnGetCart = async (req, res) => {
  const getcartdata = await Learning.find({});
  res.send(getcartdata);
};
const DeleteCart = async (req, res) => {
  const data=req.body;
  console.log(data.id)
  const deletedata = await AddCart.findOneAndDelete({id:data.id});
  res.send(deletedata);
};
module.exports = { Cart, getcartadd, CartLearn, LearnGetCart, DeleteCart };
