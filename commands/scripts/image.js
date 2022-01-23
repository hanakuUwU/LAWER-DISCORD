const axios = require("axios");
const discord = require ('discord.js');//vô nghĩa vải lồn =))
module.exports = {
  name: 'img',
  author: 'tdunguwu', 
  aliases: ["img"], 
  category: 'img',
  description: 'img', 
 run: async (client, message, args) => {
   const keySearch = args.join(" ");
   if(!keySearch) return message.reply('bạn chưa nhập từ khóa tìm kiếm')
   if(keySearch.includes("-") == false) return message.reply("nqu")
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`http://api-ttk.herokuapp.com/social/pinterest?text=${encodeURIComponent(keySearchs)}&apikey=ttk`);
    const data = res.data.result;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++){
      message.channel.send(`${data[i]}`)
    }
 }}
