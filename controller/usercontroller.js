const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRegister = require("../model/registermodel");
const sycret_key = "bsb";

const register = async (req, res) => {
  const data = req.body;
  console.log(data);
  const details = await UserRegister.findOne({ email: data.email });
  if (details) {
    res.send({ msg: "user already registered with this email" });
  }
  const hashpassword = bcrypt.hashSync(data.password, 10);
  console.log(hashpassword);
  const tempObj = {
    email: data.email,
    password: hashpassword,
    name: data.name,
   
  };
  const response = await UserRegister.create(tempObj);
  console.log(response);
  const token = jwt.sign({ email: data.email }, sycret_key, {
    expiresIn: "1y",
  });
  console.log(token);
  return res.send({
    msg: "user registered successfully",
    token: token,
    email:data.email
   
  });
};
const login = async (req, res) => {
  const data = req.body;
  if (req.body.password && req.body.email) {
    const details = await UserRegister.findOne({ email: `${data.email}` });
    if (details) {
      const validate = bcrypt.compareSync(data.password, details.password);
      if (validate) {
        const token = jwt.sign(
          { email: data.email },
          sycret_key,
          { expiresIn: "1y" },
         
        );
        return res.send({
          msg: "user logged in successfully",
          token: token,
          name: details.name,
          email:details.email
        });
      } else {
        return res.send({
          msg: "password is wrong",
        });
      }
    }
  }

  return res.send({
    msg: "data not found",
  });
};

module.exports = { login, register };
