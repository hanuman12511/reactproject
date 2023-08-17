import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Addtocart(){

    const loc =useLocation()
    const[cart,setCart] = useState(loc.state)
    console.log(cart); 
    return(
        <>
        <h1>Add to cart</h1>
        </>

    )
}