const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "florentino",
  author: "tdunguwu",
  description: "flo thoi",
  aliases: ["flo"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("");
    const e = new MessageEmbed()
      .setTitle("qá gê gớm và đây là florentino")
      .setImage(
        `https://apitaoa-1.chinhle4447.repl.co/lq/florentino?text=${text}`
      );
    message.channel.send(e);
  },
};