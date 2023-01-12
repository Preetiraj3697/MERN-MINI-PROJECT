require('dotenv').config();
const express = require("express");
const app = express();
require("./db/conn");
app.use(express.json());
const {router} = require('./router/auth')
//we link the router files to make our route easy
app.use(router);
// const User = require("./model/userSchema");
//middleware
const middleware = (req,res,next) => {
   console.log("hello my middleware");
   next();
}


const port = 3000;
app.listen(port,()=>{
    console.log(`Server are listening at ${port}`);
})