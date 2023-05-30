const express=require("express");
const { errorhandle } = require("./middleware/error");
const app=express();

app.use(express.json());

// Routes import
const product=require("./routes/productRoute");

app.use("/api/v1",product);

// middlewares

app.use(errorhandle);



module.exports=app;