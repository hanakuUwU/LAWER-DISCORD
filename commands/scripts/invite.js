const discord = require("discord.js");

module.exports = {
  name: "invite",
  author: "tdunguwu",
  category: "info",
  description: "invite LAWER DISCORD BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`ĐÂY LÀ LINK MỜI BOT!`)
    .setDescription(`<:link:845315257430048788>  [NHẤN VÀO ĐÂY](https://discord.com/api/oauth2/authorize?client_id=932614457941696522&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`made by tdunguwu`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}