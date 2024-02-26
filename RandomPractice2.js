const {writeFileSync} = require('fs');

for (let i = 1; i <= 10000; i++) {
   writeFileSync('./subfolder/big-file.txt', `Hello World ${i} \n`,{flag: "a"})
}