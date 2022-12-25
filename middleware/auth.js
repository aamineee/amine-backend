const jwt =require("jsonwebtoken");


 module.exports =function (req,res,next) {
    const token= res.header('x_auth_token')
    if(!token){
        return res.status(401).json({
            success: false,
            message :"acces rejected ....!"
        })
    }
    try{
        const decodeToken = jwt.verify(token,'privatekey');
        req.user=decodeToken ;
        next()
    }catch(err){
        return res.status(400).json({
            success: false,
            message :"wrong token ....!"
        })
    }
}