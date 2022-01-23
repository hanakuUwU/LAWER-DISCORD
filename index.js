const axios = require ('axios');
const chalk = require("chalk");
const Discord = require('discord.js');
const { spawn } = require("child_process");
const { prefix } = require("./config.json");
const semver = require("semver");
const client = new Discord.Client({
  partials: ["MESSAGE","CHANNEL","REACTION"],

    intents: ["GUILDS","GUILD_MEMBERS","GUILD_BANS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING",],
});
const config = require("./config.json");
const http = require("http");
const { readdirSync } = require('fs');
const dashboard = http.createServer(function (_req, res) {
res.writeHead(200, "OK", { "Content-Type": "text/plain" });
res.write("LAWER DISCORD HAS COMMING SOON");
res.end();
});
dashboard.listen(process.env.port || 0);
console.log(chalk.yellowBright("[ LAWER ]","Đã mở server website"));
global.bot = { 
  config,
  database: {}
  };
  global.database = {
  channels: []
};
client.on("ready", () => {
	console.log(chalk.yellowBright(`Đã đăng nhập ${client.user.tag}`));
  console.log(chalk.yellowBright("LAWER BOT DISCORD")); 
  console.log(chalk.greenBright(`VERSION: ${config.ver}`)); 
  console.log(chalk.magentaBright(`PREFIX CỦA BẠN LÀ: ${config.PREFIX}`));
  client.user.setPresence({
		activity: {
			name: "LAWERBOT",
			type: "PLAYING"
		},
		status: "online"
	});
});

//======================================
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
  if(!channel) return;
  channel.send(`chào mừng ${member.user} đến với máy chủ ${member.guild.name},và bạn là thành viên thứ ${member.guild.memberCount}`)
  console.log(`${member.user} đã tham gia sever ${member.guild.name}`);
  //khúc này các bạn cấp quyền SERVER MEMBERS INTENT
//Required for your bot to receive events listed under
//cho nó nha
});
client.events = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = readdirSync("./commands/");
["command","database","event"].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});
client.on("message", async  message => {
  const data = ['em đây','cậu gọi bot có chuyện gì thế ;-;?',"cậu có biết cậu đẹp lắm không","etou nếu không có gì thì tớ đi đây ehehe","đây là tính năng chứ không phải noprefix đâu ;-;","cậu có bíc người làm ra con bot này đẹp trai lắm không :V","thực chất con này không phải bot đâu","thằng chủ vừa ngu vừa lười lại xàm lồn nữa hêh =))))" ]
  const data2 = ["tử tế 0%","tại sao bạn lại nói mình ngu...","mình ngu thì mình nhận không nói gì cả","uh okey","-n respect","...","em có sai với ai đi nữa em có làm cái gì đi nữa nếu có phải trả giá em sẽ sin chắp nhận trả giá"]

switch(message.content.toLowerCase()) {
  
  case "bot":
  message.reply(`${data[Math.floor(Math.random() * data.length)]}`);
  break;
  case "bot ngu":
  case "bot óc":
  message.reply(`${data2[Math.floor(Math.random() * data2.length)]}`)
  
}
})

client.on("message", async  message => {

  if (message.author.bot) return;
  if (!message.guild) return;
 const prefix = config.PREFIX; 
  if (!message.content.startsWith(prefix)) {
    if (message.channel.id == '933173725589819422') //thay id kênh b muốn vào đây
 {
      try {
      const res = await axios.get(`https://www.phamvandienofficial.xyz/sim?type=ask&ask=${encodeURIComponent(message.content)}`);
return message.reply(res.data.answer)
    }
    catch(e){
      message.channel.send('Etou thằng tdunguwu code ngu quá nên có lỗi hãy thử lại sau ;-;')
    }  
    } return;
  } 
  const args = message.content.slice(prefix. length).trim().split(/ +/g);
   const cmd = args.shift().toLowerCase();
    if  (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    if (command) {
      if(command.category == 'music' && !message.member.voice.channel) return message.channel.send("bạn cần phải ở trong phòng âm thanh để sử dụng nhóm lệnh này ;-;")
    command.run(client, message, args, cmd, Discord);
    }
   })
   
  //======================================
   const dataProcessing = require("./handlers/database.js")({ client });
  client.on("message", async message => {
    if (message.author.bot) return;
    
    function makeColor(hex, text) {
      return chalk.hex(hex)(text);
    }
    const { database } = global;
    if (!database.channels.some(item => item.id == message.guild.id)) dataProcessing.channels.createData(message.guild.id);
    if (database.channels.find(item => item.id == message.guild.id).data.prefix) prefix = database.channels.find(item => item.id == message.guild.id).data.prefix;
    
    const channelIDColor = `${makeColor("#0086ec", "ChannelId:")} ${message.guild.id}`;
    const authorName = `${makeColor("#17bd00", message.author.username+"#")}${makeColor("#17bd00", message.author.discriminator)}`;
  });
 
client.login(config.token);
