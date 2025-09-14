import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
┌  ◦ Mengakses Antilink ig/tt/fb/yt/gc dll
│  ◦ Mengakses Game Rpg
│  ◦ Mengakses Game Lainya
│  ◦ Enable & Disable
│  ◦ Auto Admin & UnAdmin
│  ◦ Play Audio & Video YouTube
│  ◦ Group Time
│  ◦ Kick All Member 
│  ◦ Mute & UnMute
│  ◦ Mengatur Text Welcome 
│  ◦ Support Hidetag, Totag, Tagall (dll)
│  ◦ Free Penambahan Premium 1 Minggu
│  ◦ Mengakses Fitur Premium (dll)
│  ◦ Akses Semua Fitur Tanpa batas limit
└  ◦ RP 10.000/Bulan

❏ *PRICE SEWA*
◦ 7 day : RP 3.000
◦ 15 day : RP 5.000
◦ 1 Month : RP 10.000
◦ 2 Month : RP 20.000
◦ Permanent : RP 25.000

Buy Permanent Bonus Premium ✅

Jika Berminat Silahkan Hubungi Owner
*(Ketik .owner)*
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Astrobot - Store`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/98b7ad9801de5f3fff64c.png`,
      sourceUrl: `https://chat.whatsapp.com/HzaZ8Vf1K8LE3gxGBo0ZRL`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sewabot|sewa|rental)$/i;

export default handler;