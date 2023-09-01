import React from 'react';
import CarTemp from './CarTemp';
// import "./../App.css';"


function Car(props){
    return(
      <>
          <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
   <div className="card-header">
   <CarTemp header={"Brand"}
    name ="Audi" 
    color="red"/>
   </div>
    <CarTemp header={"Model"}
    name ="BH001"
    color="blue"/>
    <CarTemp header={"color"}
    name ="red"
    color="yellow"/>
    <CarTemp header={"Price"}
    name ="$2000"/>
    
    
  </div>
</div>
      </>
    )
}



export default Car;
