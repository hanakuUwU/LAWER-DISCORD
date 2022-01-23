const Discord = require("discord.js");
module.exports = {
 name: "run",
  author: "tdunguwu",
  category: "run",
  description: "just run ;-;",
  async run(client, message, args) {
  	try {
  		eval("(async () => {"+args.join(" ")+"})();");
  		message.channel.send("Done");
  	}
  	catch (e) {
  		message.channel.send(`Đã có lỗi xảy ra: ${e.message}`);
  	}
  }
};