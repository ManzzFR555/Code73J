import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Gambar apa yang Anda ingin saya cari?\n\n📌 Contoh  : ${usedPrefix + command} cewek cantik`;
  
  const apiKey = 'RbjEQK';
  const apiUrl = `https://api.neoxr.eu/api/goimg?q=${encodeURIComponent(text)}&apikey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const imageData = response.data.data[0];
    
    const imageUrl = imageData.url;

    if (!imageUrl.startsWith('http')) {
      throw 'Tidak ada gambar yang ditemukan';
    }

    const caption = `
👣 google image: ${text}
ℹ️ Sumber: ${imageData.origin.title}
🌐 Website: ${imageData.origin.website.url}
`.trim();

    await conn.sendFile(m.chat, imageUrl, 'pinterest.jpg', caption, m);
  } catch (error) {
    console.error(error);
    throw 'Terjadi kesalahan saat mencari gambar';
  }
};

handler.help = ['gimage <keyword>'];
handler.tags = ['internet', 'downloader'];
handler.command = /^(gimage|goimg)$/i;

export default handler;

// SC BY © VYNAA CHAN
// RECODE WAJIB KASI CREDITS 
// WA: 6282389924037
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD