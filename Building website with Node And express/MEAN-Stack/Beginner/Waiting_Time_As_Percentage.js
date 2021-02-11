const waitTime =5000;
let currentTime = 0;
const waitInterval = 500;

//Increments
const increment = () =>{
    currentTime +=waitInterval;
//use for percentage
    const p = Math.floor((currentTime/waitTime)* 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    process.stdout.write(`waiting ... ${p}%`)

}

console.log(`setting a ${waitTime/1000} delays`);

//finish
const finish = () =>{
    clearInterval(interval)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");

}



const interval =  setInterval(increment,waitInterval)
setTimeout(finish,waitTime)