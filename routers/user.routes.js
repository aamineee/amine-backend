const router = require("express").Router();
const userController = require("../controllers/user.controllers")
router.post("/create",userController.createUser)
router.get("/",userController.getAllUsers)
module.exports = router;