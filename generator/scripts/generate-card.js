const fs = require("fs");
const sharp = require("sharp");

async function generate(card){

const svg = `
<svg width="744" height="1039" xmlns="http://www.w3.org/2000/svg">

<rect width="744" height="1039"
rx="40"
fill="#080812"/>

<rect x="20" y="20"
width="704"
height="999"
rx="35"
fill="#111827"
stroke="#f5c542"
stroke-width="8"/>

<text x="372"
y="100"
fill="#f5c542"
font-size="45"
text-anchor="middle">
QUEST DEMON
</text>

<text x="372"
y="780"
fill="white"
font-size="42"
text-anchor="middle">
${card.name}
</text>

<text x="372"
y="850"
fill="#c084fc"
font-size="32"
text-anchor="middle">
${card.rarity}
</text>

<text x="372"
y="920"
fill="#f5c542"
font-size="28"
text-anchor="middle">
Rp ${card.price}
</text>

</svg>
`;

await sharp(Buffer.from(svg))
.png()
.toFile(
`generator/output/cards/${card.code}.png`
);

console.log(
"Generated:",
card.code
);

}


generate({

code:"QD-0001",
name:"Cute Skeleton",
rarity:"Epic",
price:"500000"

});
