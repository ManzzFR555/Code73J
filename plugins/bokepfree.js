let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Hayo Loh, Bjir Tobat🗿!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Ingat Mat Ingat Dosa', 'status@broadcast')
}
handler.help = ['bokepfree']
handler.tags = ['menufun']
handler.command = /^(bokepfree)$/i
export default handler 