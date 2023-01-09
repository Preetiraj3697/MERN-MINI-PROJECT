const express = require("express");

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})
app.get("/about",(req,res)=>{
    res.send("ABOUT PAGE");
})
app.get("/contact",(req,res)=>{
    res.send("CONTACT PAGE");
})

app.listen(port,()=>{
    console.log(`Server are listening at ${port}`);
})