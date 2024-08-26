import { Events } from 'discord.js'

export default class Features {
    constructor(_client) {
        this.client = _client
    }

    init() {
        this.client.on(Events.MessageReactionAdd, async (reaction, user) => {
            // Cache message so its available for use
            await reaction.fetch()
            let currentReaction = reaction.emoji.name

            if (currentReaction === '🇬🇧') {
                let messageContent = reaction.message.content
                console.log('British 🍇')
            }
        })
    }
    catch(error) {
        console.error('Something went wrong when fetching the message:', error)
        // Return as `reaction.message.author` may be undefined/null
        return
    }
}
