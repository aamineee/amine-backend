const Produit= require("../models/produit.models");
module.exports.addProduit = async (req,res) => {
    try {
        // get body content
        let { nom  , prix,image ,description,categorie
          } = req.body
        let newProduit = new Produit({
            nom: nom,
            prix :prix,
            image : image,
            description : description ,
            categorie : categorie   

        })
        newProduit.image=req.file.path
        let savedProduit = await newProduit.save();
        return res.status(200).json({
            success: true,
            savedProduit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllProduit = async (req,res) => {
    try {
        let Produits = await Produit.find();
        return res.status(200).json({
            success: true,
            Produits
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
    
}
module.exports.getProduitById = async (req,res) =>{
    try{
        let {produitId} = req.params;
        let getProduit = await Produit.findById(produitId);
        return res.status(200).json({
            success: true,
            getProduit
        })

    }catch(err){
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteProduit = async (req,res) => {
    try {
        let {produitId} = req.params;
        await Produit.findByIdAndDelete(produitId);
        return res.status(200).json({
            success: true,
            message: "Produit deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateProduit = async (req,res) =>{
    try{
        let {produitId} = req.params;
        let { nom, prix , image ,description ,categorie} = req.body ;
        let updatedProduit = await Produit.findByIdAndUpdate(produitId,{
            $set: {
                nom: nom , 
                prix : prix ,
                image : image ,
                description : description ,
                categorie : categorie 


            }
        },{new: true});
        return res.status(200).json({
            success: true,
            updatedProduit
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
