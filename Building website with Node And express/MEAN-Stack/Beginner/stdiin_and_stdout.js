

//Array
const question = [
    "What is Your Name",
    "what is your Hobbies",
    "Which Language Do You Know"
];

//Increments
const ask = (i = 0)=>{

    process.stdout.write(`\n\n ${question[i]}`)
    process.stdout.write(` > `)
}

ask();


//Take a user input and save it 
const answer = [];

process.stdin.on("data",data =>{
    answer.push(data.toString().trim())
    //using for iteration
    if (answer.length < question.length) {
        ask(answer.length);
    }else{
        process.exit();
    }


})
//Exit
process.on("exit",() =>{
    const[name,hobbies,language] = answer;
    console.log(`
    Thanku for Your Answer
    Go ${hobbies} ${name} You can Write ${language} later !!
    
    `);
})