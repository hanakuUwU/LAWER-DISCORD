const Color = "RANDOM";
const Discord = require("discord.js");
const moment = require("moment");
const axios = require("axios")

module.exports = {
  name: "4k",
  author: "tdunguwu",
  aliases: ["4k"],
  category: "img",
  description: "just 4k img ;-;",
  usage: "",
  run: async (client, message, args) => {
    try {
   //if (!args[0]) return message.channel.send(`tên bài nhạc đâu bạn tôi ?`)
    
  const res = await axios.get(`https://www.api-adreno.tk/wallpaper`);
    const lyrics = res.data.url;
            const Embed = new Discord.MessageEmbed()
            .setImage(`${lyrics}`)
            .setColor(`RANDOM`)
            

            message.channel.send(Embed)

    }

         catch (error) {
            console.log(`lỗi mất tiu rồi`, error);
            return message.channel.send(`lỗi mất tiu rồi`)
        }
    }
};