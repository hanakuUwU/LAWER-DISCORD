const authenticator = require('authenticator');
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "2fa",
  author: "tdunguwu",
  description: "2fa thoi",
  aliases: ["2fa"],
  category: "2fa",
  run: async (client, message, args) => {
    var formattedToken = authenticator.generateToken(args.join(""));
    const e = new MessageEmbed()
      .setTitle(formattedToken);
    message.channel.send(e);
  },
};