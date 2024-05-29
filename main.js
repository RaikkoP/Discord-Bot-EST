import dotenv from 'dotenv';
dotenv.config(); 

// Import commands and refresh
import { createCommands } from './commands/commands.js';

createCommands();


// Handle client
import { Client , GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})


// Handle command events
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'test') {
        await interaction.reply('Test');
    }
});

client.login(process.env.TOKEN);