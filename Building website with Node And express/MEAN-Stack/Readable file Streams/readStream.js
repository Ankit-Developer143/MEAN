const fs = require("fs");

const readStream = fs.createReadStream("./loreum.md","UTF-8");
let fileTxt = "";

//User Input
console.log("Type somethins....");
readStream.on("data",data =>{
    console.log(`I read ${data.length-1} character of text`);
    fileTxt +=data;
    
});

readStream.once("data",data =>{
    console.log(data.length);
});

readStream.on("end",() =>{
    console.log("finish The code");
    console.log(`in Total I Read ${fileTxt.length-1} character of Text`);
})




//Read All The Data's
//op:-
// I read 833 character of text
// 834
//finish The code
//in Total I Read 833 character of Text