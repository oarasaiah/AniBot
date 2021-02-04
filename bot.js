const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content.startsWith(`${prefix}ping`)) {

       message.channel.send('pong');
     
    }else if (message.cntent.startsWith(`${prefix}beep`)) {
     
       message.channel.send('boop');

    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
