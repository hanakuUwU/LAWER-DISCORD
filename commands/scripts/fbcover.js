const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "fbcover",
  author: "tdunguwu",
  aliases: ["fbcover", "fbcv"],
  category: "Image",
  description: "lmeo",
  usage: "mus",
  run: async (client, message, args) => {
    
    let text = args.join(" ")
    const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
    const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
    const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3];

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`ảnh của bạn đây\n id: ${text1}\nTên Chính: ${text2}\nTên Phụ: ${text3}`)
    .setImage(encodeURI(`https://www.phamvandienofficial.xyz/fbcover/v2?name=${text2}&id=${text1}&subname=${text3}&color=${text4}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
