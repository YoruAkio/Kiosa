import { Client, IntentsBitField } from 'discord.js';

const Kiosa = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessages,
    ],
});

Kiosa.on('ready', () => {
    console.log(`Logged in as ${Kiosa.user?.tag}!`);
});

Kiosa.login(process.env.DISCORD_TOKEN);
