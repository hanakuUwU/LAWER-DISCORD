const axios = require("axios")
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "champ",
  author: "tdunguwu",
  aliases: ["champ", "cmp"],
  category: "Champ",
  description: "champion neee",
  usage: "champion",
  run: async (client, message, args) => {
   
    if(args[0] == "list"){
    axios.get(`https://www.phamvandienofficial.xyz/lol/list`).then(res => {
      var count = res.data.count ;
      var data = res.data.champ_names
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 15;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
         msg += `[ ${i+1} ] - ${data[i]}\n`;
      }
      msg += `»Trang (${page}/${numPage})\n»Tổng Tướng ${count}/n» Dùng !champ list <số trang> `;
      const embed1 = new Discord.MessageEmbed()
      .setTitle("DANH SÁCH NHÂN VẬT LOL")
      .setColor("RANDOM")
      .setDescription(msg)
      .setFooter(`Được yêu cầu bởi ${message.author.username}`)
      return message.channel.send(embed1);
    });
  }
  else {
    const res = await axios.get(`https://api-ttk.herokuapp.com/lmht?name=${args[0]}`);
    if (!args[0]) {return message.channel.send("chưa nhập tên tướng")};
var name = res.data.name;
var hp = res.data.hp;
var hpg = res.data.hp_gain_per_lvl;
var hpr = res.data.hp_regen;
var hppr = res.data.hp_regen_gain_per_lvl;
var mana = res.data.mana;
var mng = res.data.mana_gain_per_lvl;
var mnr = res.data.mana_regen;
var mnrl = res.data.mana_regen_gain_per_lvl;
var dame = res.data.attack_damage;
var adg = res.data.attack_damage_gain_per_lvl;
var atsp = res.data.attack_speed;
var atspa = res.data.attack_speed_gain_per_lvl;
var am = res.data.armor;
var amg = res.data.armor_gain_per_lvl;
var ma = res.data.magic_resist;
var mar = res.data.magic_resist_gain_per_lvl;
var mov = res.data.movement_speed;
var range = res.data.range;
var abl = res.data.ability_power;
var abi = res.data.ability_haste;
var crit = res.data.crit;
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(`===== ${args[0]} =====
\nMáu: ${hp} \n
Máu tăng mỗi LV: ${hpg}  \n
Tốc độ hồi máu: ${hpr} \n
Tốc độ hồi máu tăng mỗi  LV: ${hppr} \n
Mana: ${mana} \n
Mana tăng mỗi LV: ${mng} \n
Tốc độ hồi Mana: ${mnr}  \n
Tốc độ hồi Mana mỗi tăng mỗi LV: ${mnrl} \n
Sát thương: ${dame} \n
Sát thương tăng mỗi LV: ${adg} \n
Tốc độ đánh: ${atsp} \n
Tốc độ đánh tăng mỗi LV: ${atspa} \n
Giáp: ${am} \n
Giáp tăng mỗi LV: ${amg} \n
Giáp phép thuật: ${ma} \n
Giáp phép thuật tăng mỗi LV: ${mar} \n
Tốc chạy: ${mov} \n
Tầm đánh: ${range} \n
Ability Power: ${abl} \n
Ability Haste ${abi} \n
Chí mạng: ${crit}`)
    .setTimestamp()
    .setFooter(`Được yêu cầu bởi ${message.author.username}`);
    return message.channel.send(Embed);
    
  }
  }
};
