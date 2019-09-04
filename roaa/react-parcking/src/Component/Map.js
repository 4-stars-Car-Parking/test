
import React,{Component} from 'react';
import './Map.css' ;
export default class App extends Component{

  state={
    isvalid: this.props.isvalid
  }

    render(){
      console.log(this.props.isvalid)
        return (
          <>
          <h1>Each houres per  1jd </h1>
          <div className="grid" >

          {this.props.allpark.map((elem)=> <div className="item" id={elem.numpark} style={{
          backgroundColor: (elem.status) ? 'red' : 'green'
        }} >{elem.numpark}</div>   )    }

          </div>
          </>
        );}}