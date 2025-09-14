import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'_*P L E A S E  W A I T*_'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah menu di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/148864aa6c90c73f67fed.mp4"},
      gifPlayback: true,
      caption: '*ᴀꜱᴛʀᴏʙᴏᴛ* ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍᴇɴᴜʜɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇʀᴀꜱᴀ ʟᴇʟᴀʜ? *ᴀꜱᴛʀᴏʙᴏᴛ* ꜱᴇʟᴀʟᴜ ᴅɪ ꜱɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ʜᴀʀɪ ᴀɴᴅᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴅᴀꜰᴛᴀʀᴋᴀɴ ᴅɪʀɪ ᴀɴᴅᴀ ᴅɪ *ᴅᴀᴛᴀʙᴀꜱᴇ* ᴀꜱᴛʀᴏʙᴏᴛ ᴀɢᴀʀ ᴀꜱᴛʀᴏʙᴏᴛ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪɴɢᴀᴛ ᴀɴᴅᴀ ꜱᴇʟᴀᴍᴀ ᴀꜱᴛʀᴏʙᴏᴛ ᴍᴀꜱɪʜ ᴀᴋᴛɪꜰ.\n\n*L I S T - M E N U*\n*.about*\n*.ᴀʟʟᴍᴇɴᴜ*\n*.ʟɪꜱᴛᴍᴇɴᴜ* (new!)',
      contextInfo: {
      externalAdReply: {
      title: `© Astrobotz Spacex`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/36106051d7a2b001cf360.png',
      sourceUrl: `https://chat.whatsapp.com/HzaZ8Vf1K8LE3gxGBo0ZRL`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/chipi.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(menu)$/i;

export default handler;