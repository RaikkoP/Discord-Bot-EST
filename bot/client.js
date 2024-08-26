import { Client, Events, GatewayIntentBits, Partials } from 'discord.js'
import Commands from './commands/commands.js'
import Features from './features/features.js'
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
})

export default class MainClient {
    constructor() {
        this.client = client
        this.commands = new Commands()
        this.features = new Features(client)
    }

    init() {
        // Init all features of the bot
        this.commands.init()
        this.features.init()

        // check if client has connected
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}`)
        })

        // check if a valid interaction has happened
        client.on('interactionCreate', async (interaction) => {
            this.commands.checkInteraction(interaction)
        })

        // launches the bot
        client.login(process.env.TOKEN)
    }
}
