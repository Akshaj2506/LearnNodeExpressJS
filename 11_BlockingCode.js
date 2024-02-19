// Synchronous Patterns- Blocking Code: 

const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.end("Home Page");
      return;
   }
   if (req.url === "/about") {
      // BLOCKING CODE: the pages for all the concurrent users is gonna be rendered once the following loop is completely executed as the process is currently synchronous (follows the given order of execution)
      for (let i = 0; i < 10; i++) {
         for (let j = 0; j < 1000; j++) console.log(i , j);
      }
      res.end("About Page")
      return
   }
   res.end("Error Page")
   return
})

server.listen(5000, () => {
   console.log("Server listening at http://localhost:5000");
})