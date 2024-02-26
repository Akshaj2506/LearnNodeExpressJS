// Streams: Used to read and write sequentially.
// Writing or reading large size of data, or continuously
// Four different types of streams: Writeable, Readable, Duplex, Transform
// Duplex: Used to both read and write data sequentially

// ReadStream: It is used to read the big data in the form of smaller chunks instead of storing the big data in a single variable.
// By default, 64KB of data is received in each buffer
// last buffer- remainder
// highWaterMark- controls the size of the buffer data received in a chunk

const {createReadStream} = require('fs');

const readStream = createReadStream('./subfolder/big-file.txt',{highWaterMark: 100000})

readStream.on('data', (result) => {
   console.log(result);
})

readStream.on('error', (err) => {
   console.log(err);
})