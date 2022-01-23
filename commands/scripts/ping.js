const discord = require("discord.js");
module.exports = {
  name: "ping",
  author: "tdunguwu",
  category: "info",
  description: "coi ping ;-;",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Được yêu cầu bởi ${message.author.username}`)
    
    message.channel.send(embed)
  }
}