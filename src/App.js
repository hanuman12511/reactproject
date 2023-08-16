import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
 import React, { useState } from 'react'
import './view/style/style.css'
import Register from './view/screen/Register'
import HomeScreen from './view/screen/home'
import Addtocart1 from './view/screen/addtocart/Addtocart1'
import {data} from './view/data/data.js'
import Login from './view/Reduss/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './view/screen/RegisterForm.js'
import LoginForm from './view/screen/LoginForm'
import Home from './view/screen/product/Home'
import DetailsScreen from './view/screen/DetailsScreen'
import Reducerss from './view/screen/Reducers'
/*class App extends React.Component {
  constructor(){
    super()
    this.state={
      btnactive:false,
      id:''
    }
    console.log(data);
    this.Activebtn = this.Activebtn.bind(this);
  }
Activebtn(e){
 //e.preventDefault() ;
 console.log(e.id);
  console.log("btn");
  this.setState({btnactive:!this.state.btnactive,id:e.id})
}

logout1(){
  console.log("logout");
}

  render(){
    const{id} =this.state
  return (
  <>
  <BrowserRouter>
  <div>
    <Link to="/"  className='link'>Home</Link>
    <Link to="/register1" className='link'>Register</Link>
    <Link to="/login" className='link' >Login</Link>
    <Link to="/profile" className='link' >Profile</Link>
    <button onClick={()=>{alert("logout")}}>logout</button>
  </div>
  <Routes>
        <Route path='/register1' element={<RegisterForm />}/> 
        <Route path='/login' element={<LoginForm />}/> 
        <Route path='/Register' element={<Register />}/>
        <Route path='/HomeScreen/*' element={<HomeScreen />}/>
        
        <Route path='/' element={<Home />}/>
  </Routes>
 */
 /*{
    <div className='main-div'>
      <div className='left-div'>
        {data!==null?data.map(d=>(
          <div style={{height:30,margin:20}}>
       <Link to ={d.name} style={{ width:300,backgroundColor:(id===d.id) ? 'white':'tan',color:'white',padding:10}} onClick ={()=>this.Activebtn(d)}>
        <li style={{width:100,backgroundColor:'tan'}}>{d.name}</li>
        </Link><br/>
       </div>
          
        )):null}
       </div>
      <div className='right-div'>
      <Routes>
         <Route path='/Register' element={<Register />}/>
         <Route path='/Home' element={<Home />}/>
         <Route path='/Detail' element={<Detail />}/>
         <Route path='/addtocart' element={<Addtocart />}/>
         <Route path='/payment' element={<Payment />}/>
         <Route path='/firebase1' element={<Firebase1 />}/>
         </Routes>
      </div>
    </div>
    }*/
    /* </BrowserRouter>
  </>
    
      );
  }
}

export default App;
 */



  export default function App(){
    const[user,setUser] = useState(localStorage.getItem('email'))


    console.log(user);
function logout(){
  localStorage.clear()
  window.location.reload()
}


    return(
      <>
      <BrowserRouter>
      <div>
    <Link to="/"  className='link'>Home</Link>
   
  { user?
  <> 
  <Link to="/profile" className='link' >Profile</Link>
  <button onClick={logout}>logout</button>
  </>
:<>
    <Link to="/register1" className='link'>Register</Link>
    <Link to="/login" className='link' >Login</Link>
    </>
 }
  
  </div>
  <Routes>
        <Route path='/register1' element={<RegisterForm />}/> 
        <Route path='/login' element={<LoginForm />}/> 
        <Route path='/Register' element={<Register />}/>
        <Route path='/details' element={<DetailsScreen />}/>
        <Route path='/HomeScreen/*' element={<HomeScreen />}/>
        
        <Route path='/' element={<Home />}/>
        <Route path='/reducers' element={<Reducerss />}/>
        <Route path='/loginr' element={<Login />}/>
  </Routes>
      
      </BrowserRouter>
      </>
    )
  }