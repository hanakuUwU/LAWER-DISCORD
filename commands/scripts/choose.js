const Color = "RANDOM";
const Discord = require("discord.js");
module.exports = {
  name: "choose",
  author: "tdunguwu",
  category: "help",
  description: "Just Choose ;-;",
  async run(client, message, args) {
var input = args.join(" ").trim();
if(!input) return message.channel.send('Thiếu thông tin để em chọn kìa XD');
var array = input.split(" | ");
return message.channel.send(`Hmmmm, em sẽ chọn giúp cho là: ${array[Math.floor(Math.random() * array.length)]}.`);
  }
}