import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
    }
componentDidMount= async()=>{
    try {
    let res = await axios.get('http://ankursingh.xyz/api/productshow.php')
    console.log(res.data.body);
    this.setState({data:res.data.body})
} catch (error) {
        console.log(error);
    }
}
    render(){
        const{data}=this.state
        console.log("*********************************");
        console.log(data);
        return(
<div>

    <table border={1} style={{width:600,backgroundColor:'red'}}>
<tr>
        <td>product_id</td>
        <td>product_name</td>
        <td>product_rate</td>
        <td>product_qty</td>
        <td>product_color</td>
        </tr>
   {
    data!==''?data.map(d=>(
        <tr>
            <td>{d.product_id}</td>
        <td>{d.product_name}</td>
        <td>{d.product_rate}</td>
        <td>{d.product_qty}</td>
        <td>{d.product_color}</td>
       
                <td><Link to='/Detail'
                    state= {{
                        product_id:d.product_id,
                        product_name:d.product_name,
                        product_rate:d.product_rate,
                        product_qty:d.product_qty,
                        product_color:d.product_color

                        }} >
                            Ok
                            </Link></td>
        </tr>
    )):null
   }
   </table>
</div>
        )
    }
}

export default Home;