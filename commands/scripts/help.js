const fs = require("fs-extra");
 const { MessageEmbed } = require("discord.js");
module.exports = {
 name: "help",
  author: "tdunguwu",
  category: "help",
  description: "just help ;-;",
  run: async (client, message, args) => {
    
 if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("không tìm thấy lệnh" + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("❯ Description", command.description || "không đề cập :(")
        .addField("❯ Usage", "`" + command.usage + "`" || "không đề cập")
        .addField("❯ Author", command.author || "không đề cập :(")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#868686")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription('**LAWER BETA**')
  
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Không tìm thất";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }
     emx.addField('Lawer discord đang ở bản thử nghiệm thôi nên là nhiều lúc lỗi lòi nên mọi người thông cảm nha ToT')
      return message.channel.send({
  embed: emx,
})

    }
  }
};