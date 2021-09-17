import { Message } from "discord.js";
import fetch from "node-fetch";

function pika(message: Message) {

    fetch("https://some-random-api.ml/pikachuimg")
    .then(res => res.json())
    .then(body => {
        const embed = {
            "embed": {
                "color": 12401200,
                "image": {
                    "url": body["link"]
                }
            }
        };

        message.channel.send(embed);
    });
}

export default pika;