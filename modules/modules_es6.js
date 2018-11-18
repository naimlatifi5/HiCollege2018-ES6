/********************************************
 *        Modules                            *
 *                                           *
 ********************************************/
//console.log("*************import modules ***********");
// namespacing in ES5
// problem with namepsace is name collision and security concersn
var nameSpace = nameSpace || {};
nameSpace.module1 = function () {
  console.log("first module")
};
console.log(nameSpace);
console.log(nameSpace.module1);

// import only two bindings
console.log("============ ES6 modules ============");
import {
  taxRate,
  helloWorld
} from './helpers_es6.js';
console.log("couponCodes example imported here ", taxRate);
console.log(helloWorld());

// // we can also import the complete module
import * as helpers from './helpers_es6.js';
console.log(helpers);

// // we can rename the exports functions like
import {
  helloWorld as myHelloWorld
} from './helpers_es6.js';
console.log(myHelloWorld());

// importing default function 

import squareNumber from './default_export.js';
console.log("My square number is " + squareNumber(5));