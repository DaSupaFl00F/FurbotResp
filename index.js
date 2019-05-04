const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
    	message.reply('haha yes');
  	}
});

client.login(process.env.BOT_TOKEN);
