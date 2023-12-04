const {HomePage} = require("../data/dummy")
const DataAll = require("../model/productmodel");

const createData = async (req, res) => {
  const response = await DataAll.create(HomePage);
  console.log(response)
  res.send(response);
};

const getData = async (req, res) => {
  const result = await DataAll.find({});
  res.send(result);
};

module.exports = {
  createData,
  getData,
};