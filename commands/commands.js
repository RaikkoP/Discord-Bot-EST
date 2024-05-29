import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import test from "./test.js";
dotenv.config();

export async function createCommands() {
  const commands = [test];

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.log(error);
  }
}