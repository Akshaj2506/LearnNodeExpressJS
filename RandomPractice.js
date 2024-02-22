const http = require('http');
const {readFile} = require('fs');

const readFileText = (path) => {
   return new Promise((resolve, reject) => {
      readFile(path,'utf-8',(err, data) => {
         if (err) reject(err)
         else resolve(data)
      })
   })
}

const httpServer = http.createServer(async (req, res)=> {
   const first = await readFileText('./subfolder/first.txt');
   res.end(first);
   
})

httpServer.listen(5000, () => {
   console.log("Server hosted on http://localhost:5000");
})