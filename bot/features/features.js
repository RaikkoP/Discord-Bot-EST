export default class Features {
    constructor() {
    }

    async testReactions(reaction, user) {
        try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }
}