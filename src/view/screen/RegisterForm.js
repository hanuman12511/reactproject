import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
       const RegisterForm=()=>{

        const nav = useNavigate()


const [fname,setFName]=useState("")
const [lname,setLName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [cpassword,setCPassword]=useState("")

async function  register(){
    
    const params = {
        "fname":fname,
        "lname":lname,
        "email":email,
        "pass":password,
        "cpass":cpassword
    }

    const res = await axios("http://ankursingh.xyz/api/registerUser.php",params)
    console.log(res.data);
    const {message,success} = res.data

if(success){
    alert(message)
    nav("/login")
}
else{
    alert(message)
}

}   



return(
        <>       
        <div style={{backgroundColor:'red',width:'100%',height:400}}>
            <div style={{backgroundColor:'white',width:300,margin:'Auto'}}>
                <h1>Register</h1>
                <input  value={fname} onChange={(d=>setFName(d.target.value))} placeholder='enter fname'/><br/>
                <input  value={lname} onChange={(d=>setLName(d.target.value))} placeholder='enter lname'/><br/>
                <input  value={email} onChange={(d=>setEmail(d.target.value))} placeholder='enter email'/><br/>
                <input  value={password} onChange={(d=>setPassword(d.target.value))} placeholder='enter password'/><br/>
                <input  value={cpassword} onChange={(d=>setCPassword(d.target.value))} placeholder='enter cpassword'/><br/>
                <button onClick={register}>Submit</button>
            </div>
        </div>
        </>

    )
}
export default RegisterForm;