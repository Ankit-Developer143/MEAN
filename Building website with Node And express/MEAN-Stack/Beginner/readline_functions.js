const readline  = require("readline")

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
r1.question("Ho are You ?",answer =>{
    console.log(`Your Answer : ${answer}.`);
});
