//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, vChat) => {
  try {
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _No query provided!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} song-name_`
      );
    }

    var no = 1;
    var search = await BloomBot.ySearch(BloomBot.args.join(" "));
    var Fetched =
      `*🌻Here, ${fpth} for @${
        BloomBot.Tname || BloomBot.pushname
      }:\n\n Result for ` +
      BloomBot.args.join(" ") +
      "\n\n";
    for (var i of search.all) {
      Fetched += `#${no++}> *🏜️Title*: ${i.title}
*🌸Duration*: ${i.timestamp}
*🌐Url*: ${i.url}
\n`;
    }
    return await BloomBot.imagebutton(
      BloomBot,
      vChat,
      `${Fetched}`,
      search.all[0].thumbnail
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, vChat, error);
  }
};
module.exports.aliases = [];
