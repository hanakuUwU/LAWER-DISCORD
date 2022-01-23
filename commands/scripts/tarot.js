const Color = "RANDOM";
const Discord = require('discord.js');
const axios = require("axios")
module.exports = {
  name: "tarot",
  author: "tdunguwu",
  aliases: ["tarot"],
  category: "Fun",
  description: "just tarot ;-;",
  usage: "",
  run: async (client, message, args) => {
    const res = await axios.get('https://le31.glitch.me/other/tarot')
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`**${res.data.data.name}**`)
    .setDescription(`**suite: ${res.data.data.suite}**\n**description: ${res.data.data.description}**\n**interpretation: ${res.data.data.interpretation}**`)
    .setImage(`${res.data.data.image}`)
    .setFooter(`Được yêu cầu bởi ${message.author.username}`)
    
    message.channel.send(embed)
    
  }
}