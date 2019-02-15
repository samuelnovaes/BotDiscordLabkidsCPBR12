const Discord = require('discord.js')
const five = require('johnny-five')

const client = new Discord.Client()
const board = new five.Board()

board.on('ready', function () {
	const led = new five.Led(13)

	client.on('message', function (msg) {
		switch (msg.content) {
			case 'liga':
				led.on()
				msg.reply('Led ligou')
				break
			case 'desliga':
				led.off()
				msg.reply('Led desligou')
				break
		}
	})
})

client.on('ready', function () {
	console.log('Bot rodando!')
})

client.login(process.env.TOKEN)