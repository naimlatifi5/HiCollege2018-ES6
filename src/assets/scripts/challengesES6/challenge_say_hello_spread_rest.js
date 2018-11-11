/* 
    Rest and spread operator challenge 4 
*/

// 1. Modify the function below so that if the second parameter lastName is not given , display as default parameter to user that lastName is not given
// 2. Discuss and what can you conclude with the ES6 solution
// 3. 
function displayUserInfo(name, lastName) {

    return "user info: " + name + lastName;
}
console.log(displayUserInfo('Naim '));

// --- write code/solution below ----

// #Challenge 4.1
// 1. Print the function parameters from the function below
// 2. Use ES6 and rest operator to print out all the arguments

function helloRestOperator(...args) {
    // print out the arguments

}
helloRestOperator('HiCollegeES6', "HIQ", "2018");

// #Challenge 4.2
// 1. Concat the following two arrays array1 and array2 to get the result of new array myCompleteArray = ['HiCollageES6', 'HIQ', '2018']
// 2. Use ES6 and spread operator 
// 3. Compare how would you do with use of ES5 
// 4. Discuss the solution
let array1 = ['HiCollageES6', "HIQ"];
let array2 = ['2018'];