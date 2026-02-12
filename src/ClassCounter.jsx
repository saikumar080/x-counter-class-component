import React from "react";
class ClassCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
   handleIncrement=()=>{
    this.setState((prevState)=>{
        return{count: prevState.count+1};
    })
   } 
   handleDecrement=()=>{
    this.setState((prevState)=>{
        return {
            count:prevState.count-1
        };
    })
   };
   render(){
    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleIncrement} style={{margin:"10px", padding:"4px", backgroundColor:"lightblue", borderRadius:"4px", cursor:"pointer"}}>Increment</button>
            <button onClick={this.handleDecrement} style={{margin:"10px", padding:"4px", backgroundColor:"lightcoral", borderRadius:"4px", cursor:"pointer"}}  >Decrement</button>
        </div>
    )
   }
}
export default ClassCounter;