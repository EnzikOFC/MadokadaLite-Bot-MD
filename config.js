import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5491168758497', '🦎MᴀᴅᴏᴋᴀLɪᴛᴇBᴏᴛ-MD', true],
['5214431467891', '🍓 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩 𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖', true],
  ['14437013473', '🚩GᴏᴋᴜBᴏᴛ-MD', true],
  ['573107133321', '🍓SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD', true],
] //Numeros De Los Creadores 

global.mods = [''] 
global.prems = ['573107133321', '5491168758497']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'EnzitoOFC' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// 𝑰𝒏𝒇𝒐 𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑾𝒎 - 𝑺
global.packname = '𝑴𝒂𝒅𝒐𝒌𝒂𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫' 
global.author = '@𝙴𝙽𝚉𝙸𝚃𝙾' 

//--𝑰𝒏𝒇𝒐 𝑩𝒐𝒕
global.botName = '𝑴𝒂𝒅𝒐𝒌𝒂𝑳𝒊𝒕𝒆𝑩𝒐𝒕-𝑴𝑫🦎'
global.fgig = 'https://www.instagram.com/enzito-19' 
global.fgsc = 'https://github.com/Enzito-Vase/MadokadaLite-Bot-MD' 
global.fgyt = 'https://youtube.com/@Enzito-19'
global.fgpyp = 'no tengo!'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos MADOKA
global.fgcanal = 'https://whatsapp.com/channel/0029VaNVKU9AInPhzHjOz91X' //canal madoka
global.bgp = 'https://chat.whatsapp.com/C5BRS176QMqKFaZlAiqFfo' //colaboracion
global.bgp2 = 'https://chat.whatsapp.com/LVjCCRPBWJKGewIs2Htjq5' //grupo oficial
global.bgp3 = 'https://whatsapp.com/channel/0029VaHdt8oJENxtNExL8z2n' //canal sakura'

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '🍁'
global.dmoji = '💧'
global.done = '🐢'
global.error = '⚠️' 
global.xmoji = '🦋' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
