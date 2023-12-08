const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const {Cartroute}=require("./route/cartroute")
const connection = require("./config/db");
const userrouter = require("./route/userrouter");
const productRouter = require("./route/productroute");
const searchroute = require("./route/searchrouter");
const port = process.env.PORT || 4500;
const stripe = require("stripe")("sk_test_51OFfDcSFuYPQ8NkkuYA72lHvBGSjM85WF9l552EtiMbyoKQ9Vcg0xWQXONFqiPNbx1CMp7n6bUEL12rtIF9DYYJG00sgCMYDrL")

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(searchroute)
app.use("/api", userrouter);
app.use("/api", productRouter);
app.use("/api",Cartroute)

app.post("/api/create-checkout-session",async(req,res)=>{
  const {products} = req.body;
  console.log(products);
  const lineItems =products.map((product)=>({
      price_data:{
          currency:"inr",
          product_data:{
              name:product.heading,
          },
          unit_amount:product.price * 100
      },
      quantity:product.quantity || 1
  }))
  const session =await stripe.checkout.sessions.create({
      payment_method_types:["card"],
       line_items:lineItems,
      mode:"payment",
      success_url:"https://aesthetic-cranachan-0e1a70.netlify.app",
      cancel_url:"https://aesthetic-cranachan-0e1a70.netlify.app",
  })
  res.json({id:session.id})
})



app.listen(port, async () => {
  try {
    await connection();
    console.log("server is runnig");
  } catch (err) {
    console.log(err, "error");
  }
});
