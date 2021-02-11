//steps 1
const events = require("events");
const emitter = new events.EventEmitter();

//steps 3

emitter.on("customEvents",(message,user) =>{
    console.log(`${user} : ${message}`);
})



//steps 2
// emitter.emit("customEvents","Hello World","computer");
// emitter.emit("customEvent","That's pretty cool huh? ","Ankit")

//step4 take a input through the user

process.stdin.on("data",data =>{
    const input = data.toString().trim();

    //step6
    if (input ==="exit") {
        emitter.emit("customEvents","Goodbye!","process");
        process.exit();
        
    }
    //step5
    emitter.emit("customEvents",input,"terminal")

});

//op:-Ankit : That's pretty cool huh? 

// hello
// terminal : hello