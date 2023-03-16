import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    constructor(){
        super()
        this.state={
            fname:'',
            lname:'',
            email:'',
            pass:'',
            cpass:''
        }
        this.registerdata = this.registerdata.bind(this);
    }
    registerdata=async()=>{
        const{lname,fname,email,pass,cpass}=this.state
      /*   console.log(lname);
        console.log(fname);
        console.log(email);
        console.log(pass);
        console.log(cpass); */

        let params={
            "fname":fname,
            "lname":lname,
            "email":email,
            "pass":pass,
            "cpass":cpass
        }

        let res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
        console.log(res.data);
        const {success,message}=res.data
        if(success){
            alert(message)
            window.location='/home'

        }
        else{
            alert(message)

        }

    }
    render() {
        const{lname,fname,email,pass,cpass}=this.state
        return (
            <div style={{flex:1,backgroundColor:'red'}}>
                <h1>Login</h1>
                <input type="text" value={fname} placeholder="enter fname"  onChange={(d)=>this.setState({fname:d.target.value})}/><br/>
                <input type="text" value={lname} placeholder="enter lname"  onChange={(d)=>this.setState({lname:d.target.value})}/><br/>
                <input type="email" value={email} placeholder="enter email"  onChange={(d)=>this.setState({email:d.target.value})}/><br/>
                <input type="password" value={pass} placeholder="enter pass"  onChange={(d)=>this.setState({pass:d.target.value})}/><br/>
                <input type="password" value={cpass} placeholder="enter cpass"  onChange={(d)=>this.setState({cpass:d.target.value})}/><br/>
                <input type="button"  value="Register" onClick={this.registerdata}/><br/>
            </div>
        );
    }
}

export default Login;