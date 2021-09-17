import { GuildChannel, Message, StreamDispatcher, VoiceChannel } from "discord.js";
import internal from "stream";

import ytdl from 'ytdl-core';

async function play(message: Message) {

    if(message.guild?.available) {

        try {
            const vc: VoiceChannel | undefined | null = message.member?.voice.channel;
            if (vc == undefined || vc == null) {
                message.channel.send("Please join a voice channel so I know where to play music!");
                return;
            }
            const connection = await vc.join().then( (connection) => {
                const url = message.content.substring(1).split(" ")[1];

                // Stream object and settings (change later to allow other commands to modify global values)
                const stream: internal.Readable = ytdl(url, { filter : 'audioonly' });
                const streamOptions = { seek: 0, volume: 0.5 };

                // Audio player through discord.js
                const dispatcher: StreamDispatcher = connection.play(stream, streamOptions);
                dispatcher.on("end", end => {
                    vc.leave();
                });
            });

        } catch (e) {
            console.error(e);
            console.warn("URL couldn't be played, trying with search");
        }

    }
}

export default play;