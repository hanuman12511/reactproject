import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
function Payment() {
    const location = useLocation();
    const[data,setData]=useState(location.state.amount)
       return(
        <div>
            <h1>Payment:{data} pay done</h1>
            
        </div>
        )
}
export default Payment;