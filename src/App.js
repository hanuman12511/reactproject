import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react'
import './view/style/style.css'
import Login from './view/screen/login'
import Home from './view/screen/home'
import {data} from './view/data/data.js'
import Detail from './view/screen/Detail/Detail'
import Addtocart from './view/screen/addtocart/addtocart'
import Payment from './view/screen/payment/payment'
class App extends React.Component {

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

  render(){
    const{id} =this.state
  return (
  <>
  <BrowserRouter>
 
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
         <Route path='/Login' element={<Login />}/>
         <Route path='/Home' element={<Home />}/>
         <Route path='/Detail' element={<Detail />}/>
         <Route path='/addtocart' element={<Addtocart />}/>
         <Route path='/payment' element={<Payment />}/>
         </Routes>
      </div>
    </div>
   
    </BrowserRouter>
  </>
    
      );
  }
}

export default App;
