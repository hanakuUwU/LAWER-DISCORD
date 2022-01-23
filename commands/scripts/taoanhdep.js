const axios = require("axios")
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "taoanhdep",
  author: "TTK",
  aliases: ["taoanhdep", "tad"],
  category: "Image",
  description: "taoanhdep neee",
  usage: "taoanhdep",
  run: async (client, message, args) => {
    let text = args.join(" ")
    const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
    const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
    const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
    const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3];
    if(args[0] == "list"){
    axios.get(`https://api-ttk.herokuapp.com/taoanhdep/list`).then(res => {
      var count = res.data.length;
      var data = res.data
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 15;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng !taoanhdep list <số trang>`;
      const embed1 = new Discord.MessageEmbed()
      .setTitle("DANH SÁCH NHÂN VẬT TAD")
      .setColor("BLUE")
      .setDescription(msg)
      return message.channel.send(embed1);
    });
  }
  else {
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://api-ttk.herokuapp.com/canvas/taoanhdep?id=${text1}&chu_nen=${text2}&chu_ky=${text3}&color=${text4}`))
    .setTimestamp();
    return message.channel.send(Embed);
    
  }
  }
};
