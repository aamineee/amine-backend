const router = require("express").Router();
const Categoriecontroller = require("../controllers/categorie.controllers")
router.post("/addcategorie",Categoriecontroller.createCategorie)
router.get("/",Categoriecontroller.getAllCategorie)
module.exports = router;