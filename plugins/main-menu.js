import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, uptime, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};

    await conn.sendMessage(m.chat, { react: { text: '🦋', key: m.key } })
  let txt =`◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

🌿Hola! *𝐸𝑑𝑖𝑡𝑜𝑟-𝑂𝐹𝐶-𝐷𝑒(𝐵𝑂𝑇𝑆)* Bienvenido A Mi Menu.
🦋Tengo: 28 De Usuarios
🌺Tiempo Activa: 00d 01h 53m 

◆ ━━━━━━━◆❃◆━━━━━━ ◆
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  (ง'̀-'́)ง 𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺

Ⓟ = Premium
ⓓ = Diamantes

┌➷➷➷➷➷ *ACERCA DE*
┋➺ 🦋 .blocklist
┋➺ 🦋 .info
┋➺ 🦋 .owner
┋➺ 🦋 .donate
┋➺ 🦋 .language <es-en..>
┋➺ 🦋 .listprem
┋➺ 🦋 .menu2
┋➺ 🦋 .ping
┋➺ 🦋 .runtime
┋➺ 🦋 .speedtest
┋➺ 🦋 .support
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *SUB BOTS*
┋➺ 🦋 .botclone
┋➺ 🦋 .botlist
┋➺ 🦋 .txbot
┋➺ 🦋 .stop
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *JUEGOS*
┋➺ 🦋 .dado
┋➺ 🦋 .mates <modo>
┋➺ 🦋 .ppt
┋➺ 🦋 .slot <apuesta>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *NIVEL & ECONOMIA*
┋➺ 🦋 .balance
┋➺ 🦋 .buy
┋➺ 🦋 .daily
┋➺ 🦋 .leaderboard
┋➺ 🦋 .levelup
┋➺ 🦋 .mine
┋➺ 🦋 .transfer [tipo] [monto] [@tag]
┋➺ 🦋 .weekly
┋➺ 🦋 .work
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *REGISTRO*
┋➺ 🦋 .reg <nombre.edad.género>
┋➺ 🦋 .mysn
┋➺ 🦋 .unreg <Num Serie>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *STICKER*
┋➺ 🦋 .attp <text>
┋➺ 🦋 .emojimix <emoji+emoji> (ⓓ)
┋➺ 🦋 .getsticker (ⓓ)
┋➺ 🦋 .smaker (ⓓ)
┋➺ 🦋 .sticker
┋➺ 🦋 .telestick
┋➺ 🦋 .toimg <sticker>
┋➺ 🦋 .tovid
┋➺ 🦋 .trigger <@user>
┋➺ 🦋 .ttp <text>
┋➺ 🦋 .take <nombre>|<autor>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *IMAGEN*
┋➺ 🦋 .tvid (ⓓ)
┋➺ 🦋 .couple (ⓓ)
┋➺ 🦋 .imagen (ⓓ)
┋➺ 🦋 .girl (ⓓ)
┋➺ 🦋 .meme
┋➺ 🦋 .person
┋➺ 🦋 .pinterest
┋➺ 🦋 .wallpaper (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *MAKER*
┋➺ 🦋 .logololi (ⓓ)
┋➺ 🦋 .graffiti2 (ⓓ)
┋➺ 🦋 .3dbox (ⓓ)
┋➺ 🦋 .future (ⓓ)
┋➺ 🦋 .ninja (ⓓ)
┋➺ 🦋 .marvel (ⓓ)
┋➺ 🦋 .paper (ⓓ)
┋➺ 🦋 .glitch (ⓓ)
┋➺ 🦋 .halloween (ⓓ)
┋➺ 🦋 .green (ⓓ)
┋➺ 🦋 .american (ⓓ)
┋➺ 🦋 .neon (ⓓ)
┋➺ 🦋 .devil (ⓓ)
┋➺ 🦋 .wolf (ⓓ)
┋➺ 🦋 .phlogo (ⓓ)
┋➺ 🦋 .transformer (ⓓ)
┋➺ 🦋 .thunder (ⓓ)
┋➺ 🦋 .graffiti (ⓓ)
┋➺ 🦋 .bpink (ⓓ)
┋➺ 🦋 .joker (ⓓ)
┋➺ 🦋 .matrix (ⓓ)
┋➺ 🦋 .glow (ⓓ)
┋➺ 🦋 .ballon (ⓓ)
┋➺ 🦋 .dmd (ⓓ)
┋➺ 🦋 .lightglow (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *PREMIUM*
┋➺ 🦋 .gdrive (ⓓ)
┋➺ 🦋 .mediafire <url> (ⓓ)
┋➺ 🦋 .xnxx (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *GRUPO*
┋➺ 🦋 .add
┋➺ 🦋 .delete
┋➺ 🦋 .delwarn @user
┋➺ 🦋 .demote (@tag)
┋➺ 🦋 .infogp
┋➺ 🦋 .hidetag
┋➺ 🦋 .kick @user
┋➺ 🦋 .link
┋➺ 🦋 .profile
┋➺ 🦋 .promote
┋➺ 🦋 .rules
┋➺ 🦋 .setbye <text>
┋➺ 🦋 .setrules <text>
┋➺ 🦋 .group
┋➺ 🦋 .setwelcome
┋➺ 🦋 .simulate <event> @user
┋➺ 🦋 .staff
┋➺ 🦋 .totag
┋➺ 🦋 .warn @user
┋➺ 🦋 .warns
┋➺ 🦋 .checkexpired
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *EN/DISABLE OPCIONES*
┋➺ 🦋 .enable <option>
┋➺ 🦋 .disable <option>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *ANIME*
┋➺ 🦋 .waifu (ⓓ)
┋➺ 🦋 .neko (ⓓ)
┋➺ 🦋 .megumin (ⓓ)
┋➺ 🦋 .loli (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *ANIME REACCION*
┋➺ 🦋 .kill @tag (ⓓ)
┋➺ 🦋 .kiss @tag (ⓓ)
┋➺ 🦋 .pat @tag (ⓓ)
┋➺ 🦋 .slap @tag (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *DESCARGAS*
┋➺ 🦋 .facebook <url> (ⓓ)
┋➺ 🦋 .gdrive (ⓓ)
┋➺ 🦋 .gitclone <url> (ⓓ)
┋➺ 🦋 .igstalk
┋➺ 🦋 .igstory (ⓓ)
┋➺ 🦋 .instagram <link ig> (ⓓ)
┋➺ 🦋 .mediafire <url> (ⓓ)
┋➺ 🦋 .play
┋➺ 🦋 .tiktok (ⓓ)
┋➺ 🦋 .tiktokstalk
┋➺ 🦋 .twitter <url> (ⓓ)
┋➺ 🦋 .ytmp3 <url>
┋➺ 🦋 .ytsearch
┋➺ 🦋 .ytmp4 <link yt>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *TOOLS*
┋➺ 🦋 .remini
┋➺ 🦋 .hd
┋➺ 🦋 .enhance
┋➺ 🦋 .calc (+*-%)
┋➺ 🦋 .fake <text> @user <text2>
┋➺ 🦋 .get
┋➺ 🦋 .google
┋➺ 🦋 .lyrics
┋➺ 🦋 .ai <text>
┋➺ 🦋 .readmore <text1>|<text2>
┋➺ 🦋 .readvo
┋➺ 🦋 .script
┋➺ 🦋 .ssweb <url>
┋➺ 🦋 .tourl
┋➺ 🦋 .trad <leng> <text>
┋➺ 🦋 .tts <lang> <teks>
┋➺ 🦋 .wikipedia
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *FUN*
┋➺ 🦋 .afk
┋➺ 🦋 .gay @user (ⓓ)
┋➺ 🦋 .trash
┋➺ 🦋 .rip
┋➺ 🦋 .shit
┋➺ 🦋 .spank
┋➺ 🦋 .imgdel
┋➺ 🦋 .beautiful
┋➺ 🦋 .shipping
┋➺ 🦋 .bot
┋➺ 🦋 .toav
┋➺ 🦋 .txt
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *DATABASE*
┋➺ 🦋 .delcmd <text>
┋➺ 🦋 .listcmd
┋➺ 🦋 .setcmd <text>
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *NSFW +18*
┋➺ 🦋 .ass (ⓓ)
┋➺ 🦋 .boobs (ⓓ)
┋➺ 🦋 .lesbian (ⓓ)
┋➺ 🦋 .pack (ⓓ)
┋➺ 🦋 .pussy (ⓓ)
┋➺ 🦋 .xnxx (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *NSFW ANIME*
┋➺ 🦋 .xwaifu (ⓓ)
┋➺ 🦋 .xneko (ⓓ)
┋➺ 🦋 .blowjob (ⓓ)
┋➺ 🦋 .trap (ⓓ)
┋➺ 🦋 .yuri (ⓓ)
┋➺ 🦋 .cum (ⓓ)
┋➺ 🦋 .hentai (ⓓ)
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *OWNER*
┋➺ 🦋 .expired <días>
┋➺ 🦋 .addprem @user <hour>
┋➺ 🦋 .banchat
┋➺ 🦋 .listban
┋➺ 🦋 .ban @user
┋➺ 🦋 .tx
┋➺ 🦋 .cleartmp
┋➺ 🦋 .delexpired
┋➺ 🦋 .delprem @user
┋➺ 🦋 .getplugin
┋➺ 🦋 .join <chat.whatsapp.com> <dias>
┋➺ 🦋 .reset-user
┋➺ 🦋 .restart
┋➺ 🦋 .unbanchat
┋➺ 🦋 .unban @user
┋➺ 🦋 .update
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *AVANZADO*
┋➺ 🦋 >
┋➺ 🦋 =>
┋➺ 🦋 $
╰━━━━━━━ •♬• ━━━━━━━

┌➷➷➷➷➷ *ai*
┋➺ 🦋 .remini
┋➺ 🦋 .hd
┋➺ 🦋 .enhance
╰━━━━━━━ •♬• ━━━━━━━;    await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '᯽𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯᯽', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑻𝒊𝒆𝒏𝒆 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑪𝒐𝒎𝒖𝒏𝒊𝒒𝒖𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑶 𝑨𝒍 𝑺𝒕𝒂𝒇𝒇.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu)$/i;
handler.register = true
export default handler;