const mongoose = require("mongoose");
const bcrypt = require("bcrypt") ;
const  saltRounds = 10;
const adminSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength : 3 ,
        maxlength :255
    } ,
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
adminSchema.pre('saved', function (next) {
    this.password = bcrypt.hashSync(this.password,saltRounds)
    next();
});
module.exports = mongoose.model("admin",adminSchema)

//.hashSync(this.password, saltRounds);
