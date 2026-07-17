import { useMemo, useState } from "react";
import { importCards } from "../../utils/importCards";

export default function MasterCards() {

  const [cards,setCards]=useState<any[]>([]);
  const [search,setSearch]=useState("");
  const [type,setType]=useState("All");

  async function upload(e:any){

    const file=e.target.files?.[0];

    if(!file) return;

    const data=await importCards(file);

    setCards(data);

  }

  const types=[
    "All",
    ...Array.from(
      new Set(
        cards.map(c=>c.Type||c["Card Type"]).filter(Boolean)
      )
    )
  ];

  const filtered=useMemo(()=>{

    return cards.filter(c=>{

      const keyword=JSON.stringify(c).toLowerCase();

      const okSearch=keyword.includes(search.toLowerCase());

      const t=c.Type||c["Card Type"]||"";

      const okType=type==="All"||t===type;

      return okSearch&&okType;

    });

  },[cards,search,type]);

  return(

<div>

<h1>📚 Master Cards</h1>

<div style={{
display:"flex",
gap:10,
marginBottom:20,
flexWrap:"wrap"
}}>

<label style={{
background:"#6d28d9",
padding:"10px 18px",
borderRadius:10,
cursor:"pointer"
}}>

Import Excel

<input
hidden
type="file"
accept=".csv,.xlsx,.xls"
onChange={upload}
/>

</label>

<input
placeholder="Search..."
value={search}
onChange={e=>setSearch(e.target.value)}
style={{
padding:10,
width:260
}}
/>

<select
value={type}
onChange={e=>setType(e.target.value)}
style={{
padding:10
}}
>

{types.map(t=>

<option key={t}>{t}</option>

)}

</select>

</div>

<p><b>Total Cards :</b> {filtered.length}</p>

<div style={{
overflow:"auto",
maxHeight:"70vh"
}}>

<table
style={{
width:"100%",
borderCollapse:"collapse"
}}
>

<thead>

<tr>

{filtered.length>0&&Object.keys(filtered[0]).map(h=>

<th
key={h}
style={{
background:"#19192a",
padding:10
}}
>

{h}

</th>

)}

</tr>

</thead>

<tbody>

{filtered.map((c,i)=>

<tr key={i}>

{Object.values(c).map((v:any,j)=>

<td
key={j}
style={{
padding:8,
borderBottom:"1px solid #333"
}}
>

{String(v)}

</td>

)}

</tr>

)}

</tbody>

</table>

</div>

</div>

)

}
