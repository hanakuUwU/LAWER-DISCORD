const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'leave', 
    author: "tdunguwu",
    aliases: ["leave","l"],
    category: 'Music',
    description: 'Just List', 
    usage: " Play",
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`Bạn cần phải ở trong vc để thực hiện lệnh này!`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
            message.react('✔')
              
          }
}