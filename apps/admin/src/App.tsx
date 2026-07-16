import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CardStudio from "./pages/CardStudio";

export default function App(){

return(

<div style={{
display:"flex",
background:"#080812",
color:"white",
minHeight:"100vh"
}}>

<Sidebar/>

<div style={{
padding:30,
flex:1
}}>

<Dashboard/>

<hr/>

<CardStudio/>

</div>

</div>

)

}
