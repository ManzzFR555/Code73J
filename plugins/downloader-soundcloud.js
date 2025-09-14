// SC BY © VYNAA CHAN
// RECOE WAJIB KASI CREDITS 
// WA: 6283896757978
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD


import fetch from "node-fetch";

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0] || !args)
		return m.reply(
			`Linknya?`
		);
	if (!/http?:s\/\/soundcloud\//i.test(args[0]))
		return m.reply("Link nya salah");
	let msg = await conn.sendMessage(
		m.chat,
		{ text: "_Sedang Di Proses, Mohon Tunggu..." },
		{ quoted: m }
	);
	let res = await fetch(
		global.API("rose", "/downloader/soundcloud", { url: args })
	).then((a) => a.json());
	if (res.result == "Link Invalid" || res.result == "Request Error")
		throw "Link Invalid";
	let { title, url, download_count, thumbnail } = res.result;
	let teks = `*Title :* ${title}\n*Downloads :* ${download_count}`;
	m.reply(teks);
	await conn.sendMessage(
		m.chat,
		{ audio: { url: url }, mimetype: "audio/mpeg" },
		{ quoted: m }
	);
};
handler.help = ["soundcloud *⧼url⧽*"];
handler.tags = ["downloader"];
handler.command = ["soundcloud"];
handler.register = true
handler.premium = false
handler.limit = true

export default handler;
