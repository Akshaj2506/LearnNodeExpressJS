const {readFile, readFileSync} = require("fs")
// Event Loop: Allows Node.js to perform NON-BLOCKING I/O Operations - despite JavaScript being single-threaded by OFFLOADING operations to the system kernel whenever possible

// Database queries or other I/O operations do not block Node.js single thread because these operations are offloaded to the Libuv API to handle them.

// Once the async operations are completed by the LibUV API, the callbacks are then passed onto the EVENT QUEUE (Follows FIFO principle)

// The EVENT LOOP checks if there is anything in the event queue then it passes on the callbacks to the Call Stack

/*
       Call Stack         LIBUV API
      |------------------|--------------------|
      |                  |    IO Operation    |
      |__________________|____________________|
      |     callback     |                    |
      |__________________|____________________|
          ^                       |
          |                       | (Passes on the callback to event queue)
          |                       V
      Event Loop         Event Queue
      |--------|         |----------|----------|
      |        |  <---   | callback |          |
      |________|         |__________|__________|

*/
// The users send the requests to the backend and the event loop is responsible for registering the callback on the event queue and once the operation is successfully completed, the event queue passes the callback onto the callstack and the callback is executed.

console.log("Hello Akshaj");
console.log("We are gonna start with the first task");

readFile('./subfolder/first.txt', 'utf-8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   console.log(result);
   console.log('Completed the first task');
})

console.log('Now we are gonna start with the second task');