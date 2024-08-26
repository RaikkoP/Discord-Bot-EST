import { Events } from 'discord.js'

export default class Features {
    constructor(_client) {
        this.client = _client
    }

    init() {
        this.client.on(Events.MessageReactionAdd, async (reaction, user) => {
            await reaction.fetch()

            // Now the message has been cached and is fully available
            console.log(
                `${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`
            )
            // The reaction is now also fully available and the properties will be reflected accurately:
            console.log(
                `${reaction.count} user(s) have given the same reaction to this message!`
            )
            // Log the emoji used
            console.log(`Emoji name: ${reaction.emoji.name}`)
        })
    }
    catch(error) {
        console.error('Something went wrong when fetching the message:', error)
        // Return as `reaction.message.author` may be undefined/null
        return
    }
}
