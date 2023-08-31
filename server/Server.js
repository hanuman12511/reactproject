const express =require('express')
const app = express()
app.use(express.json())
var bodyParser = require("body-parser");
app.use(bodyParser.json());


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
 database: "db" 
});
let data=''
con.connect(function(err) {
  if(err){
    console.log(err);
  }
  data="Connected!"
});

app.get("/",(req,res)=>{
    res.json({ message: data });
})

app.post("/createDb",(req,res)=>{
    let data={"name":req.body}
    console.log(req.body.db);
    sql ="CREATE DATABASE "+req.body.db;
    console.log(sql);
    con.query("CREATE DATABASE "+req.body.db, function (err, result) {
        if (err) 
        console.log(err);
        console.log("Database created");

        data['connect']="Database created"
      });
      console.log(result);
      res.send(data)
    
})
app.post("/createTable",(req,res)=>{
    let data={"name":req.body}
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");

        data['connect']="Database created"
      });
      res.send(data)
    
})
app.post("/insertData",(req,res)=>{
    let data={"name":req.body}
var sql = "INSERT INTO customers (name, address) VALUES ('"+req.body.name+"','"+req.body.address+"' )";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");

        data['connect']="Database created"
      });
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
