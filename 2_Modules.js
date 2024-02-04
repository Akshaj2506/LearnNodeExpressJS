// CommonJS, every file is a module (by default)
// Modules - encapsulated code (share only minimum)

const { name2 } = require("./1_Globals");
const names = require("./2_Modules1");

const sayHi = (name) => {
   console.log(`Hello There ${name}`);
}
sayHi(names)
require('./3_InvokingExternalFunctions')
sayHi('Akshaj')
sayHi(name2)

// Built in Modules: OS, Path, fs, http
// fs: File system