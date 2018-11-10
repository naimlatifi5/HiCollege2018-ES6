/* 
    This challenge is to understand the differences on variables and scoping on ES6 and ES5
*/

// #Challenge 1 
// 1. Let's we have a variables declared
var name = "Super Mario";
const fruit = "Apple";
var name = "I have another name Super Mario 2";
// What happend if you declare another variable with the same name ? 
// What result will be with ES6 let variable declaration?
// What result will be if you try to reasign the fruit variable ?
// What can we conclude from this example ?  
//------ Continue with the code below .... ----- 
console.log("What is the name?", name);
console.log("What is my favorite fruit?", fruit);

// #Challenge 1.1
// Let's say that you are looking for your lucky number to print out which is number "2". 
// Analyse this code and by taking in consideration variable declaration with ES6 modify it so that you will be happy when you got your lucky number "2" :) 
// Discuss what happens here 

var printMyLuckyNumber;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printMyLuckyNumber = function () {
            return "I found my lucky number" + i;
        }
    }
}
console.log(printMyLuckyNumber())