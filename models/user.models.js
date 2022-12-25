const mongoose = require("mongoose");
const bcrypt = require("bcrypt") ;
const Joi = require("joi") ;
const _ =require("lodash") 
const jwt =require("jsonwebtoken")
const  saltRounds = 10;
const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength : 3 ,
        maxlength :255
    },
    prenom : {
        type: String,
        required: true,
        minlength : 3 ,
        maxlength :44
    },
    password: {
        type: String,
        required: true,
        minlength : 8 ,
        maxlength :1024
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength : 3 ,
        maxlength :255
    }
   
})
function uservalidate(user) {
   const  schema = {
    nom : Joi.string().min(3).max(44).required() ,
    prenom : Joi.string().min(3).max(44).required() ,
    password : Joi.string().min(8).max(1024).required() ,
    email : Joi.string().min().required().email() ,

   } 
   return Joi.validate(user,schema) ;
}
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
userSchema.methods.generatetokens = function() {
    const token = jwt.sign({_id:this._id},'privatekey')
    return token ;
}
module.exports = mongoose.model("User",userSchema);
//module.exports = mongoose.model("uservalidate",uservalidate)
exports.uservalidate = uservalidate 