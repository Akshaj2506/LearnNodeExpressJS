// File System Module (The Synchronous Approach)
const { readFileSync, writeFileSync } = require("fs");

// readFileSync(): reads the file contents, (second parameter defines the character type) 
const first = readFileSync('./subfolder/first.txt', 'utf-8');
const second = readFileSync('./subfolder/second.txt', 'utf-8');

console.log({first, second})
// writeFileSync(): writes data in a while (creates a file if file does'nt exist)
writeFileSync('./subfolder/result-text.txt',`The result is as follows: \n${first}\n${second}`)

// we can append data in a file by adding a flag parameter in writeFileSync() method as follows
writeFileSync('./subfolder/result-text.txt',`\nThis data has been appended`, {flag: 'a'})