const fs = require("fs");

fs.renameSync("./rename.js","./rename1.js");
fs.rename("./rename1.js","../new-Directory/notes.md",err =>{
    if (err) {
        throw err;
        
    }
});