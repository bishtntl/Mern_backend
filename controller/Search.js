const DataAll = require("../model/productmodel");
const searchapi = async (req, res) => {
  const result = await DataAll.find({
    $or: [
      { category: { $regex: `${req.params.key}`, $options: "i" } },
     
    ],
  });
  res.send(result);
};

module.exports = searchapi;
