const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347044903733";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_45_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDA5Ty9qdVlNc0xSQWR0d1pMR3NrR1VYZGNOU0hPRjlkUFFVeFU2N0tudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM0MjkzOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMDU3QjA4MUJDREMzQjA3MDI4RkUxNzU0ODE4MUY3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxNjU1MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVhrNFVETUNSTmFFWnBvY1djRzFKZ1wiLFxuICBcInBob25lSWRcIjogXCJlMGU2NDcyMC0zZGE4LTRiMGEtODdiZS03OWYzMjhmYjRhYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA2NyxcbiAgICAgIDIxMyxcbiAgICAgIDIwMixcbiAgICAgIDIxOSxcbiAgICAgIDIxLFxuICAgICAgMTYyLFxuICAgICAgMTIsXG4gICAgICAyMjAsXG4gICAgICA3MSxcbiAgICAgIDIzMSxcbiAgICAgIDUzLFxuICAgICAgMTcyLFxuICAgICAgNDEsXG4gICAgICA2NixcbiAgICAgIDMsXG4gICAgICA1OCxcbiAgICAgIDIwNixcbiAgICAgIDM3LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTUwLFxuICAgICAgMTI1LFxuICAgICAgMTEwLFxuICAgICAgNjQsXG4gICAgICAxNDYsXG4gICAgICAyMjcsXG4gICAgICA0NyxcbiAgICAgIDI0OSxcbiAgICAgIDE0MCxcbiAgICAgIDE5OSxcbiAgICAgIDExMCxcbiAgICAgIDIxOSxcbiAgICAgIDEwLFxuICAgICAgMTkwLFxuICAgICAgMjAwLFxuICAgICAgNTMsXG4gICAgICAxMjEsXG4gICAgICAxNjIsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTUJKV05BSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDI5Mzk4ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgxNzQxNDIxNDA2Njg6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOZWxzb25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYWgxRG9RaDhtZXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlowQ3h6Z0VsWExWZXAyQlZzNDFCM0xvckVMbElGRXNkTzB4K3BmYXBmRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVTc0c1YvSFFlYUw3Qi9tTENLMVR6ZzZlWW5MRUlUK0xOZ1VwKzMyUjdJRWQ3NytCRDZZQ2czZjRvK0tnUTFJMlR5cHJzUmJqMVZpUXVEMUFkcWJ3Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2g4UWMwNGlwdU1ja1pDT0p2TjAwWlgzUUVBV2YyTDN6Rkgvd0NvcE9vQkVHSW4zNkI1MU5QN2ltbG05dnQ2Q0RGc09NTGQ1aUZTNys1T3JDbkp5akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNDI5Mzk4ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY1NTE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzZrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2NDkyeE5oZTFoRGxCRWtZRWdTeXV1aFZmbFhIdnhEVEQwUWpvRWxUS2NZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAxNTM5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2MjQ3OTYyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
