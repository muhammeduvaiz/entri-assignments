const fs = require('fs');
const path = require('path');
const os = require('os');
// This code demonstrates how to use the 'fs' module in Node.js to write and read files.
// It writes "hello world" to a file named "test.txt" and then reads the content of that file.
fs.writeFileSync("./test.txt","hello world");

const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data);


const filePath = path.join(__dirname, 'test.txt');
console.log("filePath: ", filePath);

console.log("os.homedir(): ", os.homedir());
console.log("os.platform(): ", os.platform());
console.log("os.type(): ", os.type());
console.log("os.arch(): ", os.arch());
console.log("os.freemem(): ", os.freemem());
console.log("os.totalmem(): ", os.totalmem());
console.log("os.cpus(): ", os.cpus());
console.log("os.networkInterfaces(): ", os.networkInterfaces());