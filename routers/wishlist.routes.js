const router = require("express").Router();
const wishlistController = require("../controllers/wishlist.controllers")
router.post("/create",wishlistController.createWishlist)
router.get("/",wishlistController.getAllwishlist)
router.delete("/delete/:wishlistId",wishlistController.deleteWishlist)
module.exports = router;