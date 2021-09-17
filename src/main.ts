"use strict";
const DEBUG = true;

import { prefix, APItoken } from "./config.json";
import { Client } from "discord.js";
const client = new Client();

// Fun imports
import metrixCantMakeJokes from "./commands/fun/metrixCantMakeJokes";

// General imports
import info from "./commands/misc/info";
import serverInfo from "./commands/misc/serverInfo";
import userInfo from "./commands/misc/userinfo";

// Music imports
import play from "./commands/music/music";
import { exit } from "process";

client.once("ready", () => {
    console.log("Ready!");
    console.log("Total servers:", client.guilds.cache.size);
});

client.on("message", async message => {

    // Log all non-bot messages
    if(DEBUG && !message.author.bot)
        console.log(message.guild!.name + " --> ", message.author.username + "#" + message.author.tag + ":", message.content);

    // Ignore Message if it isn't a command, is from a bot, or is too big
    if(!message.content.startsWith(prefix) || message.author.bot || message.content.length > 50) 
        return;

    const args = message.content.substring(1).toLowerCase().split(" ");

    switch(args[0]) {
        case "help":
        case "h":
            break;

        // Management
        case "ban":
        case "kick":
        case "mute":
        case "timeout":
        case "infofor":
        case "role":
            // Add sub cases
        case "nick":
        case "lock":
        case "purge":
            // Add sub cases
        case "role":
            // Add sub cases
        case "ticket":
            // add sub cases

        // Fun stuff!
        case "8ball":
        case "cuteness":
        case "dadjoke":
        case "explosion":
        case "metrixcantmakejokes":
            metrixCantMakeJokes(message);

        case "pika":
        case "say":
        case "roll":

        // General Commands
        case "info":
            info(message);
            break;
        case "serverinfo":
            serverInfo(message);
            break;
        case "userinfo":
            userInfo(message);
            break;
        case "roleinfo":
        case "channelinfo":

        // Music
        case "play":
            play(message);
            break;

        // Log off bot
        case "kill":
            client.destroy();
            exit();
            break;

        default:
            if(DEBUG)
                message.channel.send("[DEBUG]: That's not a valid command!");
            break;

        
    }



    
})

client.login(APItoken);