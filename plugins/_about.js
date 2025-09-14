import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'_*In Progress...*_',
'S u c c e s s....'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*_Loading_*'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/9ac8918bc081b12262fa5.mp4"},
      gifPlayback: true,
      caption: 'Bot WhatsApp adalah program otomatis yang dapat digunakan untuk berinteraksi dengan pengguna di platform WhatsApp. Bot ini dirancang untuk memberikan respons otomatis berdasarkan input dan permintaan yang diterima.\nBot WhatsApp dapat membantu memecahkan masalah umum, memberikan informasi, memberikan dukungan pelanggan, dan bahkan melakukan transaksi bisnis.'
      contextInfo: {
      externalAdReply: {
      title: `NeuroMD - About`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/9ceb8b8e42abe57de2e8f.jpg',
      sourceUrl: `https://chat.whatsapp.com/KtRLdHjo7uEE5iBVClyU7F`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(about)$/i;

export default handler;