import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Addtocart(){
    const nav=useNavigate()
    const loc =useLocation()
    const[cart,setCart] = useState(loc.state)
    const[rate,setRate] = useState(0)
    console.log(cart); 
    var rate1=0
    useEffect(()=>{
       
            function show(){
                    cart.map(d=>{
                        rate1 +=d.product_rate*d.qty
                    })
            }
            setRate(rate1)
            console.log(cart);
            console.log(rate1);
            show()
    },[])

    function productOrder(){

        alert("payment")
        const params = {
            cart:cart,
            rate:rate
        }
        console.log(params);
        nav('/payment',{state:params})

    }
    return(
        <>
    <div className="add_container">
    <div className="add_container_left">
    {
    cart.map(d=>(
    <div className="cart_product">
    <div className="cart_product_image">
        <img src={d.image} style={{width:"100%",height:"100%"}}/>
    </div>
    
    <div className="cart_product_text">
            <p> Product Name :{d.product_name}</p>
            <p>Product Rate :{d.product_rate}</p>
            <p>product Qty : {d.qty}</p>

    </div>
    </div>
            ))
        }
    </div>
    
    <div className="add_container_right">
        <p>Total Rate : {rate}</p>
        <button onClick={productOrder}>Order Place</button>
    </div>
    </div>
        </>

    )
}