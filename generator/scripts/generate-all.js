const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dataPath = path.join(
__dirname,
"../../data/cards/master.json"
);

const outputDir = path.join(__dirname, 
"../output/cards");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(dataPath)) {
  console.error("cards.json tidak ditemukan.");
  process.exit(1);
}

const database = JSON.parse(
fs.readFileSync(dataPath,"utf8")
);

const cards = database.cards;

async function generate(card) {

  const svg = `
<svg width="744" height="1039" xmlns="http://www.w3.org/2000/svg">

<rect width="744" height="1039" rx="40" fill="#080812"/>

<rect
x="20"
y="20"
width="704"
height="999"
rx="35"
fill="#111827"
stroke="#f5c542"
stroke-width="8"/>

<text
x="372"
y="90"
fill="#f5c542"
font-size="46"
text-anchor="middle">
QUEST DEMON
</text>

<text
x="372"
y="820"
fill="white"
font-size="38"
text-anchor="middle">
${card.name}
</text>

<text
x="372"
y="875"
fill="#c084fc"
font-size="30"
text-anchor="middle">
${card.rarity}
</text>

<text
x="372"
y="930"
fill="#f5c542"
font-size="28"
text-anchor="middle">
Rp ${card.price.toLocaleString()}
</text>

</svg>
`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, `${card.cardCode}.png`));

  console.log("Generated", card.cardCode);
}

(async () => {

  for (const card of cards) {
    await generate(card);
  }

  console.log("==================================");
  console.log("Semua kartu selesai dibuat.");
  console.log("==================================");

})();
