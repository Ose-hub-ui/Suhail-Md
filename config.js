const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =""
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/Ose-hub-ui/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ẞÄHDßØÎSẞM²²¹-ᴍᴅ" 


global.devs = "2349134293988" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347044903733";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134293988";




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
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_58_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZnbjZ3dHNHdHNQMFQ5bE15YUhFWGJtZDV2dXZhblBVT0F0QmZlaUZHUWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzNDI5Mzk4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjU0RUU1QjVFMEQ1OURDOEYwODcyM0M1QTdENENGRTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTQxMDc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklLTjhZYTFyU2R5cEtSQmltTHI3S1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ2YTU1Y2EtMmUyYi00MDE3LWEyOWYtYzgzMjYxYTUwN2Q1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICAxNjMsXG4gICAgICA3MixcbiAgICAgIDkwLFxuICAgICAgNTYsXG4gICAgICA1NSxcbiAgICAgIDE3OCxcbiAgICAgIDQ3LFxuICAgICAgMTA5LFxuICAgICAgMjU0LFxuICAgICAgNTQsXG4gICAgICAxODMsXG4gICAgICAxODAsXG4gICAgICAxMDUsXG4gICAgICA2MCxcbiAgICAgIDExMyxcbiAgICAgIDIzMCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgOTgsXG4gICAgICAxMjksXG4gICAgICA0MyxcbiAgICAgIDEzNixcbiAgICAgIDEyMixcbiAgICAgIDc4LFxuICAgICAgODAsXG4gICAgICAxNSxcbiAgICAgIDkxLFxuICAgICAgMTgyLFxuICAgICAgMjEyLFxuICAgICAgNCxcbiAgICAgIDIwLFxuICAgICAgMjA2LFxuICAgICAgNzksXG4gICAgICA5MCxcbiAgICAgIDIxNSxcbiAgICAgIDEwOSxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3U05WWlZSVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDI5Mzk4ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgxNzQxNDIxNDA2Njg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOZWxzb25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT2gxRG9RallxZHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlowQ3h6Z0VsWExWZXAyQlZzNDFCM0xvckVMbElGRXNkTzB4K3BmYXBmRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVBpaGlaNFpZaHFrck1qY3ZFLzN3bmVBYWx3R3o1ZHM4OFpoSTU2UU1XL1dWZ2ZWM1FTemZiVHBpZWUrTkFYOE5XZUdzMHY2Y2t6bmg1R3R1WUtZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNG5xcFMyMit4YlFnOVVETXRpcm1zbit0dGduK0JuK2dNeW5GTW0xQjJJRmFFVzN0Uy9SYW5XRFNyMk90SjdLWDBUNnR1SG9VME42S1dTZndpVE10Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNDI5Mzk4ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTQxMDczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzZqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNmouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3S3BVM2ozK201aHJuajRlOGxtNzlab0NoS21LYW9VakkvYVNlampuVGtVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAxNTM5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTQxMDc1ODI5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ẞÄHDßØÎSẞM²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ẞÄHDßØÎSẞM",
  packname: process.env.PACK_NAME || "ẞÄHDßØÎSẞM",
  botname : process.env.BOT_NAME  || "ẞÄHDßØÎSẞM",
  ownername:process.env.OWNER_NAME|| "Nelson 🫠",


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
