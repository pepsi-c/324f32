const discord = require('discord.js');

module.exports = {
        name: "addminimod",
        category: "Moderation",
        description: "Gives a user mini moderator role",
        usage: "$addminimod <mention> ",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        let hasRoleName = 'moderator'
        let hasRole = message.member.roles.cache.some(role => role.name.toLowerCase() === hasRoleName.toLowerCase());
        
        if(!hasRole) return message.reply('You cannot give users moderator.')
        if(!target) return message.reply('You did not mention anybody!');

        let roleName = 'mini-mod'
        let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());


        if(!role){
                return message.channel.send('Mini Moderator role does not exist.')
        } 

        try {
            target.roles.add(role);
            message.channel.send(`<@${target.id}> has been promoted to Mini Moderator!`);
        } catch (error) {
            return message.channel.send('Error!')
        }

    }

};

