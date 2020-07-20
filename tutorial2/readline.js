const readline = require('readline');
var rl= readline.createInterface({input:process.stdin,output:process.stdout});
const num1 = Math.floor(Math.random()*10+1);
const num2 = Math.floor(Math.random()*10+1);
let answer = num1 +num2;
rl.question(`what is ${num1}+${num2}?\n`,(userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer ${userInput} is incorrect please try again\n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close',()=>{
    console.log("Correct!!!!");
});