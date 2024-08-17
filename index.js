const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot is running'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
