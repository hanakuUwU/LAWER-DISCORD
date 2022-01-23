const Discord = require('discord.js')
module.exports = {
  name: 'rolereact',
  author: 'tdunguwu', 
  aliases: ["rolereact","rlrt"], 
  category: 'admin',
  description: 'rolereact', 
 run: async (client, message, args) => {
   const channel = '934438965505826846';
   const waifuteam = message.guild.roles.cache.find(role => role.name === 'Waifu TEAM');
   const sexteam = message.guild.roles.cache.find(role => role.name === "sex sex sex");
   const waifuemj = '🍒';
   const sexemj = '👩‍❤️‍👨';
   let embed = new Discord.MessageEmbed()
   .setColor('#e42643')
   .setTitle('lựa chọn role đê bà con =)))')
   .setDescription("chọn role đeeeeeeeeeeeeeeeeee\n\n"
   + `${waifuemj} để về đội waifuteam\m`
   + `${sexemj} để về team sẽ :V`);
   let messageEmbed = await message.channel.send(embed);
   messageEmbed.react(waifuemj);
   messageEmbed.react(sexemj);
   client.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if (reaction.message.channel.id == channel){
      if (reaction.emoji.name === waifuemj) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(waifuteam);
      }
      if (reaction.emoji.name === sexemj) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(sexteam);
      } 
    } else {
      return;
    }
   });
client.on('messageReactionRemove', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if (reaction.message.channel.id == channel){
      if (reaction.emoji.name === waifuemj) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(waifuteam);
      }
      if (reaction.emoji.name === sexemj) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(sexteam);
      } 
    } else {
      return;
    }
   })
 }
 }