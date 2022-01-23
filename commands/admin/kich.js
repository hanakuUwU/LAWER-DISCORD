const Discoed = require("discord.js");
//const ms = require('ms')
module.exports = {
  name: 'kich',
  author: 'tdunguwu', 
  aliases: ["kich"], 
  category: 'admin',
  description: 'kich kich and kich', 
 run: async (client, message, args) => { 
   const user = message.mentions.members.first();
   if (user) {
            user.kick().then(() => {
                message.channel.send('đã kích ;-;!')
            })
        } else {
            message.channel.send('không thể tìm thấy user')
        }
 }}