import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await fetch(`https://api.lolhuman.xyz/api/doujindesulatest?apikey=${global.lol}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Chapter:* ${v.chapter}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
}
handler.help = ['doujinlatest']
handler.tags = ['anime']
handler.command = /^(doujinlatest)$/i
handler.limit = true
handler.register = true

export default handler
/ SC BY © VYNAA CHAN
// RECODE WAJIB KASI CREDITS 
// WA: 6282389924037
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD