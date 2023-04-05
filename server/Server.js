const express =require('express')
const app = express()
app.use(express.json())
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.json({ message: "Hello from server!" });
})

app.post("/insertdata",(req,res)=>{
    let data={"name":req.body}
    res.send({"name":req.body})
})


var PORT = process.env.PORT || 8080;
app.listen (PORT,(error)=>{
    if(!error){
        console.log("sever connect"+PORT);
    }
    else{
        console.log("Server not connect"+PORT);
    }
})
