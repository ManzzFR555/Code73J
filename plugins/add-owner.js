let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    } else {
        who = m.chat;
    }
    if (!who) throw 'Tag The Person You Want To Make An Owner!';
    if (global.owner.includes(who.split('@')[0])) throw 'This Person Is AlReady An Owner!';
    global.owner.push([who.split('@')[0], m.name, true]);
    const caption = `Now @${who.split('@')[0]} Has Been Made Access Fitur On An Owner!`;
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['addowner @user']
handler.tags = ['owner']
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true
handler.group = true

export default handler;
