// 2M2O
const Discord = require("discord.js");
const client = new Discord.Client();

const token = require('dotenv').config();

const prefix = "$";

const config = {
  token: process.env.token
};

client.on('ready', () => {
	console.log('Bot is online!');

	client.user.setPresence({
	status: "online",
		game: {
		name: "RESTARTING",
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
		
	let botChat  = client.channels.get('783648498876022814');
	let otherChat  = client.channels.get('783648482862301184');

	const args = message.content.slice('').trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	const guild = message.guild.id === '783647633457020969';

	// On bot ping
	if(message.isMentioned(client.user)) {

		const embed = new Discord.RichEmbed()
								.setColor(0x000DFF)
								.setTitle('[Bot Command]')
								.setDescription('Prefix mặc định là ' + prefix)
								.setFooter("Dev by Moonz#0001")
								.setTimestamp();

		message.channel.send(embed).then(message => {
			message.delete(10000);
		});

	}

	if(command === "help") {

		const embed = new Discord.RichEmbed()
								.setColor(0x000DFF)
								.setTitle('[Bot Command]')
								.setDescription('Không có bất kì lệnh bổ sung nào.')
								.setFooter("Dev by Moonz#0001")
								.setTimestamp();

		message.channel.send(embed).then(message => {
			message.delete(10000);
		});

		message.delete().then(msg =>{
					
		})

	}

	if(!guild) return; // Check guilds

	// Complete
	if(command === "cats") {
		setTimeout(function(){
			message.delete();
		}, 30000);

	}

	if(command === ",s") {
		setTimeout(function(){
			message.delete();
		}, 30000);

	}

});

// Log error
client.on("error", (e) => console.error(e));

// On login bot
client.login(config.token);
