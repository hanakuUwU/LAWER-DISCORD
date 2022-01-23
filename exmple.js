const Discord = require('discord.js');
// ở đây các bạn liệt kê các package cần thiết cho mình nha 
module.exports = {
  name: "", // ở đây các bạn liệt kê cho mình tên scripts nha 
  aliases: ["1234567890"], // ở đây các bạn liệt kê key word cho mình có thể là ["abc", "zyv"]
  category: "",//ở phần này các bạn liệt kê mà scripts này sẽ nằm nha 
  description: "",// khúc này thì bạn điền cc gì cũng đc hehe
  usage: "",//ở đây bạn liệt kê cách dùng hoặc không ghi cũng đc nha
  run: async (client, message, args) => {
//bạn muốn làm gì là việc của bạn ;-;
//const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
//dòng trên để lấy ID của người dùng hoặc người được tag
//const Embed = new Discord.MessageEmbed() <= phần này để làm mọi thứ nha 
//.setColor("RANDOM") đây là phần màu và các bạn có thể để màu tùy thích hoặc để random giống mình cũng được
//.setImage(...) ở đây là phần hiển thị ảnh nó có thể là gì thì tùy các bạn
//.setTitle("tdung dep trai vc") ở đây là phần các bạn ghi title hình như không quá 250 từ
//.setDescription("etou") nó cũng giống ở trên nma đây sẽ chứa được nhiều từ hơn :/
//hoặc bạn có thể dùng
//const attachment = new Discord.MessageAttachment('tt.mp4');
//đại loại thì nó cũng như trên nhưng mà nó sẽ hiển thị thêm file mà bạn yêu cầu ;-;
//nếu bạn dùng new Discord.MessageAttachment thì bạn hãy thêm 1 dòng là  
//.attachFiles(attachment)
  }
}