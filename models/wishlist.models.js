const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
    user : {
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
        },
    Produit :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Produit"
    }

})

module.exports = mongoose.model("whishlist" , wishlistSchema)