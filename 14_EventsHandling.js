const EventsEmitter = require('events');
const myEventEmitter = new EventsEmitter();

// Events are setup using the on() method first and only then the events can be emitted after that using the emit() method
myEventEmitter.on('request', () => {
   console.log("Request Received")
})
myEventEmitter.on('request', () => {
   console.log("Request Handled")
})

// We can also pass on arguments in events
myEventEmitter.on('request', (prn, name) => {
   console.log({prn, name})
})
myEventEmitter.emit('request', 1132230205, 'Akshaj Srivastava');
