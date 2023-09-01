
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import "./../App.css';"


function Logout(props) {
  const logoutcount = useSelector((state) => {
    console.log("state", state)
    return state.count
  })



  const dipatch = useDispatch()
  const increamenthandler = () => {
    dipatch({ type: "increament"})
  }
  const decrementhandler = () => {
    dipatch({ type: "decrement" })
  }
  const increamentby5handler = ()=>{
    dipatch({ type: "incre5",value:5 })
  }
  let [name, setName] = useState(props.emdata)
  let [age, setage] = useState([])

  let arr = [1, 2, 4, 5, 13, 89, 21, 46]



  const updatagehandler = (ids) => {
    let displayemp = [...name].filter((itm) => itm.id === ids)
    setName(displayemp)
    // setName("aks")
  }

  const getEmp = () => {

  }
  useEffect(() => {

  })

  useEffect(() => {

  })
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* <p>username:{employee.name}</p>
     <p>age:{employee.age}</p>
     <p>designation:{employee.designation}</p>
     <button type="button" class="btn btn-secondary"
     onClick={updatename}
     >updatename</button>
     <button type="button" class="btn btn-secondary"
     onClick={updateage}
     >updateage</button>
     <button type="button" class="btn btn-secondary"
     onClick={updatedesignation}
     >updatedesignation</button> */}
        {/* <p>useEffect</p> */}
        {/* <p>{name.name}</p><button onClick={updatenamehandler}>update</button>
<p>{name.age}</p> */}
        {/* <button onClick={updatagehandler}>update</button> */}
        {/* <p>{gender}</p><button >update</button>
<p>{id}</p><button >update</button> */}



        <span>Count:</span><span>{logoutcount}</span>

        <button onClick={increamenthandler}>increament</button>
        <button onClick={decrementhandler}>decrement</button>
        <button onClick={increamentby5handler}>increamentby5</button>

      </div>


    </>

  )
}



export default Logout;
