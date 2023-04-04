import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {makeRequest} from '../../api/makeapi'
import  product from '../../image/product1.jpg'
class Home extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            isVisible:false,
            product_name:'',
            product_color:'',
            product_qty:'',
            product_rate:'',
            imagefile:'',
            showimage:'',
            selectedFile:''
        }
        this.addproduct=this.addproduct.bind(this);
        this.handleInputChange =this.handleInputChange.bind(this);
    }
componentDidMount= async()=>{
    console.log("***************");
    try {
    let res = await makeRequest('productshow.php')
    console.log(res.data.body);
    this.setState({data:res.data.body})
} catch (error) {
        console.log(error);
    }
}

handleInputChange(event) {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
        this.setState({
            selectedFile: e.target.result,
          })
    }

}
addproduct=async()=>{
    const{product_color,product_name,product_qty,product_rate,imagefile} =this.state
  console.log(imagefile);
    let params={
        product_color:product_color,
        product_name:product_name,
        product_qty:product_qty,
        product_rate:product_rate,
        image: this.state.selectedFile 
    }
    console.log(params); 
    let res = await makeRequest('productinsert.php',params)
        console.log(res.data);
      const{success,message}=res.data
        if(success){
            this.componentDidMount()   
      } 
       
  

    this.setState({isVisible:!this.state.isVisible})



}
    render(){
        const{data}=this.state
        console.log("*********************************");
        console.log(data);
        return(
<div>
{
    this.state.isVisible &&
<div style={{flex:1,height:'100%',backgroundColor:'white',position:'absolute',left:0,top:0,bottom:0,right:0,}}>

<div style={{width:'40%',height:400,backgroundColor:'green',position:'relative',left:'30%',top:10}}>

    <input style={{width:'100%',padding:10,marginTop:10}} placeholder="Enter Product Name" type="text" value ={this.state.product_name} onChange={d=>this.setState({product_name:d.target.value})}/>
    <input style={{width:'100%',padding:10,marginTop:10}} placeholder="Enter Product color" type="text" value ={this.state.product_color} onChange={d=>this.setState({product_color:d.target.value})}/>
    <input style={{width:'100%',padding:10,marginTop:10}} placeholder="Enter Product qty" type="text" value ={this.state.product_qty} onChange={d=>this.setState({product_qty:d.target.value})}/>
    <input style={{width:'100%',padding:10,marginTop:10}} placeholder="Enter Product rate" type="text" value ={this.state.product_rate} onChange={d=>this.setState({product_rate:d.target.value})}/>
    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
   <button onClick={this.addproduct}>Add Product</button>
   </div>


</div>
    }
<div style={{width:'100%',height:70,backgroundColor:'red'}}>
    <button onClick={()=>this.setState({isVisible:!this.state.isVisible})}>Add Product</button>
   {this.state.showimage!==''? <img src={this.state.showimage}  style={{width:100,height:100}}/>:null}
    
</div>
    <table border={1} style={{width:600,backgroundColor:'yellow'}}>
<tr>
        <td>product_id</td>
        <td>product_name</td>
        <td>product_rate</td>
        <td>product_qty</td>
        <td>product_color</td>
        </tr>
   {
    data!==''?data.map(d=>(
        <tr>
            <td>{d.product_id}</td>
        <td>{d.product_name}</td>
        <td>{d.product_rate}</td>
        <td>{d.product_qty}</td>
        <td>{d.product_color}</td>
        <td><img  src={`http://ankursingh.xyz/api/${d.image}`} style={{width:20,height:20}}/></td>
       
                <td><Link to='http://localhost:3000/HomeScreen/Detail'
                    state= {{
                        product_id:d.product_id,
                        product_name:d.product_name,
                        product_rate:d.product_rate,
                        product_qty:d.product_qty,
                        product_color:d.product_color

                        }} >
                            Ok
                            </Link></td>
        </tr>
    )):null
   }
   </table>
</div>
        )
    }
}

export default Home;