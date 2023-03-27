import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Addtocart extends Component {
    constructor(){
        super()
        this.state={
            cartdata:'',
            payamount:'',
            itemcount:0,
            user : localStorage.getItem('user')
        }
        this.payment=this.payment.bind(this);
    }
componentDidMount= async()=>{
    const{user} = this.state
    let params={
        "email":user
    }
   
    try {
      
    let res = await axios.post('http://ankursingh.xyz/api/showProductaddtocart.php',params)
       console.log("datashowaddtocart",res.data);
const{itemcount} =res.data
let amount=0
if(itemcount){
   let data1 =res.data.body
    
    if(data1!==''){
        data1.map(d=>{
        amount+=parseInt(d.totalpay)
   })
}

    this.setState({cartdata:res.data.body,payamount:amount,itemcount:itemcount})

}
else{
    this.setState({cartdata:res.data.body,payamount:amount,itemcount:itemcount})
}
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
        const{cartdata,payamount,itemcount}=this.state
        console.log("**********************");
       console.log(cartdata);
       console.log("**********************");
      
        return(
<div>
{itemcount!==0?
<>
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
</>
    :<h1>No item</h1>}
</div>
        )
    }
}

export default Addtocart;