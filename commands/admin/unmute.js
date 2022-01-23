module.exports = {
  name: 'unmute',
  author: 'tdunguwu', 
  aliases: ["unmute","umt"], 
  category: 'admin',
  description: 'unmute', 
 run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Xin lỗi nhưng bạn không có quyền bật tiếng bất kỳ ai"
      );
    }
     const member = message.mentions.members.first();
     if(!member) return message.reply("chwa tag nguwoif dugn"); 
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')
        target.roles.remove(role.id);
        message.reply('gỡ muted thành công XD')

 }
 }