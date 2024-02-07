const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("This is the home page")
      res.end();
      return;
   }
   if (req.url === "/about") {
      res.write("This is the about page")
      res.end();
      return;
   }
   else {
      res.write(`<h1>Error 404</h1><p>PageNotFound</p>`)
      res.end()
      return;
   }
})

server.listen(port)
console.log(`Server listening at http://localhost:${port}`);