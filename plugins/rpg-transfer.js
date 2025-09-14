const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
    'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
    'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang', 'exp', 'limit', 'level',
]

let lastTransfer = {}

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Use format ${usedPrefix}${command} [type] [value] [number]
example ${usedPrefix}${command} money 9999 @15155188267

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return conn.reply(m.chat, lol, m)
    const count = Math.min(250000, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1 // Batas maksimum transfer adalah 250.000
    if (count > 250000) return m.reply("Maximum item transfer is 250,000.")
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    let _user = global.db.data.users[who]
    if (!who) return m.reply('Tag salah satu, atau ketik Nomernya!!')
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let cooldown = lastTransfer[m.sender] || 0
    if (new Date - cooldown < 180000) return m.reply(`Please wait ${(180000 - (new Date - cooldown)) / 1000} seconds before transferring again`)
    lastTransfer[m.sender] = new Date * 1
    if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
    let previous = user[type] * 1
    let _previous = _user[type] * 1
    user[type] -= count * 1
    _user[type] += count * 1
    if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`🪪 *T R A N S F E R*\n\n*📬 Status :* Berhasil ✅\n*🧾 Item :* ${type}${special(type)} ${rpg.emoticon(type)}\n*📟 Jumlah :* ${count}\n*📧 Untuk :* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    else {
        user[type] -= count * 1
    _user[type] += count * 1
    if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`🪪 *T R A N S F E R*\n\n*📬 Status :* Berhasil ✅\n*🧾 Item :* ${type}${special(type)} ${rpg.emoticon(type)}\n*📟 Jumlah :* ${count}\n*📧 Untuk :* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    }
}

handler.help = ['transfer'].map(v => v + ' <type> <count> <@tag>')
handler.tags = ['rpg']
handler.command = /^(transfer|tf|teep)$/i
handler.register = true
handler.group = true
handler.rpg = true
export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}