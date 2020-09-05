const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online`);
    client.user.setActivity(`${client.guilds.cache.size} servers`, {type: "LISTENING"});

});

client.on("message", async message  =>{

if(message.author.bot) return;

if(message.channel.type == "dm") return;

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0]

 if(command === `${prefix}help`){
    
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Game Manager")
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setTimestamp()
        .setFooter("Made by Milan♡#0001")
        .addFields(
            {name: "💡Openbaar", value:"`?help`\n`?invite`"},
            {name: "📌Moderatie", value:"`?warn`\n`?ban`\n`?banhelp`\n`?warnhelp`"},
        )
     
     return message.channel.send(botEmbed);
 }

 if(command === `${prefix}banhelp`){
    
    if(message.member.hasPermission('ADMINISTRATOR'))
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Verbanning Help")
        .setDescription(`**Naam:** ROBLOX naam van degene\n**Type:** Permanent/Sban/Tban\n**Reden:** Reden (Max 1 word)\n**Moderator:** Je eigen Discord naam!`)
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setFooter("Made by Milan♡#0001")
     
     return message.channel.send(botEmbed);
 }

 if(command === `${prefix}warnhelp`){
    
    if(message.member.hasPermission('ADMINISTRATOR'))
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Waarschuwing Help")
        .setDescription(`**Naam:** ROBLOX naam van degene\n**Reden:** (Max 2 worden)\n**Warn:** Reden 1/2/3\n**Moderator:** Je eigen Discord naam!`)
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setFooter("Made by Milan♡#0001")
     
     return message.channel.send(botEmbed);
 }

 if(command === `${prefix}ban`){
    
    if(message.member.hasPermission('ADMINISTRATOR'))
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Verbanning")
        .setDescription(`**Naam:** ${messageArray[1]}\n**Type:** ${messageArray[2]}\n**Reden:** ${messageArray[3]}\n**Moderator:** ${messageArray[4]}`)
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setFooter("Made by Milan♡#0001")
     
     return message.channel.send(botEmbed);
 }

 if(command === `${prefix}warn`){
    
    if(message.member.hasPermission('ADMINISTRATOR'))
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Waarschuwing")
        .setDescription(`**Naam:** ${messageArray[1]}\n**Reden:** ${messageArray[2]}\n**Warn:** **${messageArray[4]}**\n**Moderator:** ${messageArray[5]}`)
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setFooter("Made by Milan♡#0001")
     
     return message.channel.send(botEmbed);
 }

 if(command === `${prefix}invite`){
    
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Invite Link")
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=747016837887164441&permissions=8&scope=bot")
        .setThumbnail("https://i.pinimg.com/originals/27/cb/c9/27cbc911050ec9551db2c6e9cbdb1ef2.png")
        .setFooter("Made by Milan♡#0001")
     
     return message.channel.send(botEmbed);
 }

});

bot.login(process.env.token);