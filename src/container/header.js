
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component{
  increament = ()=>{
this.props.headerincreament()
  }
  decrement =()=>{
this.props.headerdecrement()
  }

  render(){
   
    return(
      <>

      <span>count:{this.props.headercount}</span>
      <button onClick={this.increament}>increament</button>
      <button onClick={this.decrement}>decrement</button>
      </>
    )
  }
}
const adc =(state)=>{
  return {
    headercount:state.count
  }
}
const yuuu = (par)=>{
  return{
    headerincreament :()=> par({type:"increament"}),
    headerdecrement :()=> par({type:"decrement"})
  }
}


export default connect(adc,yuuu)(Header);
