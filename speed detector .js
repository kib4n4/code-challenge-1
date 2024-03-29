//getting input from user
const readline = require ('readline');
 let rl =readline.createInterface(
    process.stdin,process.stdout );
// implementing a function called speeding 
function speeding(speed){
    if(speed <= 70){
        return "OK";
        }

let diff = speed-70;
let demerit= Math.round(diff/5);

if(demerit > 12){
    return "License suspended !!";
}else{
    return "points deducted: " + demerit;
}

 };
 //implementing function main
function main(){
  
    rl.question('check speed: ',(speed)=>{//asking the user for input
        let s = parseInt(speed);
        if(isNaN(s)){//checking that user only provides a number
            console.log("Try a number:\n ");
            main();
            return;
        }
      console.log(speeding(s));
        rl.close();
    });
}
main();