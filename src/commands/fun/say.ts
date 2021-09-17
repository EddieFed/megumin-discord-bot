import { Message } from "discord.js";

function say(message: Message) {

    message.channel.send(message.content.substr(message.content.indexOf(" ") + 1));

}

export default say;