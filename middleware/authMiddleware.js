const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')
 async function authMiddlware (req, res, next )
{
    const authHeader=req.headers.authorization 
    if (!authHeader|| !authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.UNAUTHORIZED).json({error:"Authentication invalid"
        });
    }
    const token=authHeader.split(' ')[1] 
    console.log(authHeader)
    console.log(token)
    try {
        const {username,userid}= jwt.verify(authHeader,"secret");
        req.user={username,userid}
      next()
    } catch (error) {
         return res.status(StatusCodes.UNAUTHORIZED).json({error:"Authentication invalid"});
}
}
module.exports=authMiddlware