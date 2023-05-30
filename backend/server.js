const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")
 
// env file path added
dotenv.config({path:"backend/config/config.env"})

// uncaughtException error
process.on("uncaughtException",(err)=>{
  console.log(`Error:${err.message}`);
  console.log("shuting down the sever due to uncaughtException");
    process.exit(1)
})


// database connection
  connectDatabase();


  
const server=app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT} `)
})


// unhandle promise rejection

process.on("unhandledRejection",(err)=>{
  console.log(`Error:${err.message}`);
  console.log("shuting down the sever due to unhandled promise rejection");
  server.close(()=>{
    process.exit(1)
  })
})