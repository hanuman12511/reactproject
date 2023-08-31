import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){
    const nav = useNavigate()
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    async function loginuser(){
      
            const params={
                    "email":email,
                    "pass":pass
                }
                console.log(params);
                const res = await axios('http://ankursingh.xyz/api/Employeelogin.php',params)

                console.log(res.data);
                const {message,success} = res.data

                if(success){
                    alert(message)
                    localStorage.setItem("email",email)
                    nav('/')
                    window.location.reload()
                   }
                else{
                    alert(message)
                }
                

    }
    return(
       <>
       <input value={email} onChange={d=>setEmail(d.target.value)} placeholder='enter email'/>
       <input value={pass} onChange={d=>setPass(d.target.value)} placeholder='******'/>
       <button onClick={loginuser}>Login</button>
       </>
    )
}