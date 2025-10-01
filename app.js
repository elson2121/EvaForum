const express=require('express')
const app=express();
const port =3000

//db connection 
const dbconnection=require('./db/dbcofig')
//json middlware to extract the data 
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("welcome")
});

//routes middlware file 
const userRoutes = require('./routes//userRoutes')

//user routes middlware file
const questionRoutes = require('./routes/questionRoutes')

app.use("/api/users",userRoutes)

// question routes middlware 
app.use("/api/questions",questionRoutes)


async function start() {
    try {
        // Test database connection before starting the server
        const result = await dbconnection.execute("SELECT 'test'");

        // Start listening on the specified port
        // NOTE: The server listen callback is important here to ensure the message is logged.
        app.listen(port, () => {
            console.log(`Server listening on the port http://localhost:${port}`);
        });

    } catch (error) {
        // Correct error handling (using the 'error' variable)
        console.error("Failed to start server or connect to database:");
        console.error(error.message);
        // Exit the process since the database connection is critical
        
    }
}

start();






    
//     (err)=>{
//     if(err){
//         console.log(err.message)
//     } else{


    //         // console.log(`listening on the port https://localhost:${port}`);
// console.log(`Server listening on the port http://localhost:${port}`);
//     }
// }) 