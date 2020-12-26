const Discord = require("discord.js");
const client = new Discord.Client();

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
		
		// On bot ping
		if(message.isMentioned(client.user)) {

			const embed = new Discord.RichEmbed()
									.setColor(0x000DFF)
									.setTitle('[Bot Command]')
									.setDescription('Không có bất kì lệnh bổ sung nào.')
									.setFooter("Dev by Moonz#0001")
									.setTimestamp();

			message.channel.send(embed).then(msg => {
				msg.delete(10000);
			});

		}
			
		if(!guild) return;
			  // delete message on cats, ,s
					if(command === "cats") {
						// Timing
						setTimeout(function(){
							message.delete();
						}, 30000);// 30 secon ds

					}
			// too
				if(command === ",s") {
					// Timing
					setTimeout(function(){
						message.delete();
					}, 30000); // 30 seconds

				}




});

// Log error
client.on("error", (e) => console.error(e));

// On login bot
client.login("<YOUR TOKEN>");
