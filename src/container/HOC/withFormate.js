import React from "react";

export default function (Wrappedcomponent){
    const bold = (strings)=>{
        return <b>{strings}</b>
      }
      const data = [1,2,3]
    return class extends React.Component {

        render(){
            return <Wrappedcomponent bold={bold}/>
        }
    }
}