// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//    console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//   console.log('listner2 executed.');
// }

// // Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//    (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// // Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");


// // buf = new Buffer(256);
// // len = buf.write("Simply Easy Learning");

// // console.log("Octets written : "+  len);


// // var buffer1 = new Buffer('TutorialsPoint ');
// // console.log(buffer1.length);
// // var buffer2 = new Buffer('Simply Easy Learning');
// // var buffer3 = Buffer.concat([buffer1,buffer2]);
// // console.log("buffer3 content: " + buffer3.toString());

// // var bu = new Buffer('This is new buffer');
// // console.log(bu.length);

// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("Program Ended");

console.log('Printing The working Directory'+__dirname);
function doSomeThing()
{
  console.log('This is a message');
}
var t  = setTimeout(doSomeThing,4000);
clearTimeout(t);
