const Wishlist = require("../models/wishlist.models");

module.exports.createWishlist = async (req,res) => {
    try {
        // get body content
        let { user , produit  
          } = req.body
        let newWshlist = new Wishlist({
            user: user ,
            produit : produit 
        })
        let savedWishlist = await newWshlist.save();
        return res.status(200).json({
            success: true,
            savedWishlist
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllwishlist = async (req,res) => {
    try {
        let Wishlists = await Wishlist.find();
        return res.status(200).json({
            success: true,
            Wishlists
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteWishlist = async (req,res) => {
    try {
        let {wishlistId} = req.params;
        await Wishlist.findByIdAndDelete(wishlistId);
        return res.status(200).json({
            success: true,
            message: "Wishlist deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}