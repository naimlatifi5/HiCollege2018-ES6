/********************************************
 *     Arrow function ES6                    *
 *                                           *
 **********************************************/
console.log("*************** Arrow function ES6 ******************");

console.log("========== ES5 function expression declaration ===========");
var multipleNumber = function (num1, num2) {
  return num1 * num2;
};

console.log('Multiplication is = ', multipleNumber(3, 3));



console.log("========== ES6 syntax with arrow function =============");
// ES6- shorter syntax , no need for function name and return value
// expression after arrow is always return
// Note that if you have only one arguments in function with the arrow function you can ommit the parentheses
// instead of (num1) => 'expression' you can write num1 => 'expression'
// create an arrow function whenever we use an anonymous function.
// if we have no arguments we can use substitute  () with  "_"
let multipeNumberES6 = (num1, num2) => num1 * num2;
console.log("Multiplication ES6 = ", multipeNumberES6(4, 4));

// whenever you have one expression you do not need curly braces see above otherwise if your code has multople lines with expression then use return and curly braces
let multipleNumberES6 = (num1, num2) => {
  return num1 * num2;
};
// ES6 arrow function -if there is no parameter then curly braces are needed around function body
let getDocument = _ => {
  console.log("Document element", document);
};
getDocument();

// arrow functions on arrays
const phones = [{
    name: 'iphone',
    price: '6000kr'
  },

  {
    name: 'samsung',
    price: '5500kr'
  },

  {
    name: 'Nokia',
    price: '3000kr'
  },

  {
    name: 'Nokia2 ',
    price: '3000kr'
  }
];

console.log("=========== ES5 mapping arrays ============");
const mapWithPricePhones = phones.map(function (item) {
  return item.price;
});
//console.log(phones);
console.log('Phones by price ', mapWithPricePhones);
console.log(typeof mapWithPricePhones); // object

console.log("========== ES6 mapping arrays syntax with arrow function ============");
// ES6
// only one parameter so remove parenthese, we have only one expression remove return statement
let mapWithNamePhones = phones.map(element => element.name);
console.log("Phone by names arrow function ES6 ", mapWithNamePhones);

// ES6 filter by price
let filterByPrice = phones.filter(item => item.price == '3000kr');
console.log("Filtered by price arrow function ES6 ", filterByPrice);









console.log("============ Arrow function inside object methods ES6 =============");
const myModuleExampleES5 = {
  hi: 'Hi from ES5',
  parseData: function () {
    this.greeting(this.hi)
  },
  greeting: function (param) {
    console.log(param);
  }
};

const myModuleExampleES6 = {
  hi: 'Hello from ES6',
  parseData: function () { // not arrow function because it redefined the scope of this to window global object ()=> 
    this.greeting(this.hi);
  },
  greeting: function (param) {
    console.log(param)
  }
};
console.log(myModuleExampleES6.parseData());
console.log(myModuleExampleES5.parseData());
// simple example
let objectI = {
  printMe: "Hello property",
  notThis: function () {
    console.log("What is this keyword: ", this.printMe); // window, never use arrow function inside object methods
  }
};

objectI.notThis();


console.log("=============== How this is determined with arrow function ===============");

// ES5 syntax
var objectES5 = {
  name: "ES5-Print after 1 seconds",
  printWithDelay: function () {
    //var self = this; // work around
    window.setTimeout(function () { // function creates their own this
      this.textToPrint(); // change ti that
      // bind(this) -- to skip that and this
    }.bind(this), 1000); // print after two seconds or bind()
  },
  textToPrint: function () {
    console.log("ES5 property name ", this.name);
  }
};
// execute function
objectES5.printWithDelay();



// ES6 and arrow function
const objectES6 = {
  name: "ES6-Print me after 2 seconds",
  printWithDelay: function () {
    window.setTimeout(() => {
      this.textToPrint();
    }, 2000);
  },
  textToPrint: function () {
    console.log(this.name);
  }
};
objectES6.printWithDelay();


// Example real time
const objectButtonES6 = {
  buttonName: 'MyButton1',
  button: document.getElementById('myButton1'),
  endAnimation: function () {
    this.button.classList.add('active');
    window.setTimeout(() => { // lexical binding  "this" is set to function defined not used.
      this.button.classList.remove('active');
      this.button.classList.add('active-again');
      console.log("removed class is-open and active this ES6 ");
    }, 4000);
  },

  buttonClick: function () {
    // sorrounding scope here is buttonclick methods where this it refers to the object
    this.button.onclick = () => {
      console.log("yes got button name", this.buttonName);
    };
  }
}

objectButtonES6.endAnimation();
objectButtonES6.buttonClick();
objectButtonES6.button.addEventListener('click', (e) => {
  e.srcElement.style.fontSize = "50px";
});


// problem with ES5 and this
const objectButtonES5 = {
  button: document.getElementById('myButton'),
  endAnimation: function () {
    this.button.classList.add('active');
    window.setTimeout(function () {
      this.button.classList.remove('active');
      this.button.classList.add('active-again');
      console.log("removed class is-open and active with ES5");
    }.bind(this), 6000); // this does not refers to the object method endAnimation
    // overcome the problem use bind
  }
};

objectButtonES5.endAnimation();
console.log("****************** End of arrow function **************");



// on constructor function
const Profile = (name) => {
  this.name = name;
};

/* Uncomment below to test */

//let firstProfile = new Profile() // throw and error
//console.log(firstProfile);

console.log("============= ES5 constructor functions ============");

function Profile1(name) {
  this.name = name;
}
// in prototype methods
Profile1.prototype.displayName = function () {
  return this.name;
};
let myProfile = new Profile1('Naim ');
console.log("My profile is : ", myProfile.displayName());

Profile1.prototype.displayNameMethodWithArrowFunction = () => {
  return this.name;
}
/* UNCOMMENT BELOW TO TEST */
//console.log(myProfile.displayNameMethodWithArrowFunction());