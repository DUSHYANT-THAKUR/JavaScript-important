const express =require("express");
const app = express()
const port = 8080;

app.listen(port,()=>{
    console.log('server is runninng on the port',port)
})