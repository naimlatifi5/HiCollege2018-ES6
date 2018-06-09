console.log("========== ES5 default parameters ===========")
function params(name, lastName, birthday){
  console.log("Info : "  + name + lastName + birthday);
}

params ('Naim', 'Latifi', '8605225393');
// default parameter if not givem
params('Naim', 'Latifi'); // Naim Latifi undefined

function defaultParamsBirthdayES5(name, lastName, birthday){
  birthday = birthday || '19860522';
  console.log("Info:" + name + " " +  lastName +  " " +  birthday);
}

//defaultParamsBirthdayES5('Naim', 'Latifi');
defaultParamsBirthdayES5('Naim', 'Latifi', '860522');

function defaultParamsName(name , lastName, birthday){
   let setName  = name ? name : 'Naim';
   console.log(setName + lastName + birthday);
}
defaultParamsName('Latifi', '860522');

console.log("========== ES6 default parameters =============");
// ES6
function defaultParamsBirthdayES6 (name , lastName, birthday = '19860522'){
   console.log(name , + '' + lastName + ' ' + birthday);
}
defaultParamsBirthdayES6('Naim', 'Latifi');


  function numberAdditions(num1, num2){
    num1 = num1 || 0;
    num2 = num2 || 0;
    return num1  + num2;
  }

 console.log("Without parameter" , numberAdditions());
 console.log("Additions : ",numberAdditions(3,4));

// ES6 parameters
function numberAdditionsES6(num1 = 0 , num2 = 0){
  return num1 + num2;
}

console.log("ES6 without parameter",numberAdditionsES6());
console.log("ES6 with parameter" , numberAdditions(4,5));

/********************************************
*        Rest parameter in  ES6               *
*                                           *
**********************************************/

  console.log("========== Rest and spread ES5 vs ES6 ===========");
  // ES5;
  console.log("======= ES5 handling arguments =========");
  function logAllArguments(){
    console.log("Arguments in function log all argument ", arguments);
    console.log("type of arguments " , typeof arguments); // they are like array object but not real array and does not support methods and properties for an array
     for(var i=0; i<=arguments.length; i++){
        console.log(arguments[i]);
     }
     console.log("we have ", arguments.length , "arguments");
     //let's try to use forEach method to map element
      // work around to make forEach work Array.prototype.forEach.call(arguments , function(){})
      //arguments.forEach((val, index) => { // type error because it does not contain array methods thus ew have to come work around and slplice to array
      //console.log(val);
     //});

     let argumentsAsRealArray = Array.prototype.slice.call(arguments);
     console.log("Hello array arguments", argumentsAsRealArray);
     argumentsAsRealArray.forEach( (val, index) => {
       console.log("Value is ", val);
       console.log("Index is ", index);
     });
  }
  logAllArguments('naim', 'latifi');


  console.log("========= ES6 rest operator =========")
  // with rest operator, the parameter receives remaining parameters via an Array
  function logAllArgumentsES6(...argumentsWithRest){
     console.log("With rest operator we have a real array ", argumentsWithRest);
     // we can use forEach
     argumentsWithRest.forEach((val, index) => {
       console.log("value is ", val);
       console.log("index is ", index);
     });
  }
  logAllArgumentsES6('test1', 'test2');


  function gatherTheRestParameter(str1, ...rest){ // note the ...rest parameters must be at the end
    console.log(str1) // want to print only this one the rest give me the array
    console.log(rest);
  }

 gatherTheRestParameter("hello there Rest", 'nice to have you in array', 'cool stuff here');






console.log("============ Spread operator ===============");
  // example 2
  let arr1 = [1,2,3];
  let arr2 = [4,5,6];

  //ES5 case scenario ========== comment out to test
  //arr1.push(arr1,arr2); // inside arr1 we will add arr1, arr2
  // with apply we will add the context for arr1 to arr2 inside arr1
  //arr1.push.apply(arr1,arr2); // result [1,2,3,4,5,6]
  //console.log(arr1);

  // ES6 array with spread operator
  arr1.push(...arr2);
  console.log("Array after spread", arr1);

  // concating array with javascriot
  var arr3 = ['a', 'b', 'c'];
  var arr4 = ['d', 'e','f'];
  // in ES6 with the use of spread function we can do like this
  const newArray = ['anotherValuewhatever', ...arr3, ...arr4]; // we can add other values to the array
  console.log(newArray);

//console.log(product(1,2,3,4,5));

function join(array1, array2) {
  return  array1.concat(array2)
}

function joinSpreadOperator(array1, array2){
  return [...array1, ...array2]
}

console.log("Concat : ",  join(arr3, arr4));
console.log("Spread: " , joinSpreadOperator(arr3, arr4));

function addToArray(...addTo){ // rest we want a list with arguments
  console.log("Array with rest operator" , addTo);
  let result = 0;
   for(let i of addTo){ // es6 for loop
     result = result + i;
   }

  return result;
}

console.log(addToArray(10,20,30)); // passing parameter with rest operatopr

// spread operator is the same but as rest but it differens when you use it

let myArray = [1,2,3,4,5];
console.log("Spread and split array", ...myArray); // spread and split the array


// example with ...rest
const objectNames = ['Naim', 'Anders' , 'Joel'];
function printName (name1, name2 , name3){
  console.log(name2);
}
// what if we want to print only the first name by passing the objectName

printName.apply(null, objectNames);
// with ES6 and rest operator
printName(...objectNames); // shorter right ?

// ...Spread operator
let array1 = [1,2,3,4];
let array2 = ['a', 'b' ,'c'];
// destructing with ...spread
let [a, b , ...theRest] = array1;
console.log(a);
console.log(b);
console.log(theRest);
