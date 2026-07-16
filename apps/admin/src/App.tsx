import Dashboard from "./pages/Dashboard";
import CardStudio from "./pages/CardStudio";

function App(){

return(
<div style={{
background:"#09090f",
color:"white",
minHeight:"100vh",
padding:"30px"
}}>

<Dashboard />

<hr/>

<CardStudio />

</div>
)

}

export default App;
