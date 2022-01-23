const axios = require('axios');
module.exports = {
  name: "chat",
  author: "tdunguwu",
  category: "game",
  description: "Just Chat",
  async run(client, message, args) {
    try {
      const res = await axios.get(`
http://api.brainshop.ai/get?bid=162982&key=FUGyPz3LAN6aYVds&uid=[uid]&msg=${encodeURIComponent(args.join(' '))}`);
message.channel.send(res.data.cnt)
    }
    catch(e){
      message.channel.send('Etou thằng tdunguwu code ngu quá nên có lỗi hãy thử lại sau ;-;')
    }
  }
}