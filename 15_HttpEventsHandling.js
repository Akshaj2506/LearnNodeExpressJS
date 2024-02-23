const http = require('http');

const server = http.createServer();

// on() method extends the events module
server.on('request', (req, res) => {
   res.end('request recieved')
})

server.listen(5000)
console.log("Connection established at http://localhost:5000");