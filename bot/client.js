import { Client, Events , GatewayIntentBits, Partials } from 'discord.js';
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

export default class MainClient {
    constructor(_commands, _features){
        this.client = client;
        this.commands = _commands;
        this.features = _features;
    }

    init() {
        
        // Init all features of the bot
        this.commands.init();


        // check if client has connected
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}`);
        });
        
        // check if a valid interaction has happened
        client.on('interactionCreate', async interaction => {
            this.commands.checkInteraction(interaction);
        });

        client.on(Events.MessageReactionAdd, async (reaction, user) => {
            // When a reaction is received, check if the structure is partial
            if(reaction.partial) {
                this.features.testReactions(reaction, user);
            }

            console.log(reaction.message);

            // Now the message has been cached and is fully available
            console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
            // The reaction is now also fully available and the properties will be reflected accurately:
            console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
            // Log the emoji used
            console.log(`Emoji name: ${reaction.emoji.name}`);
        })

        // launches the bot
        client.login(process.env.TOKEN);
    }
}