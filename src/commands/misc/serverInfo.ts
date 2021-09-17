import { Message } from "discord.js";

function serverInfo(message: Message) {

    if(message.guild?.available) {
        const embed = {
            "embed": {
                "color": 12401200,
                "author": {
                    "name": message.guild.name,
                    "icon_url": message.guild.iconURL()
                },
                "fields": [
                    { 
                        "name": "Member count:",
                        "value": message.guild.memberCount
                    },
                    { 
                        "name": "Role count:",
                        "value": message.guild.roles.cache.size
                    },
                    { 
                        "name": "Owner:",
                        "value": message.guild.owner?.displayName
                    },
                    { 
                        "name": "Server created on:",
                        "value": message.guild.createdAt.toString()
                    }
                ]
            }
        };

        message.channel.send(embed);

    }
}

export default serverInfo;