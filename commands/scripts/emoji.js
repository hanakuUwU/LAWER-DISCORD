const { parse } = require('twemoji-parser');
const {  Util, MessageEmbed  } = require('discord.js');
module.exports = {
  name: "emoji",
  author: "tdunguwu",
  category: "info",
  description: "coi emoji ;-;",
  async run(client, message, args) {
    const emoji = args[0]
       if(!emoji) return message.channel.send("nhập emoji vào đi bạn ơi ;-;");
       let custom = Util.parseEmoji(emoji);
       const embed = new MessageEmbed()
       .setTitle(`XD phiên bản phóng to của ẹm nè ${emoji}`)
       .setColor("RANDOM");
       if (custom.id) {
         let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
         embed.setImage(link)
         .setFooter(`EMOJI ID: ${custom.id}`)
         return message.channel.send(embed)
       } else {
         let parsed = parse(emoji, { assetType: 'png'});
         if(!parsed[0]) return messsage.channel.send('Emoji 0 hop le ;-;');
         embed.setImage(parsed[0].url);
         return message.channel.send(embed);
       }
  }
  };