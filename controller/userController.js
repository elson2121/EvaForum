
const dbconnection=require('../db/dbcofig')
const bcrypt= require('bcrypt')
const { StatusCodes} = require('http-status-codes')
const jsw =require('jsonwebtoken')


async function register(req,res){
    const {username, firstname, lastname,email,password}=req.body;
    // res.send('the register')
    if(!email||!username||!firstname ||!password||!lastname){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all the requiredinformation "} )
    }
// if the message is work 
try {
    //to make sure that limit the user with one user only 
    const [user]= await dbconnection.query("Select username,userid from users where username =? or email =? ", [username,email])
if (user.length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Username or email already exists" });
}
if (password.length <=8) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password must at least more than 8 character" });
}
//encrypt the password
const salt =await bcrypt.genSalt(10)
const hashedpassword= await bcrypt.hash(password,salt)
    await dbconnection.query("INSERT INTO  users (username, firstname, lastname,email,password) VALUES (?,?,?,?,?)",[ username, firstname, lastname,email,hashedpassword])
    return res.status(StatusCodes.CREATED).json({msg:"user created"})
    
} catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong, try again later!"})
}



}
//for log in 
 async function login(req,res){
    const {email,password}=req.body;
    if (!email||!password){
        return res.status(StatusCodes.BAD_REQUEST).json({error:"please enter the required fields."})
    }
try {
     const [user]= await dbconnection.query("Select username,userid,password from users where  email = ? ", [email])
    if (user.length===0){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Invalid Credential"});
    }  
    // compare the password 
const isMatch=await bcrypt.compare(password,user[0].password);
if(!isMatch){
     return res.status(StatusCodes.BAD_REQUEST).json({msg:"Invalid Credential"});
} 
const username=user[0].username;
const userid =user[0].userid;
//payluod
const token=jsw.sign({username,userid},process.env.JWT_SECRET,{expiresIn:"1day"})
return res.status(StatusCodes.OK).json({msg:"user login suceccessfuly", token,username});
 
    
} catch (error) {
     console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong, try again later!"})

}

}


async function checkuser(req,res){
    const username=req.user.username
    const userid=req.user.userid
    res.status(StatusCodes.OK).json({msg:"valid user",username,userid})
    // res.send('checkuser page')
}
// // Placeholder functions for all-question and single-question (to be implemented)
// async function getAllQuestions(req, res) {
//     try {
//         res.send("all question");
//     } catch (error) {
//         console.error("Error in all-question:", error.message);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong, try again later!" });
//     }
// }

// async function getSingleQuestion(req, res) {
//     try {
//         res.send("single question");
//     } catch (error) {
//         console.error("Error in single-question:", error.message);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong, try again later!" });
//     }
// }




module.exports={register,login,checkuser}