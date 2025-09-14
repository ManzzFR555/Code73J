import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 'Wait...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
🛄 *PREMIUM PRICE*
> 7 day : Rp 3.000
> 20 day : Rp 6.000
> 35 day : Rp 10.000
> 65 day : Rp 20.000

🎊 *BENEFITS PREMIUM*
> Limit Unlimited
> Bonus harian 
> Free add to group ( only pembelian 10k+
> Unlock Fitur Premium 
> Akses Private Chat

💰 *PAYMENT METHOD*
> Scan Qris all pay
> Transfer DANA
> Transfer OVO
> Transfer GOPAY

⚠️ *ALL TRX NO REFFUL*
👤 *MINAT ? CHAT OWNER* : wa.me/19419318284

_Note : Nomor owner bukan NOMOR BOT !_
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` アスコワール `,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/78a2540adb19295a77a03.png`,
      sourceUrl: `https://chat.whatsapp.com/HzaZ8Vf1K8LE3gxGBo0ZRL`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(prem|premium|buyprem)$/i;

export default handler;