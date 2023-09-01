import React from "react";

const emptable = ({emps,loadmore})=>(
<>
<table>

    <tr>
        <td>ids</td>
        <td>name</td>
        <td>age</td>
    </tr>
    
        {emps.map((id)=>{
            return (
                <tr key ={id.id}>
                    <td>{id.id}</td>
                    <td>{id.name}</td>
                    <td>{id.age}</td>
                </tr>
            )
        })}
    
</table>

</>
)
export default emptable