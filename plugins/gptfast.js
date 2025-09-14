let fetch = require("node-fetch")

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "• *Example :* .fastgpt Hello"
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        let res = await chatWithGPT(text)
        await conn.reply(m.chat, res, m)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["fastgpt *<text>*"]
handler.tags = ["internet", "ai"];
handler.command = /^(fastgpt)$/i

module.exports = handler