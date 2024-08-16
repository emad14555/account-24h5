const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const express = require('express');
const app = express();
const client = new Client();
const port = process.env.PORT || 3000;

// Start Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

  setInterval(async () => {
    try {
      const channel = await client.channels.fetch(process.env.channel);
      joinVoiceChannel({
        channelId: channel.id,
        guildId: process.env.guild,
        selfMute: true,
        selfDeaf: true,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });
      console.log(`Connected to voice channel: ${channel.id}`);
    } catch (error) {
      console.error(`Error connecting to voice channel: ${error}`);
    }
  }, 10000); // Set interval to 10 seconds
});
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.TOKEN);
