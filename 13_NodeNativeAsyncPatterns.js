//^ Method 1: Using Utils

// const util = require('util');
// const {readFile, writeFile} = require('fs');
// const promisifiedReadFile = util.promisify(readFile);
// const promisifiedWriteFile = util.promisify(writeFile);

// const start = async () => {
//    try {
//       const firstText = await promisifiedReadFile('./subfolder/first.txt','utf-8')
//       const secondText = await promisifiedReadFile('./subfolder/second.txt','utf-8')

//       promisifiedWriteFile('./subfolder/promisifiedResult.txt', `This is done using Node Native Methods of handling promises: \n ${firstText} \n ${secondText}`)

//    } catch (e) {
//       console.log(e);
//    }
// }

//^ Method 2: Using .promises while importing the modules

const { readFile, writeFile } = require('fs').promises;

const start = async () => {
   try {
      const firstText = await readFile('./subfolder/first.txt', 'utf-8')
      const secondText = await readFile('./subfolder/second.txt', 'utf-8')

      writeFile('./subfolder/promisifiedResult.txt', `This is done using .promises property while importing the fs modules:\n${firstText}\n${secondText}`)
   } catch (e) {
      console.log(e);
   }
}
start()