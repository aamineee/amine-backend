const Admin = require("../models/admin.models");
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
const _ =require("lodash") 

module.exports.createAdmin = async (req,res) => {
    const saltRounds = 10;
    try {
      
        // get body content
        let { nom,
            password,
            email
          } = req.body
        let newadmin = new Admin({
            nom: nom,
            password: password,
            email: email
           
        })
       
        let savedadmin = await newadmin.save();
      
        return res.status(200).json({
            success: true,
            user :savedadmin,
        
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}