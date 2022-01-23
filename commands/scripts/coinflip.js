const Color = "RANDOM";
const Discord = require("discord.js");
module.exports = {
  name: "coinflip",
  author: "tdunguwu",
  category: "game",
  description: "coi coinflip ;-;",
  async run(client, message, args) {
const choose = args[0];
const typ = ['ngửa', 'úp'];
  const random = typ[Math.floor(Math.random() * typ.length)];
  if (choose == random) { 
    const Embed1 = new Discord.MessageEmbed()
    .setTitle(`bạn thắng bot búng động xu ra mặt ${random} `)
    .setColor("RANDOM")
     return message.channel.send(Embed1)
     
}
     else {
       const Embed2 = new Discord.MessageEmbed()
    .setTitle(`bạn thua bot búng động xu ra mặt ${random} `)
    .setColor("RANDOM")
     return message.channel.send(Embed2)
     
     }
  }}