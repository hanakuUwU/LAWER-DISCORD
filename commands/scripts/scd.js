const Color = "RANDOM";
const Discord = require("discord.js");
const moment = require("moment");
const axios = require("axios")

module.exports = {
  name: "scd",
  author: "tdunguwu",
  aliases: ["scd"],
  category: "video",
  description: "just scd ;-;",
  usage: "",
  run: async (client, message, args) => {

  let text = args.join(" ")
    const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    
  const res = await axios.get(`https://tyz-api.herokuapp.com/downloader/scdl?link=${link}`);
    
    let scd = `${res.data.link}`
        if (!link) 
        return message.channel.send(`thiếu dữ liệu để thực thi`)
        else {
           const attachment = new Discord.MessageAttachment(scd, 'scd.mp3');
           const embed = new Discord.MessageEmbed()
            .setTitle('etou')
            .setImage(`${res.data.thumb}`)
            .attachFiles(attachment)
            message.channel.send(embed)
        }
  }
}
    