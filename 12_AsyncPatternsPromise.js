// Promises have two parts: The Resolve and the Reject
const {readFile} = require('fs');

const getText = (path) => {
   return new Promise((resolve, reject) => {
      readFile(path, 'utf-8', (err, data) => {
         if (err) reject(err)
         else resolve(data)
      })
   })
}

const start = async() => {
   const first = await getText('./subfolder/first.txt');
   const second = await getText('./subfolder/second.txt');

   console.log(first);
   console.log(second);
}

start()