
import React from 'react';


class Text extends React.Component{
  render(){
    return(
     <>
     <ul>
        <ol>emp-1</ol>
        <ol>{this.props.bold("emp-2")}</ol>
        <ol>emp-3</ol>
        <ol>emp-4</ol>
     </ul>
     </> 
    )
  }
}



export default Text;
