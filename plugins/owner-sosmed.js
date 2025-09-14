import fs from 'fs' 
let handler = async (m, { conn, usedPrefix }) => {
  let payText = ` 
• LinkTree : ${link.web}
`
  // Kalo mo nambahin atau gada, hapus aja taro manual
  // Send reaction message
  await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '📱' }}, { messageId: m.key.id })
  conn.sendMessage(m.chat, {
    text: payText, 
    contextInfo: {
      externalAdReply: {
        title: 'I N F O S O S M E D',
        body: global.author,
        thumbnailUrl: global.vynaajpg, 
        sourceUrl: global.linkweb,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.command = /^(sosmed)$/i
handler.tags = ['info']
handler.help = ['sosmed']

export default handler
