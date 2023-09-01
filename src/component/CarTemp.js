import React from 'react';
// import "./../App.css';"


function CarTemp(props){
    return(
      <>
      {props.header=="Brand"?  <p className="card-text" style={{background:props.color}}>{props.header}: {props.name}</p>:""}
     {props.header!="Brand"? <p className="card-text">{props.header}: {props.name}</p>:''}
      </>
    )
}



export default CarTemp;
