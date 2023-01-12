const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require('../db/conn');
const User = require('../model/userSchema');
router.get("/",(req,res) => {
    res.send("hello world from the server router js")
})
//user info add with promises......======================================Using Promises
// router.post("/register",(req,res)=>{
//     const {name,email,phone,work,password,cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Please filled the field properly"});
//     }
//     User.findOne({email:email}).then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email already Exist"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=> res.status(500).json({error:"Failed to registered"}));
//     }).catch(err => {console.log(err); })
// })
//user info add with promises......======================================

//Async-Await=============================================================================
router.post("/register", async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please filled the field properly"});
    }
    try{
       const userExist = await User.findOne({email});
       if(userExist){
        return res.status(422).json({error:"Email already Exist"})
       }else if(password !== cpassword){
        return res.status(422).json({error:"password are not matching"})
       }else{
       const user = new User({name,email,phone,work,password,cpassword});
       //yeha pe
         await user.save();
        res.status(201).json({message:"user registered successfully"});
       }
    }catch(err){
        console.log(err);
    }
});

//login Route
router.post("/signin", async(req,res)=>{
    try{
     const {email,password} = req.body;
     if(!email || !password){
        return res.status(400).json({error:"Please fill all input"});
     }
     const userLogin = await User.findOne({email});
    //  console.log(userLogin);
    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        if(!isMatch){
           res.status(400).json({error:"Invalid Credientials pass"});
        }else{
           res.status(201).json({message:"user Signin Successful"});
        }
    }else{
        res.status(400).json({error:"Invalid Credientials"});
    }
    
    }catch(err){
        console.log(err);
    }
})
module.exports = {router};