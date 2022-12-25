const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()
const userRoutes = require("./routers/user.routes")
const ProduitRoutes = require("./routers/produit.routes")
const CategorieRoutes= require("./routers/categorie.routes")
const adminRoutes= require("./routers/admin.routes")
const authRoutes = require("./routers/auth.routes")

const app = express();
app.use(bodyParser.json());
app.set("secretKey","amineabdallah")
// mongoose connect
mongoose.connect(process.env.DB_CONNECT)
mongoose.connection.on("connected",()=> {
    console.log("database connected successfully.")
})
mongoose.connection.on("error",(err)=> {
    console.log("error when connected to the database ",err)
})
app.use("/api/user",userRoutes)
app.use("/api/produit",ProduitRoutes)
app.use("/api/categorie",CategorieRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)



app.listen(process.env.APP_PORT,()=> {
    console.log(`server listning on port ${process.env.APP_PORT}`)
})