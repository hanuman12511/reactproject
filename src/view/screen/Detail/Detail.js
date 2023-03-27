import React, { useState,useEffect } from 'react';
import product1 from '../../image/product1.jpg'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Detail() {
    
    const location = useLocation();
    const[data,setData]=useState(location.state)
    const[user,setUserdata]=useState(localStorage.getItem('user'))
    const[qty,setQty]=useState(parseInt(location.state.product_qty))
    const[id,setId]=useState(parseInt(location.state.product_id))
    const[rate,setRate]=useState(parseInt(location.state.product_rate))
    const[totalpay,setTotalpay]=useState(parseInt(location.state.product_qty)*parseInt(location.state.product_rate))
    
     function addQty(){
        console.log("add");
        if(qty<10)
        setQty(qty+1)
     }
     function subQty(){
        console.log("sub");
        if(qty>1)
        setQty(qty-1)
     }
useEffect(()=>{

    setTotalpay(qty*rate)
},[qty])

const addtocart=async()=>{

    let params={
        "product_id":id ,
        "product_qty": qty,
        "total_pay": totalpay,
        "email":user
    }
    try {
        let res = await axios.post('http://ankursingh.xyz/api/addtocart.php',params)
        console.log(res.data);
        const{success,message}=res.data
        if(success){
            alert(message)

        }
       
        
    } catch (error) {
            console.log(error);
        }
}


        return (<>
            <div style={{width:700,backgroundColor:'red',display:'flex'}}>
                <div style={{width:300,height:200,margin:20}}>
                    <img  src={product1} style={{width:'100%'}}/>
                </div>
                <div style={{flex:1 ,marginLeft:20,marginRight:20}}>
                <h3>product_id: <span style={{color:'white',marginLeft:20}}>{data.product_id}</span></h3>
                <h3>product_name: <span style={{color:'white',marginLeft:20}}>{data.product_name}</span></h3>
                <h3>product_rate:<span style={{color:'white',marginLeft:20}}> {data.product_rate}</span></h3>
                <h3>product_qty:<span style={{color:'white',marginLeft:20}}> {qty}</span></h3>
                <h3>product_color: <span style={{color:'white',marginLeft:20}}>{data.product_color}</span></h3>
                </div>
            </div>
            <div style={{width:700,backgroundColor:'tan',marginTop:10,marginBottom:20,display:'flex'}}>
           <h1 style={{marginLeft:20}}>Total Payment:<span style={{marginLeft:20,color:'white'}}> {totalpay}</span></h1>
           </div>
            <div style={{width:700,backgroundColor:'tan',marginTop:10,marginBottom:20,display:'flex'}}>
                <div style={{width:'50%',display:'flex',alignItems:'center'}}>
                <button type='button' onClick={addQty} style={{border:0,margin:20,width:30,fontSize:30}}>+</button>
                <h3>{qty}</h3>
                <button type='button'  onClick={subQty} style={{border:0,margin:20,width:30,fontSize:30}}>-</button>
                </div>
                <div style={{width:'50%'}}>
                <button type='button' onClick={addtocart} style={{border:0,margin:20,padding:10,width:100}}>Add To Cart</button>
                <button type='button' style={{border:0,margin:20,padding:10,width:100}}>Buy</button>

                </div>
                
                
            </div>
           
            </>
        );
    
}

export default Detail;