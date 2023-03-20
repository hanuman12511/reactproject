import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Addtocart extends Component {
    constructor(){
        super()
        this.state={
            cartdata:'',
            payamount:''
        }
        this.payment=this.payment.bind(this);
    }
componentDidMount= async()=>{
    
    try {
    let res = await axios.get('http://ankursingh.xyz/api/showProductaddtocart.php')
   
   let data1 =res.data.body
let amount=0
   data1.map(d=>{
   
    amount+=parseInt(d.totalpay)
   })

   console.log(amount);
    this.setState({cartdata:res.data.body,payamount:amount})


  /*  let res1 = await axios.get('http://ankursingh.xyz/api/productshow.php')
    console.log(res1.data); */
} catch (error) {
        console.log(error);
    }
}

 payment=()=>{
    const{payamount}=this.state
    console.log("Amount Done=(",payamount,")");
    <Link to='/payment'
    state= {{
        amount:payamount
        }} >
            Ok
            </Link>
} 

    render(){
        const{cartdata,payamount}=this.state
        console.log("**********************");
       console.log(cartdata);
      
        return(
<div>
<h1>Add to cart</h1>
<table style={{width:400}} border='1'> 
{cartdata!==''?cartdata.map(d=>(
    <tr ><td>{d.product_qty}</td><td>{d.totalpay}</td></tr>
)):null}
</table>
<div style={{display:'flex',alignItems:'center'}}>
<div style={{width:250,padding:10,marginTop:20}}>
    <h3>Total Amount : <span style={{color:'red'}}>{payamount}/-Rs</span></h3>
</div>
<div style={{width:200,padding:10,marginTop:20}}>
<Link to='/payment'
    state= {{
        amount:payamount
        }} >
        Payment
            </Link>
</div>
</div>
</div>
        )
    }
}

export default Addtocart;