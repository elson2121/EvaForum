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

      const decoded = jwt.verify(token, process.env.JWT_SECRET || process.env.JWT_SECRET); // Use the secret, not the token
        req.user = { username: decoded.username, userid: decoded.userid }; // Adjust based on payload
        next();
      //   const {username,userid}= jwt.verify(authHeader,token);
      //   req.user={username,userid}
      // next()
    } catch (error) {
         return res.status(StatusCodes.UNAUTHORIZED).json({error:"Authentication invalid"});
}
}
module.exports=authMiddlware