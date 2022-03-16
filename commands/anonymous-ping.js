const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anonymous-ping')
        .setDescription('Replies anonymously with Pong!'),
        async execute(interaction) {
            await interaction.reply({ content: 'You sent an anonymous response!', ephemeral: true});
            await interaction.followUp('Anonymous Pong!');
        }
}