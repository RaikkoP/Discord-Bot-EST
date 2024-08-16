import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import importedCommands from "./commands/command_imports.js";
dotenv.config();
export default class Commands {
  constructor() {
    this.commands = importedCommands;
    this.rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
  }

  init() {
    try {
      console.log("Started refreshing application (/) commands.");

      this.rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: this.commands,
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.log(error);
    }
  }

  async checkInteraction(interaction) {
    if (!interaction.isChatInputCommand()) return;

    // Check interactions aka commands here
    if (interaction.commandName === "test") {
      await interaction.reply("Test");
    }
  }
}
