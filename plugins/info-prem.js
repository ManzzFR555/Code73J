import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
❏「 *Premium* 」
 ❃ *1 Minggu:* Rp.3.000
 ❃ *2 Minggu:* Rp.6.000
 ❃ *1 Bulan:* Rp.10.000
 ❃ *3 Bulan:* Rp.20.000
❃ *PERMANENT:* Rp. 30.000

❏ Keuntungan user premium?
🔓 Unlock fitur *PREMIUM*
🔓 Limit Unlimited
🔓 Bisa nambah inv

❏ Payment
- Dana
- Qris Allpay

Jika Berminat Silahkan Hubungi Owner AstroMD
WA: wa.me/19419318284
TELE: t.me/@fwrdyjuvenile
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © AstroMD - Official `,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/6463addb158a5aa8801f3.jpg`,
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(prem|premium|buyprem)$/i;

export default handler;