import React,{Component} from 'react';
export default class Form extends Component{
    // state={
    //     park: [
    //     {id:1,
    //     Isvalid:true,
    //      money:100,
    //      time:1
    //     },
    //     {id:2,
    //     Isvalid:false,
    //     money:50, 
    //     time:2
    //     },
    //     {id:3,
    //     Isvalid:true,
    //     money:70,
    //     time:5},
    //     {id:4,
    //     Isvalid:true,
    //     money:0 },
    //    ], 
       
    //   }
       

    //   money=(timer)=>{
    //   this.setState({
    //       time: timer.target.value,
    //   })
    //  console.log(timer.target.value)
    //  console.log(timer.target.name)
    //  if(timer.target.value> 0){
    //     console.log(timer.target.value*1 -(this.state.money))
    //  }
    // }

    



    // booking=()=>{
    //   const  result = (this.state.park).filter((element)=>{
    //     return element.Isvalid ===true
    //   })
    //   console.log(result)
    //   // return result
    // }
    
    render(){
        return (
          <> 
            <label> Time
            <input type="number" name="timer" min="1" max="5"className="border border-secondary my-1 mr-2 "  onChange={this.money}/>
            </label>
            {/* <label> Parking
            <input type="number" name="timer" min="1" max="8" onChange={this.Booking}/> 
            </label> */}
            <button type="button" className="btn btn-warning btn-lg my-1 mr-2" onClick={this.props.getPark}>Booking</button>
           {/* <button  onClick={this.props.getPark.bind(this)}>Booking</button> */}
           <button type="button" className="btn btn-warning btn-lg my-1 mr-2" onClick={this.props.cleartime} >Comfrmation</button>

          </>
        );
      }
}