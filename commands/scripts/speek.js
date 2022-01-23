const { getAudioUrl } = require('google-tts-api');
module.exports = {
  name: "speek",
  author: "tdunguwu",
  description: "speek thoi",
  aliases: ["speek", "spk", "s"],
  category: "Image",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("bạn chưa nhập gì cả ;-;")
    const string = args.join(' ');
    if (string.length > 199) { return message.channel.send(' bạn nhập một đoạn văn bản quá dài vui lòng nhập dưới 199 ký tự') }
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) { return message.reply("ban phai vao room voice de su dung lenh nay") };
    const audioURL = await getAudioUrl(string, {
      lang: 'vi',
      slow: false,
      host: 'https://translate.google.com',
      timeout: 1000,
    });
    try {
      voiceChannel.join().then(connection => {
        const dispatchre = connection.play(audioURL);
        dispatchre.on('finish', () => {
          voiceChannel.leave();
        });
      });
    }
    catch (e) {
      message.channel.send("tdung no ngu nen code loi roi vui long thu lai ;-;");
      console.log(e);
    }
  },
};