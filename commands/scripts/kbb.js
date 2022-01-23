const Color = "RANDOM";
const Discord = require("discord.js");
module.exports = {
  name: "kbb",
  author: "tdunguwu",
  aliases: ["kbb"],
  category: "game",
  description: "just kbb ;-;",
  usage: "",
  run: async (client, message, args) => {
    let items = {
		"kéo": 0,
		"búa": 1,
		"bao": 2
	}
  let player = items[args[0]];
  if (!Object.keys(items).includes(args[0])) { return message.channel.send(`etou bạn chọn ngu vải ở đây là kbb nên chỉ được chọn ${Object.keys(items)}`)};
  
	let random = Math.floor(Math.random() * 3);
	let bot = Object.values(items)[random];
  if (player == bot) {return message.channel.send(`Hòa rồi XD\nBạn chọn: ${args[0]}\nBot chọn: ${Object.keys(items)[random]}`)}
  else if (player - bot == -2 || player - bot == 1)
  {return message.channel.send(`Thắng rồi XD\nBạn chọn: ${args[0]}\nBot chọn: ${Object.keys(items)[random]}`)}
  else {
    return message.channel.send(`Thua mất tiêu rồi\nBạn chọn: ${args[0]}\nBot chọn: ${Object.keys(items)[random]} `)
    }
  }
}