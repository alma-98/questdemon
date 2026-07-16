
export default function CardTable(){

const cards=[

{
code:"QD-0001",
name:"Cute Skeleton",
rarity:"Common"
},

{
code:"QD-0002",
name:"Ghost Bunny",
rarity:"Rare"
}

];


return (

<table>

<thead>

<tr>
<th>Code</th>
<th>Name</th>
<th>Rarity</th>
</tr>

</thead>


<tbody>

{
cards.map(card=>(

<tr key={card.code}>

<td>{card.code}</td>

<td>{card.name}</td>

<td>{card.rarity}</td>

</tr>

))

}

</tbody>


</table>

)

}
