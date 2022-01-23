const discord = require("discord.js");
module.exports = {
  name: "remind",
  author: "tdunguwu",
  category: "info",
  description: "remind ;-;",
   async run(client, message, args) {
     const time = args[0]
	const text = args.join(" ").replace(time, "")
  if (isNaN(time)) return message.channel.send('thời gian bạn nhập không phải là một con số!')
  const display = time > 59 ? `${time / 60} phút` : `${time} giây`
  return message.channel.send(`tôi sẽ nhắc bạn sau: ${display}`)
  await new Promise( resolve => setTimeout(resolve, time * 1000))
  let embed = new discord.MessageEmbed()
    .setDescription(`hey đã qua ${time} và bạn nhớ mình cần làm gì chứ nếu khôgn tôi sẽ nhạc lại cho bạn ^^\n=> ${text}`)
    .setColor("RANDOM")
    .setFooter(`Được yêu cầu bởi ${message.author.username}`)

    message.channel.send(embed)
   }
};