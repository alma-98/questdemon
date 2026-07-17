import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function PublisherLayout(){

return(

<div
style={{
display:"flex",
background:"#080812",
color:"#fff",
minHeight:"100vh"
}}
>

<Sidebar/>

<div
style={{
flex:1,
padding:30
}}
>

<h1>Quest Demon Publisher CMS</h1>

<div
style={{
display:"flex",
gap:20,
marginBottom:25
}}
>

<NavLink to="/publisher">Dashboard</NavLink>

<NavLink to="/publisher/master-cards">
Master Cards
</NavLink>

</div>

<Outlet/>

</div>

</div>

)

}
