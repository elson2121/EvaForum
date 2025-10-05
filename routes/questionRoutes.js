const express = require('express') 
const authMiddlware = require('../middleware/authMiddleware')
const router = express.Router()
const questionRoutes  = require('../routes/questionRoutes')


//authentication middleware

router.get("/all-question",authMiddlware,(req,res)=>{
    res.send("all question ")
}) 
module.exports=router