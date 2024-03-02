const http = require('http');
const fs  = require('fs')
const port = 5000;
const server = http.createServer((req, res) => {
   // Without using streams
   const bigFileText = fs.readFileSync('./subfolder/big-file.txt','utf-8');
   // res.end(bigFileText);

   // By using streams
   const fileReadStream = fs.createReadStream('./subfolder/big-file.txt', 'utf-8');
   fileReadStream.on('open', ()=> {
      // The transfer-encoding will be shown as "chunked"
      fileReadStream.pipe(res);
   })
   fileReadStream.on('error', (err)=> {
      res.end(err);
   })
})

server.listen(port, () => {
   console.log(`Server running at: http://localhost:${port}`);
})