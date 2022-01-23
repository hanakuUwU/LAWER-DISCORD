const axios = require("axios")
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "moon",
  author: "tdunguwu",
  aliases: ["moon"],
  category: "Image",
  description: "moon neee",
  usage: "moon",
  run: async (client, message, args) => {
    let text = args.join(" ")
    const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
    const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
    const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3];
    const text5 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[4];
    
   let tt = `https://database.bangprocode.repl.co/edit/moon?apikey=DVB&name=${text1}&ngay=${text2}&thang=${text3}&nam=${text4}&namsinh=${text5}`
   
   const attachment = new Discord.MessageAttachment(tt, 'moon.jpg');
           const embed = new Discord.MessageEmbed()
            .setTitle('etou')
            .attachFiles(attachment)
            message.channel.send(embed)
        }
  }
