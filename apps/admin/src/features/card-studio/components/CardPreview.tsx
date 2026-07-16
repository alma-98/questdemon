import type {QuestCard} from "../types/card";

export default function CardPreview({card}:{card:QuestCard}){

return (

<div className="card-preview">

<h2>QUEST DEMON</h2>

<img 
src={card.imageUrl || "/cards/default.png"}
width="200"
/>

<h3>{card.name}</h3>

<p>{card.rarity}</p>

<p>{card.race} - {card.element}</p>

<p>
💰 Rp {card.price.toLocaleString()}
</p>

<p>
🎮 Play {card.playCount}
</p>

</div>

)

}
