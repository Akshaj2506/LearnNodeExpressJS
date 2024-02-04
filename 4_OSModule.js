const os = require('os');

// Info about current user
const user = os.userInfo();

console.log(user);

//? Uptime: amount of time an equipment is functioning
// Returns the system uptime in seconds
console.log(os.uptime());

const deviceInfo = {
   name: os.type(), // returns name of OS
   release : os.release(), // returns the version of the OS
   totalMem : os.totalmem(), // Total memory
   freeMem: os.freemem()  // memory available in the device
}

console.log(deviceInfo);