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

	// Status of bot
	client.user.setPresence({
		status: "online",
		game: {
		name: "2m2o.xyz",
		type: "PLAYING"
		}
	});

	// Forked from Foundation Bot
		// Check if channel
		let botChat  = client.channels.get('783648498876022814');
		let otherChat  = client.channels.get('783648482862301184');

			// Constant
		  const args = message.content.slice('').trim().split(/ +/g);
		  const command = args.shift().toLowerCase();
				// Check guild
				const guild = message.guild.id === '783647633457020969';

		if(!guild) return;
			  // delete message on cats, ,s
					if(command === "cats") {
						// Timing
						console.log("working 1")

						setTimeout(function(){
							message.delete();
						}, 3000);// 30 secon ds

					}
			// too
				if(command === ",s") {
					console.log("working")
					// Timing
					setTimeout(function(){
						message.delete();
					}, 3000); // 30 seconds

				}

			// On bot ping
			if(message.isMentioned(client.user)) {

				const embed = new Discord.RichEmbed()
										.setColor(0x000DFF)
										.setTitle('[Bot Command]')
										.setDescription('Không có bất kì lệnh bổ sung nào.')
										.setFooter("Dev by Moonz#0001")
										.setTimestamp();

				message.channel.send(embed).then(message => {
					message.delete(10000);
				});

			}


});

client.on("error", (e) => console.error(e));

client.login("<YOUR TOKEN>");
