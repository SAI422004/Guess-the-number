const prompt=require('prompt-sync')();
let guess=Math.random()  * 100;
guess=Number.parseInt(guess);
let n;
let chances=0;

while(n!=guess)
{
    chances=chances+1;
    n=prompt("Enter the number");
    if(n==guess)
    {        console.log("U guessed the correct number");
        let x=chances++;
        console.log(x);
        
        
    }
    else if(n>guess && n<100)
    {
        console.log("Your number is greater than guess  number");
    }
    else if(n<guess && n>0)
    {
        console.log("Your no. is smaller than guess number ");
    }
    else{
        console.log("Enter the number between 1 to 100");
    }

}











