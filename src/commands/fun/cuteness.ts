import { Message } from "discord.js";
import fetch from "node-fetch";

const endpoints = ["dog", "cat", "panda", "red_panda", "birb", "fox", "koala"];

function cuteness(message: Message) {

    fetch("https://some-random-api.ml/img/" + endpoints[Math.floor(Math.random() * endpoints.length)])
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

export default cuteness;