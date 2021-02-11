const path = require("path");
const util = require("util");
const v8 = require("v8");

const dirUploads = path.join(__dirname,'www','files','uploads')
console.log(dirUploads);
//op:-D:\Node\Beginner\www\files\uploads

util.log(path.basename(__filename)); //2 Feb 14:12:57 - core.js


//utility Models

// util.log(path.basename(__filename));
// util.log(v8.getHeapSpaceStatistics());


// [
//     {
//       space_name: 'read_only_space',
//       space_size: 151552,
//       space_used_size: 150392,
//       space_available_size: 0,
//       physical_space_size: 151552
//     },
//   ]

//Destructuring 

const {log} = require("util");
const {getHeapSpaceStatistics }= require("v8");


