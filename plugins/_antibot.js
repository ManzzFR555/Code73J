export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  let chat = global.db.data.chats[m.chat];
  let sender = global.db.data.chats[m.sender];
  let hapus = m.key.participant;
  let bang = m.key.id;
  
  // Memeriksa apakah fitur antibot aktif di grup
  if (chat.antiBot) {
    // Memeriksa apakah pesan yang diterima berasal dari bot lain
    if (m.isBaileys && m.fromMe == false){
        // Memeriksa apakah pengirim pesan adalah admin atau bot admin
        if (isAdmin || !isBotAdmin){		  
        } else {
          // Mengeluarkan bot lain dari grup
          m.reply(`*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)`);
          await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
          return false; // Mengembalikan false agar pesan tidak diproses lebih lanjut
        }
        return true;
    }
  }
  return true;
}
