import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function DetailsScreen(){
    const loc = useLocation()
    const[product,setProduct] = useState(loc.state)
const [qty,setQty] = useState(1) 
    console.log(product);

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

    function addtocart(){
        alert("add to cart")
    }
    return(
        <>
       <div className="cartdiv">
            <div className="cartimage">
                <div className="cartimagemain">
                <img src={product.image} className="cartimageshow"/>
                </div>
                <div className="cartimagemore">
                    <div className="cartimagemore1">
                        <img src={product.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={product.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={product.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={product.image} className="cartimageshow"/>
                    </div>
                    <div className="cartimagemore1">
                        <img src={product.image} className="cartimageshow"/>
                    </div>

                </div>
            </div>
            <div className="carttext">
                <div className="carttext1">
                <div className="carttextinfo">
                    <div className="productqty">
                        <p><b>Product Name :</b>  {product.product_name}</p>
                        <p><b>Product Rate :</b>  Rs.{product.product_rate}/-</p>
                    </div>
                    <div className="addqty">
                        <img onClick={subqty} src={require('../image/sub.png')} style={{width:50,height:50}}/>
                        <p className="textqty">{qty}</p>
                        <img onClick={addqty} src={require('../image/add.png')} style={{width:50,height:50}}/>
                    </div>
                    <div className="productqty">
                        <p><b>Product Name :</b>  {product.product_name}</p>
                        <p><b>Product Rate :</b>  Rs.{product.product_rate}/-</p>
                    </div>
                </div>
                <div className="cartinfo">
                    <p><b>Total Pay :</b>  {product.product_rate*qty}</p>
                    <button onClick={addtocart}>Add To Cart</button>
                </div>
                </div>
            </div>

       </div>
       
       </>
    )
}