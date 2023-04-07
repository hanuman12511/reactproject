const express =require('express')
const app = express()
app.use(express.json())
var bodyParser = require("body-parser");
app.use(bodyParser.json());


/* const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://0.0.0.0:27017') */


 const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/db", {useNewUrlParser: true});
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
   });

   const Dog = mongoose.model("Dog", dogSchema);

   /* Dog.find({}).then((user)=>{
    console.log(user);
   })  */

 /* 
   Dog.findOneAndDelete({name: 'hanu'}).then(()=>{console.log("deltee");})
 */

   Dog.findOneAndUpdate({ name: 'Rex' },{ name: 'hanu' }).then((d)=>{console.log("data"+d);})

   Dog.find({}).then((user)=>{
    console.log(user);
   })  


  /*  Dog.findOne({name:'hanu'}).then((user)=>{
    console.log(user);
   }) */



  /*  const dog = new Dog({
    name: "hanu",
    age: 1,
    breed: "Golden Retriever"
   });
   dog.save(); 
   const docs =  Dog.find();
   console.log(docs); */



app.get("/",(req,res)=>{
   
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
