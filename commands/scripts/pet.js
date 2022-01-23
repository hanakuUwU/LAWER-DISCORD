const Color = "RANDOM";
const Discord = require("discord.js");
module.exports = {
  name: "pet",
  author: "tdunguwu",
  aliases: ["pet"],
  category: "Image",
  description: "just pet",
  usage: "pet <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("etou")
    .setImage(encodeURI
    (`https://api.popcat.xyz/pet?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};