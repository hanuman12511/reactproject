import { useReducer, useState } from "react"
import  {reducers, initial } from "./Reducers"

export default function Login(){
const [username1,setUsername] =useState('')
    const[state,dispatch] =useReducer(reducers,initial)
    const{ username,status,isLoading,isLoggedIn} = state
    function loginfun(){
        dispatch({type:'login'})
        setTimeout(()=>{
                if(username1=="admin"){
                    dispatch({type:'success',name:"admin"})

                }
        },3000)
    }
    function logoutfun(){
dispatch({type:'login'})
            setTimeout(() => {
                
                dispatch({type:"logout"})
            }, 3000);
    }
    return(
        <>
        <h1>{`Login user ${username}`}</h1>
      {  isLoggedIn?<>
        <button onClick={logoutfun}>{isLoading?"logout...":"Logout"}</button>
        </>
        :
        <>
        <input value={username1} onChange={d=>setUsername(d.currentTarget.value)}/><br/>
        <button onClick={loginfun} style={{width:100,height:50,backgroundColor:'#fff'}}> {isLoading?<img src={require('../image/loading.gif')} style={{width:50,height:30}}/>:"Login"}</button>
        </>
}
       </>

    )
}