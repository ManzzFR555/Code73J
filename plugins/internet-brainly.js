import fetch from 'node-fetch'

let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) return m.reply(`Masukkan pertanyaan!\n\nContoh:\n${usedPrefix + command} Manusia Terbuat Dari Apa?`)
    
    try {
        let response = await fetch(`https://api.example.com/brainly?q=${encodeURIComponent(text)}`)
        if (!response.ok) throw await response.text()
        let { result } = await response.json()

        if (!result || !result.length) {
            return m.reply('Tidak ada hasil yang ditemukan untuk pertanyaan ini.')
        }

        let answers = result.map((v, i) => {
            return `
*${i + 1}.* ${v.question.content}

Jawaban: ${v.answer.content.replace(/Jawaban(:)?/i, '').trim()}
`.trim()
        }).join('\n\n\n')

        m.reply(answers)
    } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan saat memproses permintaan.')
    }
}

handler.help = ['brainly <pertanyaan>']
handler.tags = ['internet']
handler.command = /^brainly$/i

export default handler