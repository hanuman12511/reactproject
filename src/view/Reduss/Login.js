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
                    dispatch({type:'success'})

                }
        },1000)
    }
    function logoutfun(){
dispatch({type:'login'})
            setTimeout(() => {
                
                dispatch({type:"logout"})
            }, 1000);
    }
    return(
        <>
        <h1>Login user</h1>
      {  isLoggedIn?<>
        <button onClick={logoutfun}>{isLoading?"logout...":"Logout"}</button>
        </>
        :
        <>
        <input value={username1} onChange={d=>setUsername(d.currentTarget.value)}/><br/>
        <button onClick={loginfun}> {isLoading?"login...":"Login"}</button>
        </>
}
       </>

    )
}