const express =require("express");
const cors = require("cors")
const app = express()
const port = 8080;

app.use(cors());
app.listen(port,()=>{
    console.log('server is runninng on the port',port)
})
