let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `[ 😈 ️] 𝗡𝗢 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘𝗦 𝗔 𝗠𝗜 𝗢𝗪𝗡𝗘𝗥 ` ,m, { contextInfo:{ externalAdReply: {title: '𝓜𝓪𝓭𝓸𝓴𝓪𝓛𝓲𝓽𝓮𝓑𝓸𝓽-𝓜𝓓', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'https://wa.me/5491168758497'}}})
}
handler.customPrefix = /@5491168758497/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
