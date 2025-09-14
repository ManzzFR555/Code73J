//SC BY © VYNAA CHAN
//RECOE WAJIB KASI CREDITS 
//WA: 6282389924037
//TOKO KEBUTUHAN BOT TERPERCAYA
//HANYA DI SINI
//https://linkbio.co/VLShop

//group
//https://t.me/VynaaMD

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let [dari, ke] = text.split("|")
if (!dari || !ke) throw `*example:* ${usedPrefix}${command} ⧼id|area⧽`
  let putra = await fetch(`https://api.zahwazein.xyz/stalker/nickml?apikey=${global.zein}&query=${dari}&query2=${ke}`)
  let sky = await putra.json()
  let caption = `— *M L B B - N I C K*

• Game ID : ${sky.result.gameId}
• Zone ID : ${sky.result.zoneId}
• Nickname : ${sky.result.userName}`
  m.reply(caption)
    }  
handler.help = ['ceknickml', 'stalkml']
handler.tags = ['stalker']
handler.command = /^(stalkml|stalkernl|ceknickml)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler