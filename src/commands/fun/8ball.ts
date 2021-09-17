import { Message } from "discord.js";

const responses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no"
]

function _8ball(message: Message) {
    
    const embed = {
        "embed": {
            "color": 12401200,
            "fields": [
                {
                    "name": message.content.substring(message.content.indexOf(" ")),
                    "value": responses[Math.floor(Math.random() * responses.length)]
                }
            ]
        }
    }

    message.channel.send(embed);
}

export default _8ball;