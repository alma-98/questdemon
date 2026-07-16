const QRCode = require("qrcode");

async function generate(code){
  await QRCode.toFile(
    `generator/output/cards/${code}-qr.png`,
    `https://questdemon.web.app/card/${code}`
  );
}

generate(process.argv[2]);
