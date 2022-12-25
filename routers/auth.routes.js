const router = require("express").Router();
const User = require("../models/user.models")
const mongoose = require("mongoose")
const _ =require("lodash") 
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const jwt =require("jsonwebtoken")
const tokenlist={}
router.post('/login' , async(req,res)=>{
    const {error} = validate(req.body)
    if(error){
        return res.status(404).json({
            success:false,
           error: error.details[0].message
        })
    }
    let user = await User.findOne({email:req.body.email})
    if( ! user){
        return res.status(404).json({
            success:false,
           error:" Invalid Email "
        })
    }
   const checkPassword= await bcrypt.compare(req.body.password,user.password)
    if( ! checkPassword){
       
        //console.log(tokenlist)
       
        return res.status(404).json({
            success:false,
           error:" Invalid Password"
        })
}
const token = jwt.sign({ id:user._id }, req.app.get('secretKey'), { expiresIn: '1h' });
const refresh_token = jwt.sign({ id: user._id }, req.app.get('secretKey'), { expiresIn: '2h' });
tokenlist[refresh_token] = {refresh_token:refresh_token}
return  res.json({ status: "success", message:"login ok", data: { user:user, token: token, refresh_token: refresh_token } });
})

router.post('/logout' , async(req,res)=>{
    if(req.body.refresh_token && req.body.refresh_token in tokenlist) {
        delete tokenlist[req.body.refresh_token]
        res.json({ status: "success",
         message: "log out ok ", 
         data: null });
    }
   else {
    res.json({ status: "success",
     message: "refresh token not found",
      data: null});
}
})
function validate(req){
    const schema ={
        email : Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(8).max(255).required() 
    }
    return Joi.validate(req,schema)
   //return schema.validate(req );
   //return schema.validate(req)
   
}
module.exports=router ;