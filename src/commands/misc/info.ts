import { Message } from "discord.js";

function info(message: Message) {
	const embed = {
		"embed": {
			"author": {
				"name": "About Megumin",
				"url": "http://eddiefed.com/megu-bot/",
				"icon_url": "https://i.imgur.com/CLEj6XS.jpg"
			},
			"description": "Bot made by ``Eddie Federmeyer``",
			"color": 12401200,
			"footer": {
				"icon_url": "http://pngimg.com/uploads/fire/fire_PNG5990.png",
				"text": "EXPLOSIONS!!!"
			},
			"thumbnail": {
				"url": "https://i.imgur.com/CLEj6XS.jpg"
			},
			"image": {
				"url": "https://www.eddiefed.com/megumin/0.gif"
			},
			"fields": [
				{
					"name": "There are two reasons I made Megumin",
					"value": "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~"
				},
				{
					"name": "1.)",
					"value": "I wanted to bring more explosions to discord as well as make a humorous bot"
				},
				{
					"name": "2.)",
					"value": "As she is my first bot ever, I wanted to make something simple, not some super complex bot that can handle music requests from hundreds of servers, rather a fun bot to send random Megumin explosion gifs. Megumin will respond with an explosion gif to the following words and phrases"
				},
				{
					"name": "Keywords",
					"value": "Detonation, Destructive, smoke, magic, megumin, crimson, blaze"
				}
			]
		}
	};

	message.channel.send(embed)
		.catch(err => {console.log("Error")});
	
}

export default info;