const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "dislike",
  author: "tdunguwu",
  aliases: ["dislike"],
  category: "Image",
  description: "just dislike",
  usage: "like <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("etou")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/dislike?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};