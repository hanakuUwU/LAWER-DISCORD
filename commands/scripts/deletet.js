const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports= {
  name:"delete",
  author: "tdunguwu",
  description:"delete",
  category:"Image",
  aliases: ["delete"],
run: async (client, message, args) => {
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**CHOWF TIS NHES UWU**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let img = await new DIG.Delete().getImage(avatar);
    let attach = new Discord.MessageAttachment(img, "Delete.png");
    m.delete({ timeout: 5000 });
    message.channel.send(attach);
  },
};