const express = require('express') 
const authMiddlware = require('../middleware/authMiddleware')
const router = express.Router()
// const singlequestion=require('../routes/singlequestion')

//authentication middleware

router.get("/single-question",authMiddlware,(req,res)=>{
    res.send("single question  ")
}) 
module.exports=router 