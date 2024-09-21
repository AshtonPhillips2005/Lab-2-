let number = 0; // Assign any number here
 
if (number > 0) {
    console.log("Number is a positive.");
} else if (number < 0) {
    console.log("Number is a negitive number.");
} 
else{
    console.log("It is a zero.");
}


var day = 1;

switch(day){

    case 1:
        console.log("Today is Sunday.");
    break;

    case 2:
        console.log("Today is Monday");
    break;

    case 3:
        console.log("Today is Tuesday.");
    break;

    case 4:
        console.log("Today is wednesday.");
    break;

    case 5:
        console.log("Today is thursday.");
    break;

    case 6:
        console.log("Today is Friday.");
    break;

    case 7:
        console.log("Today is Saturday.");
    break;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
 
while (i <= 5) { 
console.log(i++);
 }

let j = 1; 
 
do {
 console.log(j++); 
﻿} while (j <= 5);

i = 1;

for(l = 1; l <= 3; l++){
    if (l === 3) {
        break;//Stops at the number 3.
      }
      console.log(l);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        continue; // Skip the number 3
    }
    console.log(numbers[i]);
}

let globalVar = "I'm global!";

function scopeLocalGlobal() {
    let localVar = "I'm local!";
    
    console.log(globalVar); 
    
    console.log(localVar); 
}

scopeLocalGlobal();

console.log(localVar); 