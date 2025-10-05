require("dotenv").config()
const mysql2=require('mysql2') 
const dbconnection = mysql2.createPool({
    user:process.env.userN,
    database:process.env.databaseDB,
    host:process.env.hostslocal,
    password:process.env.passwordDB,
    connectionLimit:process.env.connectionLLimit
})
console.log(process.env.JWT_SECRET);
// dbconnection.execute("select 'test' ", (err,results)=>{
// if (err){
// console.log(err.message);
// } else {
// console.log(results)
// }
// })
module.exports=dbconnection.promise()