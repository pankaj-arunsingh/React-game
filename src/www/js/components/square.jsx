"use strict";

const
    React=require("react");
   
module.exports=class Square extends React.Component{
           render(){
               return (
      <button className="square" onClick={()=>this.setState({value:'X'})}>
        {this.props.value}
      </button>
    );
           }
       }
