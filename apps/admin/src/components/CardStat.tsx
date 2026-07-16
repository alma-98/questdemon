export default function CardStat(
{
title,
value
}:{
title:string,
value:string
}
){

return(
<div style={{
background:"#191927",
padding:20,
borderRadius:15
}}>

<h1 style={{color:"#f5c542"}}>
{value}
</h1>

<p>{title}</p>

</div>
)

}
