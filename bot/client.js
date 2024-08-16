import { Client , GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

export default class MainClient {
    constructor(commands){
        this.client = client;
        this.commands = commands;
    }

    init() {
        
        this.commands.init();
        // check if client has connected
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}`);
        });
        
        // check if a valid interaction has happened
        client.on('interactionCreate', async interaction => {
            this.commands.checkInteraction(interaction);
        });

        // launches the bot
        client.login(process.env.TOKEN);
    }
}