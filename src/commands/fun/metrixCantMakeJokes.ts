import { Message } from "discord.js";

function metrixCantMakeJokes(message: Message) {
    const embed = {
        "embed": {
            "title": "~~This is a real quote from Metrix I swear...~~",
            "color": 12401200,
            "author": {
                "name": "MetrixYT@metrixyt.com",
                "icon_url": "https://images-ext-2.discordapp.net/external/beziNk8XH1oNlVY6WnBjQOt_pDsZ6it_Fi3BVJSh4-o/https/cdn.discordapp.com/icons/282998541847232513/0f8e51a75464c6447de7e5bf515ac83b.webp"
            },
            "fields": [
                { 
                    "name": "What do you call a dead baby?",
                    "value": "||A cum dumpster||"
                }
            ]
        }
    };

    message.channel.send(embed);
}

export default metrixCantMakeJokes;