import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react'
import '../../style/style.css'
import Home from './Home'
import {data} from '../../data/data'
import Detail from '../Detail/Detail'
import Addtocart from '../addtocart/addtocart'
import Payment from '../payment/payment'
import Firebase1 from '../Firebase1/Firebase1'
class HomeScreen extends React.Component {
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
         <Route path='Home' element={<Home />}/>
         <Route path='Detail' element={<Detail />}/>
         <Route path='addtocart' element={<Addtocart />}/>
         <Route path='payment' element={<Payment />}/>
         <Route path='firebase1' element={<Firebase1 />}/>
         </Routes>
      </div>
    </div>
  </>
    
      );
  }
}

export default HomeScreen;
