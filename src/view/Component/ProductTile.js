export default function ProductTile({data,addtocart}){

    console.log(data);
    return(
        <>
        
            
                <>
                <div onClick={()=>addtocart(data)} style={{padding:20,width:200,height:200,backgroundColor:'gray',margin:20}}>
                <p>{data.product_name}</p>
                <img src={ data.image} style={{width:100}}/>
            </div> 
                </>
        
    
        </>

    )
}