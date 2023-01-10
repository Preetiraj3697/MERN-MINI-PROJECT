require('dotenv').config();
const express = require("express");
require("./db/conn");

//middleware
const middleware = (req,res,next) => {
   console.log("hello my middleware");
   next();
}

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})
app.get("/about",middleware,(req,res)=>{
    console.log("hello my About");
    res.send("ABOUT PAGE");
})
app.get("/contact",(req,res)=>{
    res.send("CONTACT PAGE");
})

app.listen(port,()=>{
    console.log(`Server are listening at ${port}`);
})