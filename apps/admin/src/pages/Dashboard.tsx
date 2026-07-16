import CardStat from "../components/CardStat";

export default function Dashboard(){

return(

<div>

<h1>Dashboard Admin</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:20
}}>

<CardStat
title="Total Cards"
value="600"
/>

<CardStat
title="Players"
value="0"
/>

<CardStat
title="Marketplace"
value="0"
/>

<CardStat
title="Tickets"
value="0"
/>

</div>

</div>

)

}
