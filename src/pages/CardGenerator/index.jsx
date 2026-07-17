export default function CardGenerator(){

return(

<div style={{
padding:"40px",
color:"white",
background:"#12061d",
minHeight:"100vh"
}}>

<h1>Quest Demon Card Generator</h1>

<p>Import Master Card Excel</p>

<input type="file" accept=".xlsx,.xls"/>

<br/><br/>

<button>
Generate Card
</button>

</div>

)

}
