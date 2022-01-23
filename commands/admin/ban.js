const Discoed = require("discord.js");
//const ms = require('ms')
module.exports = {
  name: 'ban',
  author: 'tdunguwu', 
  aliases: ["ban"], 
  category: 'admin',
  description: 'ban ban and ban', 
 run: async (client, message, args) => { 
   const user = message.mentions.members.first();
const reason = args.slice(1).join(' ');
if(!reason) return message.reply("chưa nhập lý do ;-;")
   if (user) {
            await user.ban({
                reason: reason,
            }).then(() => {
                message.channel.send('đã ban')
            })

        } else {
            message.channel.send('không thể tìm thấy user')
        }
        }
 }