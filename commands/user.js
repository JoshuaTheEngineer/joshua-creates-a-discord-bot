const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Display info about yourself.'),
        async execute(interaction) {
            await interaction.reply(`Your tag: ${interaction.client.user.tag}\nYour id: ${interaction.client.user.id}`);
        }
}