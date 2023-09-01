import { Outlet } from "react-router-dom"
import Main from "./main"

function RootLay(){
    return(
        <>
        <Main />
   
        <Outlet/>
         </>
    )
}

export default RootLay