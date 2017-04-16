var http = require('http');
var app = require('./config/express');
var server = http.createServer(app);

///////////////////////////////////////////////////////////////////////
// Node server configuation
///////////////////////////////////////////////////////////////////////
NODE_PORT = 3000
if( process.env.NODE_PORT) {
   NODE_PORT = process.env.NODE_PORT;
}

server.listen(NODE_PORT, function () {
	console.log('Server started and listening on port ' + NODE_PORT);
});