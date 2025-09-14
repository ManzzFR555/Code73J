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
❏ *_Harga Sewa_*
❃ _7 Hari 2k / 1 Group_
❃ _20 Hari 5k / 1 Group_
❃ _30 Hari 10k / 2 Group_
❃ _2 Bulan 20k / 3 Group_
❃ _3 Bulan 30k / 3 Group_
❃ _4 Bulan 50k / 3 Grup_
❃ _PERMANENT 100k_

Premium 4 BULAN bonus masukin ke 3 grup
Premium PREMANENT bonus masukin ke  grup

❏ *FITUR*
➠ _AntiLink auto kick/no kick_
➠ _Welcome and Left_
➠ _Enable & Disable_
➠ _Add list Store_
➠ _Auto Admin & UnAdmin_
➠ _Hidetag - TagAll - Totag_
➠ _RPG Games_
➠ _Games Menu_
➠ _Play Audio & Video YouTube_
➠ _Mute & UnMute_
➠ _Kick Member_
➠ _Absen, ListOnline_
➠ _Group Open & Close_
➠ _Kick All Member_
➠ _Group Time_
➠ _Cek ID_
➠ _Dan Lain-Lain_

❏ Payment
- Dana
- Qris Allpay

Mau Order? Hubungi Owner AstroMD
WhatsApp : 19419318284
Telegram : t.me/@fwrdyjuvenile
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © AstroMD - Official `,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/6463addb158a5aa8801f3.jpg`,
      sourceUrl: `https://chat.whatsapp.com/LPDtkssjrJiLfrKcEhzxn4`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sewabot|sewa|rental)$/i;

export default handler;