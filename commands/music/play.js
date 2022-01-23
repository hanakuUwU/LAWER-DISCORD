const { checkSameRoom} = require('../../until')
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search')
module.exports = {
  name: "play",
  author: "tdunguwu",
  description: "play thoi",
  aliases: ["play","p"],
  category: "music",
  usage: " Play",
  run: async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    if (checkSameRoom(message)) return;
    if (!args.length)return message.channel.send('')
    const connection = await voiceChannel.join();
    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);
       return (videoResult.videos.length > 1) ? videoResult.videos[0] : null
    }
    const video = await videoFinder(args.join(' '));
    if(video){
      const stream = ytdl(video.url, {filter: 'audioonly'});
      connection.play(stream, {seek: 0, volume: 1})
      .on('finish', () => {
        voiceChannel.leave();
      })
      await message.reply(` đang chơi ***${video.title}***`)
    } else {
   message.channel.send('không tìm thấy kết quả phù hợp')
    }
    }
  };