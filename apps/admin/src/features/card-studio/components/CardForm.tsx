import {useState} from "react";

export default function CardForm(){

const [name,setName]=useState("");

return (

<div>

<h2>Create Card</h2>

<input

placeholder="Card Name"

value={name}

onChange={e=>setName(e.target.value)}

/>

<button>
Save Card
</button>


</div>

)

}
