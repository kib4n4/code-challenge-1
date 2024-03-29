
//getting input from user
const readline = require ('readline');
 let rl =readline.createInterface(
    process.stdin,process.stdout );
//implemneting a function called grading
function grading(score){
    if (score>79){
        return "A";
    
    }else if(score >= 60 && score <= 79){
        return "B";
    }else if(score >= 49 && score <= 59){
        return "C";
    }else if (score >= 40 && score <= 49){
        return "D";
    }else {
        return "E";
    }
}

//implementing function main
function main(){
  
    rl.question('what is your score?: ',(grade)=>{//asking the user for input
        let s = parseInt(grade);
        if(isNaN(s)){//checking that user only provides a number
            console.log("Try a number:\n ");
            main();
            return;
        }
       let score = grading(s);
       console.log ("your grade is: "+ score+"\n");//outputing the grade from the score
        rl.close();
    });
}
main();