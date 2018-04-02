/********************************************
*        Default parameters in ES6          *
*                                           *
**********************************************/

console.log("*********** Template literals ************");

let myName = 'Naim';

console.log(`Literal templates-Hello there template and ${myName} `);


const objectArrays = [];
const obje1 = {
  name: 'Naim',
  lastName: 'Latifi'
};

const obje2 = {
  name:'George',
  lastName: 'Andersson'
};

objectArrays.push(obje1, obje2);
console.log(objectArrays);

// function with tempalte ES6
const template = name =>

 `<div>
     ${name.map(item => `
      <span>${item.name}</span>
      <span>${item.lastName}</span>
      ` ).join('')}
  </div>`;
  // create an div element
  var divElement = document.createElement('div');
      divElement.classList.add('template-literal-ie6');
      divElement.innerHTML = template(objectArrays);
      document.body.appendChild(divElement);
  console.log(template(objectArrays));

  // Tagged template with function string.raw

  // if we write template without String.raw and \n will return new line on template

  let myTaggedTemplate = String.raw `This is a multilne template string
   another example with tagged function \n and will not create a new line
  `;
  console.log(myTaggedTemplate);

  function foo(strings, ...values) {
      console.log("Strings " , strings); // string value on template "hello there"
      console.log("Values" , values); // placeholders used in template (description)
  }

  let description = "awesome with tagged templates";
  console.log(foo`Hello there ${description}`);


 function tags(stringValue , ...values) {
     // implementation
 }




 let number1 = 3
 let number2 = 4

 let template2 = tags `Hello tags ${number1} ${number2}`; // numb1 and num2 are placeholder on array return from tags function

 console.log(template2);






 //ES6
 const myObectTemplate = {
     learn: 'Javascript',
     hiCollege: 'HIQ'
 }

 console.log("============= Template created with ES6 ==============");

 let myMessage = `Hello I am here because I want to learn ${myObectTemplate.learn}
  from HiCollege here at ${myObectTemplate.hiCollege}
 `;
 console.log(myMessage);

 // ES5
 console.log("==========Template created with ES5 =========== ");
 let myMessageES5 = "Hello I am here because I want to learn " + myObectTemplate.learn + "\n" +
                    "from HiCollege here at " + myObectTemplate.hiCollege;

  console.log(myMessageES5);
