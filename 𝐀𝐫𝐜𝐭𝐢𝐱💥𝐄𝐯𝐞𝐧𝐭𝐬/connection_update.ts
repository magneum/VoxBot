`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const UserPrivate = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
const BanPerson = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
const chalkAnimation = require("chalkercli");
import { Boom } from "@hapi/boom";
import Kolor from "chalk";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const connection_update = async (
update: any,
DisconnectReason: any,
startSock: any
): Promise<void> => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
if (
(lastDisconnect.error as Boom)?.output?.statusCode !==
DisconnectReason.loggedOut
) {
startSock();
} else {
console.log("❌𝐄𝐫𝐫𝐨𝐫꧂ Connection closed. You are logged out.");
process.exit(0);
}
} else if (connection === "connecting") {
chalkAnimation.karaoke("💡𝐈𝐧𝐟𝐨꧂  Connecting to WhatsApp...");
console.log(Kolor.yellowBright(""));
} else if (connection === "open") {
chalkAnimation.rainbow("💡𝐈𝐧𝐟𝐨꧂  Connected! Welcome to AʀƈȶɨӼ");
chalkAnimation.rainbow(`AʀƈȶɨӼ {
chatId: '919800919000@s.whatsapp.net',
fromMe: true,
owner: '918436686758@s.whatsapp.net',
mimeType: 'conversation',
type: 'text',
isTextReply: false,
replyMessageId: undefined,
replyParticipant: undefined,
replyMessage: undefined,
body: '.',
isCmd: false,
commandName: null,
isImage: false,
isReplyImage: false,
imageCaption: null,
isGIF: false,
isReplyGIF: false,
isSticker: false,
isReplySticker: false,
isReplyAnimatedSticker: undefined,
isVideo: false,
isReplyVideo: false,
isAudio: false,
isReplyAudio: false,
logGroup: '918436686758@s.whatsapp.net',
isGroup: false,
isPm: true,
sender: '919800919000@s.whatsapp.net',
isSenderTUFs: false
}
`);
} else {
console.log("connection update", update);
}
};
export = {
connection_update: connection_update,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
