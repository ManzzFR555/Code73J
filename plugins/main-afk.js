let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date()
    user.afkReason = text
    conn.sendMessage(m.chat, {
        text: `${user.registered ? user.name : conn.getName(m.sender)} is now AFK\n\nReason ➠ ${text ? text : 'Tanpa Alasan'}`,
        contextInfo: {
            externalAdReply: {
                title: global.namebot,
                body: global.author,
                thumbnailUrl: global.vynaajpg,
                sourceUrl: 'Https://Linktr.ee/_MetroBot', // Ganti dengan link web yang sesuai
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    })
}
handler.help = ['afk'].map(v => v + ' <alasan>')
handler.tags = ['group']
handler.command = /^afk$/i

export default handler

// SC BY © VYNAA CHAN
// RECODE WAJIB KASI CREDITS 
// WA: 6282389924037
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD