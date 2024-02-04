// NO WINDOW OBJECT exists in Node as the borwser is not included.

// Globals refers to the variables which can be accessed from anywhere in the application

// __filname - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// __dirname - path to current directory
console.log(__dirname);
let i = 0;
let interval = setInterval(() => {
   if (i < 4) console.log("hello world");
   else clearInterval(interval);
   i++;

}, 400);

const name2 = 'Nishith';

module.exports = {name2}