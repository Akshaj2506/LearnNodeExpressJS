// Fs Module (Asynchronous Approach)
const {readFile, writeFile} = require('fs');

// readFile() method consists of a callback function which deals with what needs to be done once the read command is successfully executed
readFile('./subfolder/first.txt', 'utf-8', (err, data) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = data;
   readFile('./subfolder/second.txt', 'utf-8', (err, data) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = data;
      writeFile('./subfolder/result-text.txt', `\n\nThis is the new data: \n${first}\n${second}`,{flag: 'a'},() => {});
   })
})

// Asynchronous Approach - NON BLOCKING and Synchronous Approach - BLOCKING
/* Example
   Command 1
   Command 2 (sync/async)
   Command 3

   Sync: order of execution: 1 -> 2 -> 3
   Async: order of execution: 1 -> 3 -> 2

   Async makes parallel execution possible.
   In case of a synchronous method, execution takes place as per the chronology
*/