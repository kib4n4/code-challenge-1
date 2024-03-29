
//getting input from user
const readline = require ('readline');
 let rl =readline.createInterface(
    process.stdin,process.stdout );
// creating an object for payerates
const payerates=[
{
    min:0,
    max:24000,
    deduction:10,
},
{
    min:24000,
    max:32333.33,
    deduction:25,
},
{
    min:32333.33,
    max:499999.99,
    deduction:30,
},

{
    min:500000,
    max:799999.99,
    deduction:32.5,
},

];

// implementing function to calculate taxrates
function gettaxrates(salary){
    if (salary <= 24000){
        return 10;
    }else if(salary >= 24000 && salary <= 32333.33){
        return 25;
    }else if(salary >= 32333.33 && salary <=499999.99){
        return 30;
    }else if(salary >=500000 && salary <=799999.99 ){
        return 32.5;
    }
        return 35;
    
}
//implementing a function that calculates taxable income
function netsalary(salary){
    const rate=gettaxrates(salary)/100;
    const taxable=salary*rate;
    const income=salary-taxable;
    const net= income+2655;
    return net;


}

// implementing a function that calculates NHIF
function NHIF(salary){
    if (salary <= 5999) {
        return 150;
      } else if (salary >= 6000 && salary <= 7999) {
        return 300;
      } else if (salary >= 8000 && salary <= 11999) {
        return 400;
      } else if (salary >= 12000 && salary <= 14999) {
        return 500;
      } else if (salary >= 15000 && salary <= 19999) {
        return 600;
      } else if (salary >= 20000 && salary <= 24999) {
        return 750;
      } else if (salary >= 25000 && salary <= 29999) {
        return 850;
      } else if (salary >= 30000 && salary <= 34999) {
        return 900;
      } else if (salary >= 35000 && salary <= 39999) {
        return 950;
      } else if (salary >= 40000 && salary <= 44999) {
        return 1000;
      } else if (salary >= 45000 && salary <= 49999) {
        return 1100;
      } else if (salary >= 50000 && salary <= 59999) {
        return 1200;
      } else if (salary >= 60000 && salary <= 69999) {
        return 1300;
      } else if (salary >= 70000 && salary <= 79999) {
        return 1400;
      } else if (salary >= 80000 && salary <= 89999) {
        return 1500;
      } else if (salary >= 90000 && salary <= 99999) {
        return 1600;
      } else {
        return 1700;
      }

}
function Netsalary(salary){
    const afterpay=netsalary(salary);
    const nhif=NHIF(salary);
   
    return afterpay-nhif;

}

 //implementing function main
 function main() {
    rl.question('Enter gross salary: ', (salary) => {
      let s = parseInt(salary);
      if (isNaN(s)) {
        console.log("Invalid input!! Please enter a valid number for gross salary.");
        main();
        return;
      }
      console.log("For gross salary: ", salary, "Net salary is: ", Netsalary(salary));
      rl.close();
    });
  }
  
  main();