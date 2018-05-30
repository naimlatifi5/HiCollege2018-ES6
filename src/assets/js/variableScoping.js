
/********************************************
*        Variable and scoping               *
*                                           *
********************************************/
// variable and scoping ES6
console.log("************ =====Variable and scoping======== ***********");

const hello = "Naim";
//hello = "cannot change";
console.log(hello);

function f(){
  const temp = 4;
  if(true){
    const temp = 123; // shadow the value
    console.log("overided", temp);
  }
  //console.log(temp); // temp is not defined because const are scoped to the block level
}
f();

function letVariableScopeES6(){
   if(true){
     // variables are blocked scope and cannot access outside
     let temp = 123;
     // variables in with let are mutuable and can be changed
     temp = "hello you changed me";
     console.log(temp);

   }
   //console.log(temp); // error blocked scoped is not defined
}
letVariableScopeES6();

  var a = "car";
  if(true) {
    var a = 4;
    console.log("What is a inside a block ", a);
  }
  console.log("What is a ", a);
  console.log("clicked");

  console.log("SETTIMEOUT what does it print");
  for (var i = 1; i < 5; i++){
  setTimeout(() => {
    console.log("Var declartion", i);
  }, 1000);
  }
  // block scope
  for (let i = 1; i < 5; i++){
   setTimeout(() => {
     console.log("Let declaration", i);
   }, 1000);
   }

function varVariableES5(){
    if(true){
      var temp1 = 222;
    }
    console.log("ES5 are function scoped(hoisting variables)", temp1); // you can access temp1 value because the variable are hosited in ES5
}
varVariableES5();


// var in for loop
function varInForLoopES6(){
  const arr = [];
  const myArray = [1,2,3];

  for(var i of myArray){
     arr.push(() => i);
  }
  console.log(arr.map(x => x())); // [3,3,3] // because var is hoisted inside for loop


}
varInForLoopES6();


// let in for loop
function letInForLoopES6(){
  const arr = [];
  const myArray = [1,2,3];
  // use const in loops because only one binding is created per iteration
  for(const i of arr){ // const and block level variable is not hoisted
     arr.push(() => i);
  }
  console.log("My array data ", arr);
}

// loop through programming languages
letInForLoopES6();
// constans in object declaration

// example with let inside for loop block level
function createThreeFunctionInArray(){
   var arr = [];
   for(var i = 0; i<3; i++ ) {
     let j =i; // this fix the problem with hoisiting and closure variables.
       arr.push(function(){
        console.log(j);
      });
   }
   return arr;
}

var f = createThreeFunctionInArray();
f[0]();
f[1]();
f[2]();


const myModule = {
    hello: 'hi',
    goodbye : 'bye'
};

console.log(myModule);
myModule.hello = 'hi there ,changed property name even that it is a constant object';
console.log(myModule);
// however you cannot redeclare an object with ES6
// cannot be redeclared
//const myModule = {
//  hello : 'hello',
//  goodbye: 'good'
//};

//console.log(myModue);
