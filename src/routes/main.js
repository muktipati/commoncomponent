import { Link ,Outlet } from "react-router-dom"
function Main(){
return(<>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to={"/about"}>About</Link></li>

</ul>
{/* <Outlet /> */}
</>)
}
export default Main