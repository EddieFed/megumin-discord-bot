import { Message } from "discord.js";

function userInfo(message: Message) {
    const user = message.guild?.members.cache.get(message.mentions.users.first()?.id ?? "");

    if(user === undefined) {
        message.channel.send("User could not be found!");
        return;
    }


    let roles = "";
    user.roles.cache.forEach((role) => {
        roles += (`${role.name} `);
    });

    // const embed = `${user?.user.tag} || ${user?.user.displayAvatarURL()} | ${roles}`;

    let embed = {
        "embed": {
            "color": 12401200,
            "author": {
                "name": user?.user.tag + "",
                "icon_url": user?.user.displayAvatarURL() + ""
            },
            "fields": [
                {
                    "name": "Roles",
                    "value": roles 
                }
            ]
        }
    };

    message.channel.send(embed);


}

export default userInfo;