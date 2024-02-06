const path = require('path');

// Provides the seperator used in path (Windows: \ and POSIX: /)
console.log(path.sep);

// path.join joins the specified path segments into one specific path
const joinedPath = path.join('/subfolder','main','example.js')

// basename(): Returning the name of a particular file
const baseName = path.basename(joinedPath);

// resolve(): Returns the absolute path of a file
const absolutePath = path.resolve(__dirname,'subfolder','main','example.js')

console.log({joinedPath, baseName, absolutePath});
