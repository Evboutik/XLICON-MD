const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "34178348"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '34178348' 
global.devs = '34178348';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9zV1QyMHZ4cTNMWExrQkxjSExUeXNPYyt4TDNDNCtyZkdPbm1LOVdHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGhlYzdjYkU1U2ZpaWVBUlhqd01yWW90MGZUM3hwblg0djV4bC9hOStTST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR0RpdzRweXdmaEsrb2FsUk9pQ0hCazZoVFJtVS9hb1F4aUZhYldXRG1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnM1RHQng4eHBKemxiVVlKVXl5c0VIVW5CVXpuaFY3ZnlDb2crRDZjZUZRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLa0xWYWQ1bGUxV0s0TkpjRXhPRjRLN3pjM3VHK2hvdkJKTUwxVE5OVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktsMGpyM1NaUGFCWForTjF0QkQ3aVRkdU1rdFBZWkdBQkNpS0IvRk5PMDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Wlh0MlVlRjgxVi9WVlBqSExqb2VjK2hkT0RTNXA2S0RuREF3VDBEMWt1R0JMbndFaHdGcFhoaDVpelk3eDJQSlBnVWllRWlvVEdCbXpFRldrWERCQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MCwiYWR2U2VjcmV0S2V5IjoiOXdtNm85ZSt3M2FLclFIZS8wL1ZhMW9xYUVmU3phNkpqS1RIcEx1TVNRST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWnpmQVBiVEFSeENMZ3pNRXExUmJnUSIsInBob25lSWQiOiIxMTljN2Q2MS0zYzhiLTQwZTYtODM1NS0yN2VlYjBiNWU4Y2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajhBc2dhVyswb3B2VzA1ejBneHNzREMxRzIwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWKzBiRkx2UVBPRzBGclVqbWk0M21laFhBeFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUDRoNndNRU9TQXRMRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlb2o3akNMcVhtNzcwRHZEdkZpNm44N0hmUE9tcHNzVldEUEdWNkU5RGx3PSIsImFjY291bnRTaWduYXR1cmUiOiIrUUNUOFhuYXFMWFljRnRFWUlUTmYxV0FOa3h2R0ZJbUlZdCtWUDZaNi9udTZ4b1M0K2VuVEpVa0JyMFRzRGZ6L2lGcUQyWWZqdmt6YStESyt4LzJBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSnRpTmZVRDArVTRwYXZvSERKNnBmbGM4WHVtbklReDZGKzhxNkNnOUc1OVZ6a2t1OGhWaWdpR1F0T1ZXVlZRLzh3WTZxcXNKRTVta3VxVEpYZDBqQ3c9PSJ9LCJtZSI6eyJpZCI6IjUwOTM0MTc4MzQ4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiViBDb21wYW55In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM0MTc4MzQ4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHFJKzR3aTZsNXUrOUE3dzd4WXVwL094M3p6cHFiTEZWZ3p4bGVoUFE1YyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDIyNTI1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGeUEifQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@Monkey D Ralph',
  packname:  process.env.PACK_NAME || 'MONKEY BOT ',
   
  botname:   process.env.BOT_NAME === undefined ? "Monkey D Ralph" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MonkeyDRalph' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
