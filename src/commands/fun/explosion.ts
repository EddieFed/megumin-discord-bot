import { Message } from "discord.js";

function explosion(message: Message) {
    const embed = {
        "embed": {
            "color": 12401200,
            "image": {
                "url": "https://www.eddiefed.com/megumin/" + (Math.floor(Math.random() * 9) + 1) + ".gif"
            }
        }
    }

    message.channel.send(embed);
    console.log(message.guild!.name + " --> ", message.author.username + "#" + message.author.tag + ":", message.content);
}

export default explosion;