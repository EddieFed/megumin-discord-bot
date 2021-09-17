import { Message } from "discord.js";
import fetch from "node-fetch";

function dadJoke(message: Message) {

    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        }
    })
    .then(res => res.text())
    .then(body => {
        const embed = {
            "embed": {
                "title": body,
                "color": 12401200
            }
        };

        message.channel.send(embed);
    });
}

export default dadJoke;