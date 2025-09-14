let handler = async (m, { conn, text, usedPrefix, command }) => {
const deleteMessage = { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: [m.sender] } };
conn.sendMessage(m.chat, {text: '👋 , Ada Yang Bisa Saya Bantu?'},{quoted: m, ephemeralExpiration: global.ephemeral})
}

handler.customPrefix = /^(p|bot|test|on)$/i
handler.command = new RegExp
export default handler