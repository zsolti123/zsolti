const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async => {
  console.log(`${bot.user.username} Frissítés befejezve, működőképes vagyok.`)
})

bot.on("message", async message => {
  if(message.author.bot) return;
  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(message.channel.type == "dm") {
    //if(cmd.toLowerCase() == `${prefix}hello`) {
      //return message.channel.send(":x:Szia, Csak szervereken tudok üzenetet fogadni:x: ");
    //}
    return message.channel.send(":x:Csak szervereken tudok üzenetet fogadni:x: ")
  }

  if(message.channel.type != "dm") {
    if(cmd.toLowerCase() == `${prefix}hello`)
    return message.channel.send(":wave: Szia!");
  }

  if(message.channel.type != "dm") {
    if(cmd.toLowerCase() == `${prefix}help`)
    return message.channel.send("A Botot készítette: Zsolti. A parancsok eléréséhez írd be: doparancs")
  }

  if(message.channel.type !="dm") {
    if(cmd.toLowerCase() == `${prefix}parancs`)
    return message.channel.send("Paranacsok: dohello, dohelp, doparancs")
  }
});

// do help Valami ami már nem jó.
bot.login(botconfig.token);
