const mongoose= require("mongoose") ; 
const ProduitSchema= new mongoose.Schema({
    nom : {
        type :String ,  
        required : true , 
        unique: true
    } , 
    prix : {
        type : String , 
    
    },
    image : {
        type: String ,
    },
    description : {
        type: String ,
    },
    categorie : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "Categorie"
        }
    
})
module.exports = mongoose.model("Produit",ProduitSchema) ; 