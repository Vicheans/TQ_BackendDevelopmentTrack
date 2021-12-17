/**Write a javacript function that will ask a user for a number and also a range, 
use the number collected from the user to create a multiplication table using 
the range provided by the user to end the multiplication.

Use the for loop and the whhile loop for this exercise**/
//for frances
//for loop
//get user input
const num = parseInt(prompt("please enter a number: "));
const range = parseInt(prompt("please enter a range: "));

//creating a multiplication table using input and for loop method 
for (let i = 1; i <= range; i++) {

//getting result
    const ans = i * num;

//writing result out 
console.log(`${num} * ${i}  = ${ans}`);
    if (ans == range){
        break
    }
    
    }


//while loop
//get user input
const num = parseInt(prompt("please enter a number: "));
const range = parseInt(prompt("please enter a range: "));
let i = 1;

//creating a multiplication table using input  and while loop method 
while (i <=range) {
   //getting result
    const ans = i * num;
    i++

   //writing result out 
    console.log(`${num} * ${i}  = ${ans}`);
if (ans === range){
    break
}

   
}


