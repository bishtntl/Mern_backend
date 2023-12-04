const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

const connection = require("./config/db");
const userrouter = require("./route/userrouter");
const productRouter = require("./route/productroute");
const port = process.env.PORT || 4500;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/api", userrouter);
app.use("/api", productRouter);

app.listen(port, async () => {
  try {
    await connection();
    console.log("server is runnig");
  } catch (err) {
    console.log(err, "error");
  }
});
