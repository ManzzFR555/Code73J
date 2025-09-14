import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
*Level ${user.level} 📊*
*${user.exp - min} / ${xp}*
*Kurang ${max - user.exp} Lagi! ✨*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${conn.getName(m.sender)} Naik Level 🎉\n.${user.role}`
        let str = `*${conn.getName(m.sender)}*\n *Naik Level 🎉*\n*${user.role}*
 
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🎊 Level Sebelumnya : ${before}
• 🎊 Level Baru : ${user.level}
• ⏰ Pada Jam : ${new Date().toLocaleString('id-ID')}

*_Note 📒* : *Semakin Sering Ber Interaksi Dengan Bot Semakin Tinggi Level Kamu📈_*
`.trim()

          
            let data = 'https://telegra.ph/file/3e84ea39838013a6c0019.jpg'
            try {
            let img = await levelup(teks, user.level)
            conn.sendButton(m.chat, img, 'image', str, m)
            } catch (e) {
            conn.sendFile(m.chat, data, 'image.jpg', str, m)
            }

    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler