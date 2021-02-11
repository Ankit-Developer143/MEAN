const waitTime = 3000;
const waitInterval = 500;

let currentTime = 0;

//increase time setInterval
const incTime = () =>{
    currentTime +=waitInterval;
    console.log(`waiting ${currentTime/1000} seconds`);
}


console.log(`setting a ${waitTime/1000} second delay`);

//finish
const timeFinish = () =>{
    clearInterval(interval)
    console.log("Done")
}

//function name + objects
setTimeout(timeFinish,waitTime);

const interval =   setInterval(incTime,waitInterval);