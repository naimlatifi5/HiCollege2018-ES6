/********************************************
 *        Variable and scoping               *
 *                                           *
 ********************************************/

// variable and scoping ES6
console.log("=================Variable and scoping===============");

console.log("********* example wth const variable ***********");
const hello = "Naim";
//hello = "cannot change"; //prints-> hello is read-only
console.log("What is printing", hello);



console.log("************* example where when we shadow the value ***********");

function f() {
  const temp = 4;
  if (true) {
    const temp = 123; // shadow the value
    console.log("Overrided temp inside block scope", temp);
  }
  console.log(temp);
}
// invoke the function
f();



console.log("********* let variable declration with ES6 ********");

function letVariableScopeES6() {
  if (true) {
    // variables are blocked scope and cannot access outside
    let temp = 123;
    // variables in with let are mutuable and can be changed
    temp = "hello you changed me";
    console.log(temp);
  }
  // temp outside  of the block is not defined
  //console.log(temp); // error temp is not defined
}
letVariableScopeES6();

console.log("************ compared to var in ES5 **********");

function varVariableES5() {
  if (true) {
    var temp1 = 222;
  }
  console.log("ES5 are function scoped(hoisting variables)", temp1); // you can access temp1 value because the variable are hosited in ES5
}
varVariableES5();


console.log("************* Variables inside the block comparison with ES5 and var *************");
var a = "car";
if (true) {
  var a = 4;
  console.log("What is a inside a block ", a);
}
console.log("What is a outside the block", a);

console.log("*************** Example scenario with loop and variable declaration - ES5 *********");

function exampleScenarioES5() {
  for (var i = 1; i < 5; i++) {
    //(function(x){ add anonoymous function where we create a closure for setTimeout function
    setTimeout(function () {
      console.log("Scenario with ES5 what does it print after 1 sec", i); // changed to x when added annonymous function
    }, 900);
    //}(i))
  }
}
console.log("************ Scendarion with loop and let declaration - ES6 **************");

function exampleScenarioES6() {
  // block scope
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log("Scenario with ES6 what does it print after 1 sec", i);
    }, 1000);
  }
}

exampleScenarioES5();
exampleScenarioES6();


console.log("************ Var in for loop one more example - ES5***********");

function varInForLoopES5() {
  const arr = [];
  const myArray = [1, 2, 3];
  for (var i of myArray) {
    arr.push(() => i);
  }
  console.log("What is my array", arr.map(x => x())); // [3,3,3] // because var is hoisted inside for loop
}
varInForLoopES5();

console.log("************ Let in for loop one more example **************");

function letInForLoopES6() {
  const arr = [];
  const myArray = [1, 2, 3];
  // use const in loops because only one binding is created per iteration
  for (const i of myArray) { // const and block level variable is not hoisted
    arr.push(() => i);
  }
  console.log("My array data ", arr.map(x => x()));
}
letInForLoopES6();

console.log("************ Create functions with arrays, compared ES5 and ES6 solution **********");
// example with let inside for loop block level
function createThreeFunctionInArray() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    //let j = i; // this fix the problem with hoisiting and closure variables.
    arr.push(function () {
      console.log("My array elements are ", i); // prin j 
    });
  }
  return arr;
}

var f = createThreeFunctionInArray();
f[0]();
f[1]();
f[2]();