let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Format salah!\n\nTambah exp: .addexp <tag orang> <jumlah exp>\nKurangi exp: removeexp <tag orang> <jumlah exp>'
    
    // Extracting the mentioned user and the exp value from the command text
    let [who, expValue] = text.split(' ')
    if (!who) throw 'Tag orang yang akan diubah expnya!'
    if (isNaN(expValue)) throw 'Jumlah exp harus angka!'

    // Converting expValue to a number
    expValue = parseInt(expValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their exp to 0
    if (!users[user]) users[user] = { exp: 0 }

    // Determining whether to add or remove exp based on the command
    if (command === 'addexp') {
        // Adding the specified exp to the user's account
        users[user].exp += expValue
        conn.reply(m.chat, `Berhasil menambahkan ${expValue} exp untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'removeexp') {
        if (expValue > users[user].exp) {
            // Set the user's exp to 0 if the specified exp is greater than the user's current exp
            users[user].exp = 0
            conn.reply(m.chat, `Berhasil mengurangi exp untuk @${user.split('@')[0]}. exp kini menjadi 0!`, m)
        } else {
            // Removing the specified exp from the user's account
            users[user].exp -= expValue
            conn.reply(m.chat, `Berhasil mengurangi ${expValue} exp untuk @${user.split('@')[0]}!`, m)
        }
    }
}

handler.help = ['addexp', 'remmexp']
handler.tags = ['owner']
handler.command = /^(add|rem)exp$/i
handler.rowner = true

export default handler