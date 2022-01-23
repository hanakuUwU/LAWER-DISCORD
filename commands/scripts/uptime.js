const discord = require("discord.js");
module.exports = {
  name: "uptime",
  author: "tdunguwu",
  use: "uptime",
  example: "uptime",
  category: "info",
  descriptions: "Xem thời gian bot hoạt động",
  run: async (client, message, args) => {
    const timeStart = Date.now();
    const time = process.uptime();
    const hours = Math.floor(time / (60 * 60)),
  		minutes = Math.floor((time % (60 * 60)) / 60),
  		seconds = Math.floor(time % 60);
   let embed = new discord.MessageEmbed()
    .setDescription(`Bot đã hoạt động được\n${hours}h ${minutes}p ${seconds}s\nĐộ trễ: ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Được yêu cầu bởi ${message.author.username}`)
    
    message.channel.send(embed)
  }
};