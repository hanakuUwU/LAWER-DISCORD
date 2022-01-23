const axios = require("axios")
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "rtc",
  author: "tdunguwu",
  aliases: ["rtc"],
  category: "Image",
  description: "rtc neee",
  usage: "rtc",
  run: async (client, message, args) => {
    let text = args.join(" ")
    const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
    const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
    //const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3];
   let tt = `https://database.bangprocode.repl.co/edit/bannertc2?apikey=DVB&name=${text1}&age=${text2}&text=${text3}`
   const attachment = new Discord.MessageAttachment(tt, 'rtc.jpg');
           const embed = new Discord.MessageEmbed()
            .setTitle('etou')
            .attachFiles(attachment)
            message.channel.send(embed)
        }
  }
