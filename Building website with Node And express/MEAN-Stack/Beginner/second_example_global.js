const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);


//op:-The file name is second_example_global.js

console.log(`The folder name is ${path.basename(__dirname)}`);

var first_Name = "Ankit"
var last_Name = "Singh"

console.log(`Hello my first Name is ${first_Name} and last name is ${last_Name}`);  


//Check pid
console.log(process.pid);
//11456

//Check Version 
console.log(process.versions.node);

//Showing Path
console.log(process.argv);


// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Node\\Beginner\\second_example_global.js'
//   ] 