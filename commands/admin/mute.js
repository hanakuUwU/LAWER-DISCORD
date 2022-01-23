const { MessageEmbed, Message, Client } = require("discord.js");
const ms = require('ms')
module.exports = {
  name: 'mute',
  author: 'tdunguwu', 
  aliases: ["mute"], 
  category: 'admin',
  description: 'mute mute and mute', 
 run: async (client, message, args) => {
 const member = message.mentions.members.first();
 let time = args[1];
 const reason = args.slice(2).join(' ');
  const role = message.guild.roles.cache.find(role => role.name === 'Muted')
 if(!member) return message.reply('bạn chưa tag người cần ban');
 if(!time) return message.reply('bạn cần phải nhập thời gian để ban');
 if(!reason) return message.reply('bạn cần phải đưa ra một lý do ');
 if (member.id === message.author.id) return message.reply("không thể tự mute bản thân XD")
 if (member.id === client.id) return message.reply("bạn không thể mute tôi đâu XD")

if(!role) {
try {
  message.channel.send("bạn cần phải tạo một role cho bot ;-;")
  let muterole = await message.guild.roles.create ({
    data: {
      name: 'Muted',
      permissions: [],
    }
  });
  message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
    await channel.createOverwrite(muterole, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false,
    })
  
  });
  message.channel.send(
    new MessageEmbed()
    .setDescription("đã tạo mute role cho bot thành công")
    .setColor("white")
  )
  }
catch (e) {
  console.log(e)
}
};
 const role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
 if (member.roles.cache.has(role2)) return message.reply("đã bị mute từ trước");
  if (member.roles.highest.position >= message.member.roles.highest.position) return("không thể mute người này")
  await member.roles.add(role2)
  message.channel.send(`${member.user.username} da bi mute trong khoang thoi gian ${ms(ms(time))} ly do ${reason}`)
  setTimeout(() => {
    member.roles.remove(role2)
  }, ms(time))
 }, 
}