const express =require('express')
const app = express()
app.use(express.json())
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.get("/",(req,res)=>{
    res.json({ message: "data" });
})
app.post("/createDb",(req,res)=>{
    let data={"name":req.body}
    
      res.send(data)
    
})
app.post("/insertData",(req,res)=>{
    let data={"name":req.body}
    
      res.send(data)
    
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
