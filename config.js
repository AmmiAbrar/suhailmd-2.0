const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038683474";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_55_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImF1bXc3V3pITHY1MXRLcjNLejdJSXR1UkdNNFFwWUhaRVZmWHlvQmtKakU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVKR0huaDJrU0tTTklfRDhlb21UUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThhZWJmZTQtYzAyNC00ZjI1LTg5YzYtYjZkMzk3ODQzNjA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgNjYsXG4gICAgICA3MyxcbiAgICAgIDcsXG4gICAgICAxMDQsXG4gICAgICA3MixcbiAgICAgIDU2LFxuICAgICAgMTUxLFxuICAgICAgMTk2LFxuICAgICAgNTksXG4gICAgICAxMDIsXG4gICAgICA2NixcbiAgICAgIDI1MixcbiAgICAgIDIxNCxcbiAgICAgIDE2LFxuICAgICAgMTE5LFxuICAgICAgMTEzLFxuICAgICAgMjksXG4gICAgICAxOTgsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA2NixcbiAgICAgIDIyNyxcbiAgICAgIDIwNixcbiAgICAgIDE2MSxcbiAgICAgIDYsXG4gICAgICA1MyxcbiAgICAgIDEwMSxcbiAgICAgIDIxNixcbiAgICAgIDE4NCxcbiAgICAgIDE1NSxcbiAgICAgIDQ3LFxuICAgICAgNDcsXG4gICAgICAyMzUsXG4gICAgICAyMDMsXG4gICAgICAzOCxcbiAgICAgIDI0OSxcbiAgICAgIDk1LFxuICAgICAgMTIyLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhTRUtNQUJBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM4NjgzNDc0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODU2MjgyNjg5OTY3ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPbm5BZ1FxY2lUdWdZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicDVESU1sY3ZtL3dVRDlqODlJSnZvTUNBTkhmQWtKQVovVDVzditLaGVVQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJES0ZBTE94QTFJRHZXOEhxR1JjeElLVCtnNElOTWRwbmk4bVE1cDliK3B6ZWs4dHVqRmtRWE0vaHVWODFBeGNsa2JDRG8vU0xLU3dMakdDT0JGWnNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwZjIxbEdEWUR3SmdqUUM0ZU03Ti9MM3luUGJQcDU0QVFmb1BYNjdjSHYxclU0bVp5RXZaOE8zcHg2Q3lDSlhlRG5CNVE5NDZRU3BlckJGU21HbXRBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM4NjgzNDc0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NjgxMDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
