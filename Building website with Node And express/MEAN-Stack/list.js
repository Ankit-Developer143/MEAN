const fs = require("fs");

console.log("Started Reading Files");

//Synchronusly read dir
// const files = fs.readdirSync("./assets");


//read Asynchronously Read Dir
fs.readdir("./assets", (err,files) =>{
    if (err) {
        throw err;
        
    }
    console.log("Complete");

    console.log(files);

})

//op:-
// Started Reading Files
// Complete
// [ 'package.json' ]

