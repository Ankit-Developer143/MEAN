const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md","utf-8");
console.log(text);

//op:-Hole Text Are as the op


//callBack Functions

fs.readFile("./assets/Readme.md",(err,text) =>{
    if (err) {
        console.log(`An eroor has occured : ${err.message}`);  
    }
    process.exit();
});