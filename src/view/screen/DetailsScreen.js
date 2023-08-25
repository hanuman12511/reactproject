import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {AuthContext} from './AuthContext'
export default function DetailsScreen(){
const addcart = useContext(AuthContext)

    const loc = useLocation()
    const nav  = useNavigate()
    const[product,setProduct] = useState(loc.state)
const [qty,setQty] = useState(1) 
   
    const{data} = product
    function addqty(){
      
        var q =qty
        if(q<9){
            setQty(++q)
        }
    }

    function subqty(){

var q =qty
        if(q>1){
            setQty(--q)
        }
    }

    function addToCart(product1){
        alert("add to cart")
           console.log(product1);
           const params={
            ...product1,
            "qty":qty
           }
           addcart.push(params);


        
        nav("/addtocart",{state:addcart})

    }
    return(
        <>
       <div className="cartdiv">
            <div className="cartimage">
                <div className="cartimagemain">
                <img src={data.image} className="cartimageshow"/>
                </div>
                <div className="cartimagemore">
                    <div className="cartimagemore1">
                        <img src={data.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={data.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={data.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={data.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={data.image} className="cartimageshow"/>
                    </div>

                </div>
            </div>
            <div className="carttext">
                <div className="carttext1">
                <div className="carttextinfo">
                    <div className="productqty">
                        <p><b>Product Name :</b>  {data.product_name}</p>
                        <p><b>Product Rate :</b>  Rs.{data.product_rate}/-</p>
                    </div>
                    <div className="addqty">
                        <img onClick={subqty} src={require('../image/sub.png')} style={{width:50,height:50}}/>
                        <p className="textqty">{qty}</p>
                        <img onClick={addqty} src={require('../image/add.png')} style={{width:50,height:50}}/>
                    </div>
                    <div className="productqty">
                        <p><b>Product Name :</b>  {data.product_name}</p>
                        <p><b>Product Rate :</b>  Rs.{data.product_rate}/-</p>
                    </div>
                </div>
                <div className="cartinfo">
                    <p><b>Total Pay :</b>  {data.product_rate*qty}</p>
                    <button onClick={()=>addToCart(data)}>Add To Cart</button>
                </div>
                </div>
            </div>

       </div>
       
       </>
    )
}