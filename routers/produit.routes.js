const router = require("express").Router();
const upload = require ("../middleware/Uplode")
const Produitcontroller = require("../controllers/produit.controllers")
router.post("/addproduit",upload.single('image'),Produitcontroller.addProduit)
router.get("/",Produitcontroller.getAllProduit)
router.put("/edit/:produitId",Produitcontroller.updateProduit)
router.delete("/delete/:produitId",Produitcontroller.deleteProduit)
router.get("/show/:produitId",Produitcontroller.getProduitById)
module.exports = router;