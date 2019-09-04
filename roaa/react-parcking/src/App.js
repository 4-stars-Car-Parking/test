import React,{Component} from 'react';
import Form  from './Component/Form';
import Map from './Component/Map';
import axios from 'axios';
//import { Alert } from 'react-alert'


export default class App extends Component{
  state={
    allpark:[],
    data:[],
    isvalid:null,
    status:null,
    d:10,
    myVar:null
  }


  componentDidMount() {
    axios.get("http://localhost:9000/park/all")
   .then(res=>{
   // console.log("allpark",res.data)

   this.setState({
    allpark:res.data
   })
   //console.log(this.state.allpark);
  })}


  myTimer=(t)=> {
    //(this.state.d)-1;
    t=t-1
  // console.log(this.getPark.t)
   // console.log("inside time",this.state.myVar)
   if(t==0){
   
    axios.put(`http://localhost:9000/park/false/${this.state.isvalid}/${!(this.state.status)}`)
    .then(res=>{
     console.log("update park{0} to true")
  
      this.setState({
       allpark:res.data
      })
      console.log("allpark after updat",res.data)
    })
    clearInterval(this.state.myVar);
   }
  
  }



 getPark=()=>{
  axios.get("http://localhost:9000/park/false")
   .then(res=>{
    console.log("get park false")

   this.setState({
   data:res.data
   })
   console.log(this.state.data);

   if((this.state.data.length)>0)
   {

    console.log("data.length)>0",this.state.data[0] )

     this.setState({
      isvalid: this.state.data[0].numpark ,
      status: this.state.data[0].status 
     })
     console.log(this.state.isvalid);
     console.log(this.state.status);
     alert(`Place # ${this.state.isvalid} has been booked for you
     Try to reach the site within ten minutes or the reservation will be canceled`)


     axios.put(`http://localhost:9000/park/false/${this.state.isvalid}/${!(this.state.status)}`)
     .then(res=>{
      console.log("update park{0} to true",this.state.isvalid,this.state.status)

       this.setState({
        allpark:res.data
       })
       console.log("allpark after updat",res.data)
     })

     
this.state.myVar = setInterval(this.myTimer(10) ,1000);

console.log(this.state.myVar)
  
   }
   else
   { 
    console.log("data.length)==0 => no true")
   }
   })
 };



 cleartime=()=>{
  clearInterval(this.state.myVar);
 }


//  updatastate=()=>{
//    axios.put(`http://localhost:9000/park/false`)
//    .then(res=>{
//      this.setState({
//        data:res.data
//      })
//    })
//    .catch(error => {
//     console.log(error);
//   });
//   }

  // updateblance=()=>{
  //   axios.put("http://localhost:9000/user/")
  //   .then(res=>{
  //    this.setState({
  //      data:res.data
  //    })
  //   })
  // }
  


  




  //  booking2=()=>{
  //   if(park.Isvalid==true){
  //     console.log("erfgtfg")
  //   }

  //   else
  //   {
  //     console.log("ffff")

  //   }
  //  }


//    booking2=(number)=>{
//  if(this.state.number===this.state.park.id )
//    {
//      console.log("fffff")
//    }
//    else
//    {
//     console.log("gfgfgfg")
//   }
// }
   
// booking2=(number)=>{
//   let avalibleparking=this.state.park.map(number=>{
//   //  return this.state.number ===this.state.park.id
//   if(number ===this.state.park.id){
//    console.log("tohthoghl")
//   }
//  })
//  return avalibleparking
// }

 
  render(){
   // console.log(this.state.data)

  return (
    <>
    <Form getPark={this.getPark} cleartime={this.cleartime} />
    <Map allpark={this.state.allpark}  isvalid= {this.state.isvalid} />
    </>
  );
}
}

