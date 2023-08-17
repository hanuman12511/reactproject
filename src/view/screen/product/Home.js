import axios from "axios"
import { useEffect, useState } from "react"
import {data,addcart} from '../../data/data'
import { useNavigate } from "react-router-dom"
import ProductTile from "../../Component/ProductTile"

export default function Home(){

const nav = useNavigate()
    const[product,setProduct] =useState('')
const [cart,setCart] = useState([])

    useEffect(()=>{
 function showProduct(){
             
    setProduct(data)
        }
        showProduct()
    },[])

   /*  useEffect(()=>{

        async function showProduct(){
                const res=await axios.get("http://ankursingh.xyz/api/productshow.php")
             
                setProduct(res.data.body)
        }
        showProduct()
    },[]) */

console.log(product);

function productdetails(d){

    console.log(addcart);
    const data={
        ...d,
       
        
    }
    nav("/details",{state:{data}})

}
return(<>
<div style={{padding:50,display:"inline-flex"}}>
    {
        product&&product.map(d=>(

            <>

            <ProductTile data={d} addtocart={()=>productdetails(d)}/>
           {/*  */}
            </>
        ))
    }
</div>
</>)

}


