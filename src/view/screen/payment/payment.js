import React, { useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Payment() {
    const loc = useLocation();
    const nav = useNavigate()
    //const[data,setData]=useState(loc.state.amount)
    const[data,setData]=useState(loc.state)
    const[addres,setAddres]=useState(null)
    const[isForm,setIsForm]=useState(false)
    const[psname,setPSname]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[pin,setPin]=useState("")
    console.log(data);
   function addaddressubmit(){
   
    setAddres(psname+city+state+pin)     
    setIsForm(!isForm)
    }
    function AddAddresform(){
        return<>
        <div className='addresform'>
            <div className='addresforminner'>
                <h1>Addres</h1> 
                <input  value= {psname} onChange={(d)=>setPSname(d.currentTarget.value)} className='input' placeholder='Enter P/S Number'/>
                <input value= {city} onChange={(d)=>setCity(d.currentTarget.value)} className='input' placeholder='Enter City'/>
                <input value= {state} onChange={(d)=>setState(d.currentTarget.value)} className='input' placeholder='Enter State'/>
                <input value= {pin} onChange={(d)=>setPin(d.currentTarget.value)} className='input' placeholder='Enter state Pin'/>
                <button className='input' onClick={addaddressubmit}>Add Addres</button>

            </div>

        </div>
        </>
    }

    function addaddres(){
        setIsForm(!isForm)

    }


    function paymentform(){
            const params={
                add:addres,
                ...data
            }

            console.log(params);
            nav("/order",{state:params})
    }
       return(
        <>
        {
 isForm?AddAddresform():
 
 <div>
            <div className='payaddres'>
                <div className='addrestext'>
                    <p>
                        {addres?addres:"not"}
                    </p>
                </div>
                <div className='addresbtn'>
                    <button onClick={addaddres}>
                            Addres
                    </button>
                </div>
            </div>
            <div>
            <h1>Payment:{data.rate} pay done</h1>
            <button onClick={paymentform}>
               Order Now
            </button>
            </div>
            
        </div>
}
        </>
        )
}
export default Payment;