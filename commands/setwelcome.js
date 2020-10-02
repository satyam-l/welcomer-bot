const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "setwelcome",
  description: "Set Welcome!",
  async execute(message, args) {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**Only Server ADMIN Can Use This Command!**`)
    }
    
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send(`**__No Channel Provided!__**`);
    db.set(`welcome_${message.guild.id}`, channel.id);
    return message.channel.send(`**__Channel Has Been Setted!__**`);
  }
};
