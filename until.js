const checkSameRoom = (message) => {
  if(!message.member.voice.channel) return message.reply("bạn cần phải vào room voice để thực hiện tác vụ này ;-;");
  if (!message.guild.me.voice.channelID || message.guild.voice.channelID == message.member.voice.channelID) return;
  return message.reply("Bạn phải chung phòng với bot để có thể sử dụng lệnh này")
 }
 module.exports = {
   checkSameRoom,
 }