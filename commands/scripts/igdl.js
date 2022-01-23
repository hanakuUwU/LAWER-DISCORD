const Color = "RANDOM";
const Discord = require("discord.js");
const moment = require("moment");
const axios = require("axios")

module.exports = {
  name: "igdl",
  author: "tdunguwu",
  aliases: ["igdl"],
  category: "video",
  description: "just igdl ;-;",
  usage: "",
  run: async (client, message, args) => {

  let text = args.join(" ")
    const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    
  const res = await axios.get(`https://api.chipa.xyz/api/download/ig?link=${link}&apikey=JEXAARU31AJUMMBXU4IXRJ8C`);
    //const dl = res.data.result.downloadUrl;
    let tt = `${res.data.result.data[0].data}`
        if (!link) 
        return message.channel.send(`thiếu dữ liệu để thực thi`)
        else {
           const attachment = new Discord.MessageAttachment(tt, 'igdl.mp4');
           const embed = new Discord.MessageEmbed()
            .setTitle('etou')
            .attachFiles(attachment)
            message.channel.send(embed)
        }
  }
}
    