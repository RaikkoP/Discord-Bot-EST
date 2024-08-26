import dotenv from 'dotenv'
import MainClient from './bot/client.js'

dotenv.config()

let client = new MainClient()

client.init()

// TODO: Check out a way for faster websocket connections
// TODO: Add options for voice chat but not prio atm
// TODO: Add GPT functionality for funny chat messages

// TASK: Translation
// TODO: MAKE BOAT UNDERSTAND THE BRITISH FLAG IS THE ONLY REACTION THAT WE SHOULD TRACK
// TODO: Get bot to react to messages that are written in english
// TODO: Make the bot translate the message when the reaction is clicked
// TODO: Add Google Translate functionality
// TODO: The bot should then reference the first message and respond with the translated message
