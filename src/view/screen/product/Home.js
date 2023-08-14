import axios from "axios"
import { useEffect, useState } from "react"
import {data} from '../../data/data'
import { useNavigate } from "react-router-dom"
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
    const data={
        ...d,
        cart
    }
    nav("/details",{state:data})

}
return(<>
<div style={{padding:50,display:"inline-flex"}}>
    {
        product&&product.map(d=>(

            <>
            <div onClick={()=>productdetails(d)} style={{padding:20,width:200,height:200,backgroundColor:'gray',margin:20}}>
                <p>{d.product_name}</p>
                <img src={ d.image} style={{width:100}}/>
            </div>
            </>
        ))
    }
</div>
</>)

}


