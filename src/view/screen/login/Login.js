import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            pass:'',
            user:  localStorage.getItem("user")
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
            localStorage.setItem("user",email)
           window.location='/HomeScreen'

        }
        else{
           /*  alert(message) */
        <Alert>
           This is a  alert—check it out!
         </Alert>
        }

    }
    render() {
        const{email,pass,user}=this.state
        console.log("user:",user);
        return (
            <>

<div style={{width:400}} className="m-auto mt-2 mb-3 ">

<Form className='bg-primary p-3 rounded-4'>
<Form.Group className="mb-3 bg-primary" >

<Form.Label className='text-light'>Email address</Form.Label>
<Form.Control type="email" value={email} placeholder="enter email"  onChange={(d)=>this.setState({email:d.target.value})} />

</Form.Group>
<Form.Group className=" mb-3 bg-primary" >

<Form.Label className='text-light'>Enter Password</Form.Label>
<Form.Control type="password" value={pass} placeholder="enter pass"  onChange={(d)=>this.setState({pass:d.target.value})} />

</Form.Group>
<Button variant="success" type="button" style={{width:'100%'}} onClick={this.Login}>
        Login
      </Button>
</Form>
<Form className='bg-primary p-3 rounded-4 mt-4'>
<Button variant="success" type="submit" style={{width:'100%'}}>
<Link to='/Register' style={{textDecoration:'none',color:'white'}} >
                        Register
                            </Link>
      </Button>
</Form>

</div>


            {user === null?
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
           : window.location='HomeScreen'  }
            </>
        );
    }
}

export default Login;