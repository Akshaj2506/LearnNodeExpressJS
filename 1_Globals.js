// NO WINDOW OBJECT exists in Node as the borwser is not included.

// Globals refers to the variables which can be accessed from anywhere in the application

// __filname - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// __dirname - path to current directory
console.log(__dirname);
setInterval(() => {
   console.log("hello world");
}, 1000);