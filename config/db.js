const mongoose = require("mongoose");
const cloudurl = "mongodb+srv://Balam_Singh_Bisht:Balam12345@cluster0.psos9gw.mongodb.net/ProjectMernStack?retryWrites=true&w=majority"
mongoose.get("strictQuery",true)
const connection = async () => {
  try {
    await mongoose.connect(cloudurl);
    console.log("Connected to the database");
  }
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};
module.exports = connection;







