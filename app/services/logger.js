const winston = require('winston');
const fs = require('fs');

if (!fs.existsSync('logs')) {
	fs.mkdirSync('logs');
}

module.exports = new winston.Logger({
	transports: [
		new winston.transports.File({
			level: "debug",
			filename: "logs/letslunch.log",
			maxsize: 1000000,
			maxFiles: 100
		})
	]
});
