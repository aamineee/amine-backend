const router = require("express").Router();
const adminController = require("../controllers/admin.controllers")
router.post("/create",adminController.createAdmin)

module.exports = router;