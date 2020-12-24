const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
		console.log('Bot is online!');

	client.user.setPresence({
		status: "online",
		game: {
		name: "STARTING",
		type: "PLAYING"
		}
	});

});

client.on("message", message => {
	if(message.author == client.user) return;

	client.user.setPresence({
		status: "online",
		game: {
		name: "2m2o.xyz",
		type: "PLAYING"
		}
	});

});

client.on("error", (e) => console.error(e));

client.login("<YOUR TOKEN>");
