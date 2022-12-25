const Categorie = require("../models/categorie.models");

module.exports.createCategorie = async (req,res) => {
    try {
        // get body content
        let { nom  
          } = req.body
        let newCategorie = new Categorie({
            nom: nom   
        })
        let savedCategorie = await newCategorie.save();
        return res.status(200).json({
            success: true,
            savedCategorie
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllCategorie = async (req,res) => {
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
//Authentication User login in mongodb nodejs?




