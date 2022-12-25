const User = require("../models/user.models");
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
const _ =require("lodash") 

module.exports.createUser = async (req,res) => {
    const saltRounds = 10;
    try {
      
        // get body content
        let { nom,
            prenom ,
            password,
            email
          } = req.body
        let newUser = new User({
            nom: nom,
            prenom:prenom ,
            password: password,
            email: email,
           
        })
        const token = newUser.generatetokens() ;
        let savedUser = await newUser.save();
        res.header( "x_auth_token",token)
        return res.status(200).json({
            success: true,
            user :savedUser,
            x_auth_token : token 
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllUsers = async (req,res) => {
    try {
        let users = await User.find();
        return res.status(200).json({
            success: true,
            users
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}