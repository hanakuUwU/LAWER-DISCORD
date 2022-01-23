
    const Color = "RANDOM";
const Discord = require('discord.js');

//const moment = require("moment");
const axios = require("axios")

module.exports = {
  name: "tiktok",
  author: "tdunguwu",
  aliases: ["tiktok"],
  category: "clip",
  description: "just tiktok ;-;",
  usage: "",
  run: async (client, message, args) => {
    
    let text = args.join(" ")
    const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    const res = await axios.get(`http://api.leanhtruong.net/api-no-key/tiktok?url=${link}`)
        let tt = `${res.data.data_nowatermark[0].url}`
        if (!link) 
        return message.channel.send(`thiếu dữ liệu để thực thi`)
        else {
           const attachment = new Discord.MessageAttachment(tt, 'tt.mp4');
           const embed = new Discord.MessageEmbed()
            .setTitle('etou')
            .attachFiles(attachment)
            message.channel.send(embed)
        }
  }
}


        