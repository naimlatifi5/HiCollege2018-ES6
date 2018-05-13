
/********************************************
*        Modules                            *
*                                           *
********************************************/
//console.log("*************import modules ***********");
// namespacing in ES5
// problem with namepsace is name collision and security concern
var nameSpace = nameSpace || {};
  nameSpace.module1 = function(){console.log("first module")};
  console.log(nameSpace);
  console.log(nameSpace.module1);

console.log("============ ES6 modules ============");
import {couponCodes} from './helpers_es6';
console.log("couponCodes example imported here " , couponCodes);

import {helloWorld} from './helpers_es6';
console.log(helloWorld());

 // Name binding are const and we cannot create another variable with the same name like let helloWorld => throws an erro


// we can also import the complete module
import * as helper from  './helpers_es6';
console.log(helper);


// import only two bindings
import { addTax, discountPrice } from './helpers_es6';

 console.log(addTax(4));
 console.log(discountPrice(44, 29));


 // we can rename the exports functions like

 import {helloWorld as myHelloWorld} from './helpers_es6';

 console.log(myHelloWorld());

 
