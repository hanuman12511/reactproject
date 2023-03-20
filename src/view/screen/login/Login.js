import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            pass:''
        }
        this.Login = this.Login.bind(this);
    }
    Login=async()=>{
        const{email,pass}=this.state
        let params={
            "email":email,
            "pass":pass,
        }

        let res = await axios.post("http://ankursingh.xyz/api/Employeelogin.php",params)
        console.log(res.data);
        const {success,message}=res.data
       
        if(success){
            alert(message)
           window.location='/HomeScreen'

        }
        else{
            alert(message)

        }

    }
    render() {
        const{email,pass}=this.state
        return (
            <div style={{flex:1,backgroundColor:'yellow'}}>
            <div style={{padding:20,borderRadius:30,width :400,backgroundColor:'red',textAlign:'center',marginLeft:'auto',marginRight:'auto'}}>
                <h1>Login User</h1>
                <input type="email" value={email} placeholder="enter email"  onChange={(d)=>this.setState({email:d.target.value})}/><br/>
                <input type="password" value={pass} placeholder="enter pass"  onChange={(d)=>this.setState({pass:d.target.value})}/><br/>
                <input type="button"  value="Login" onClick={this.Login}/><br/>
            </div>
            <div style={{marginTop:20,marginBottom:20,padding:20,borderRadius:30,width :400,backgroundColor:'red',textAlign:'center',marginLeft:'auto',marginRight:'auto'}}>
            <Link to='/Register' style={{textDecoration:'none',color:'white'}} >
                        Register
                            </Link>
            </div>
            </div>
        );
    }
}

export default Login;