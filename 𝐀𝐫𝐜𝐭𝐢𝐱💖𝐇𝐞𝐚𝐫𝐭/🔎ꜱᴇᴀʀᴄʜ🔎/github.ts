`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Image_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button`);
const Video_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Video_Button`);
const Text_List = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Text_List`);
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const Oops = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { proto } from "@adiwajshing/baileys";
const got = require(`got`);
const VOID = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/client";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
import * as fs from "fs";
import path from "path";
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
export = {
name: dotScrpt,
async handle(
client: Client,
chat: proto.IWebMessageInfo,
AʀƈȶɨӼ: AʀƈȶɨӼ,
args: string[],
ӄʀʏȶɛӄ
): Promise<void> {
try {
const ʟɴᴀᴍᴇ = AʀƈȶɨӼ.sender;
const ᴅꜰɴᴀᴍᴇ = AʀƈȶɨӼ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
console.log("💡Is Group: " + AʀƈȶɨӼ.isGroup);
await client.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
console.log("💡Is Bot Group Admin: " + AʀƈȶɨӼ.isBotGroupAdmin);
console.log("💡Is Sender Group Admin: " + AʀƈȶɨӼ.isSenderGroupAdmin);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (args.length === 0) {
await client.sendMessage(
AʀƈȶɨӼ.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${chat.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ _How To Use?_ ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()} _user name_`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (!args) {
await client.sendMessage(
AʀƈȶɨӼ.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${chat.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ _How To Use?_ ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()} _user name_`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
let userResponse = await got(`https://api.github.com/users/` + args[0]);
let user = JSON.parse(userResponse.body);
Object.keys(user).forEach(function (key) {
if (user[key] === null || user[key] === ``) {
user[key] = `N/A`;
}
});
let caption =
`*👤 Name :* ` +
user.name +
`\n*💻 Link :* ` +
user.html_url +
`\n*🔧 Type :* ` +
user.type +
`\n*🏢 Company :* ` +
user.company +
`\n*🔭 Blog :* ` +
user.blog +
`\n*📍 Location :* ` +
user.location +
`\n*📝 Bio :* ` +
user.bio +
`\n*❤️ Followers :* ` +
user.followers +
`\n*👁️ Following :* ` +
user.following +
`\n*📊 Public Repos :* ` +
user.public_repos +
`\n*📄 Public Gists :* ` +
user.public_gists +
`\n*🔗 Profile Created :* ` +
user.created_at +
`\n*✏️ Profile Updated :* ` +
user.updated_at;
if (user.public_repos > 0) {
let reposResponse = await got(user.repos_url);
let reposData = JSON.parse(reposResponse.body);
let repos = reposData[0].name;
for (let i = 1; i < reposData.length && i < 5; i++) {
repos += ` | ` + reposData[i].name;
}
caption += `\n*🔍 Some Repos :* ` + repos;
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
return Image_Button.VImg(
client,
chat,
AʀƈȶɨӼ,
`📜𝐆𝐢𝐭𝐇𝐮𝐛

${caption}`,
user.avatar_url
);
} catch (error) {
return Oops.VOp(client, chat, AʀƈȶɨӼ, error);
}
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
