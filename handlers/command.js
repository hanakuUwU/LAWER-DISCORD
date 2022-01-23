const chalk = require('chalk');
const { readdirSync } = require('fs');

module.exports = (clinet) => {
  readdirSync("./commands").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);
      if (pull.name) {
        clinet.commands.set(pull.name, pull);
        console.log(chalk.blue(file, `✅ => hoạt động \n======================================================`));
        }
        else {
          console.log(chalk.yellow(file, `❎ => thiếu dữ liệu khởi chạy`));
    
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => clinet.aliases.set(alias, pull.name))
    }
      });
      //console.log(table.toString());
      console.log(chalk.cyan('Lawer discord bot has comming soon'));    
};

