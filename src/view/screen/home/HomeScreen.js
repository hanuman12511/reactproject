import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react'
import '../../style/style.css'
import Home from './Home'
import {data} from '../../data/data'
import Detail from '../Detail/Detail'
import Addtocart from '../addtocart/addtocart'
import Payment from '../payment/payment'
import Firebase1 from '../Firebase1/Firebase1'
import ClassExp from '../ClassExp/ClassExp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    console.log("props");
    console.log(props);
    this.state={
      btnactive:false,
      id:'',
    user:  localStorage.getItem("user")
    }
    console.log(data);
    this.Activebtn = this.Activebtn.bind(this);
    this.logout=this.logout.bind(this)
  }
  logout=()=>{
    console.log("logout");
    localStorage.clear()
    window.location='/'
  }
Activebtn(e){
 //e.preventDefault() ;
 console.log(e.id);
  console.log("btn");
  this.setState({btnactive:!this.state.btnactive,id:e.id})
}

  render(){
    const{id,user} =this.state
  return (
  <>
 <div style={{flex:1,backgroundColor:'tan',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <p style={{marginRight:30,marginLeft:30,}}>{user}</p>
        <Button onClick={this.logout}variant="success">Logout</Button>
      </div>
    <div className='main-div'>
      
      <div className='left-div'>
      <Link to ="/HomeScreen" style={{ width:300,color:'white',padding:10}} >
        <li style={{width:100,backgroundColor:'tan'}}>Home</li>
        </Link><br/>
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
         <Route path='/' element={<Home />} />
         <Route path='/detail' element={<Detail />}/>
         <Route path='/addtocart' element={<Addtocart />}/>
         <Route path='/payment' element={<Payment />}/>
         <Route path='/firebase1' element={<Firebase1 />}/>
         <Route path='/classexp' element={<ClassExp />}/>
         </Routes>
      </div>
    </div>
    
  </>
    
      );
  }
}

export default HomeScreen;
