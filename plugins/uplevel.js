import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    conn.adReply(m.chat, `*Selamat* ${conn.getName(m.sender)} \nTelah naik 🧬level : *${user.role}*`
        let str = `*${conn.getName(m.sender)}* naik 🧬level\n.${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Level Sebelumnya : ${before}
• 🧬Level Baru : ${user.level}
• ⏰Pada Jam : ${new Date().toLocaleString('id-ID')}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_`, 'T O T A L - F I T U R', '', fs.readFileSync('./media/thumbnail.jpg'), global.link.group, m)
}
handler.help = ['lepel']
handler.tags = ['info']
handler.command = ['lepel']
export default handler