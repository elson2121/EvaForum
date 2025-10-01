const mysql2=require('mysql2') 
const dbconnection = mysql2.createPool({
    user: 'sadam',
    database:'formdb',
    host:'localhost',
    password:'12345678',
    connectionLimit:10 
})
// dbconnection.execute("select 'test' ", (err,results)=>{
// if (err){
// console.log(err.message);
// } else {
// console.log(results)
// }
// })
module.exports=dbconnection.promise()