import React from "react";

const ListEmp = ({emps,loadmore,ids})=> (

    <>
    <ul>
        {console.log("ui",ids)}
        {emps.map((ttm)=><li key={ttm.id}>{ttm.name}</li>)}
        <button onClick={loadmore}>addmore</button>
    </ul>
    </>
)

export default ListEmp;