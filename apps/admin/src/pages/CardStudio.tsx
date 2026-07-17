import "./CardStudio.css";
import {useState} from "react";
import {importCards} from "../utils/importCards";

export default function CardStudio(){

const [cards,setCards]=useState<any[]>([]);

async function upload(e:any){

const file=e.target.files?.[0];

if(!file) return;

const data=await importCards(file);

setCards(data);

}

return(

<div className="cardstudio">

<h1>🃏 Quest Demon Card Generator</h1>

<div className="toolbar">

<label className="btn">
Import Master Cards
<input
hidden
type="file"
accept=".csv,.xlsx,.xls"
onChange={upload}
/>
</label>

<button className="btn">
Generate Cards
</button>

<button className="btn">
Export PNG
</button>

<button className="btn">
Export PDF
</button>

</div>

<h3>Total Cards : {cards.length}</h3>

<table className="table">

<thead>

<tr>

{cards.length>0&&Object.keys(cards[0]).map(h=>

<th key={h}>{h}</th>

)}

</tr>

</thead>

<tbody>

{cards.map((c,i)=>

<tr key={i}>

{Object.values(c).map((v:any,j)=>

<td key={j}>{String(v)}</td>

)}

</tr>

)}

</tbody>

</table>

</div>

)

}
