/********************************************
*     Arrow function ES6                    *
*                                           *
**********************************************/
console.log("============ Arrow function ============");
// ES5 function expression declaration
var multipleNumber = function(num1, num2){
    return num1 * num2;
};
console.log('Multiplication is = ', multipleNumber(3,3));
// ES6- shorter syntax , no need for function name and return value
// expression after arrow is always return
// Note that if you have only one arguments in function with the arrow function you can ommit the parentheses
// instead of (num1) => 'expression' you can write num1 => 'expression'
// create an arrow function whenever we use an anonymous function.
// if we have no arguments we can use substitute  () with  "_"

let multipeNumberES6 = (num1, num2) => num1 * num2;
  console.log("Multiplication ES6 = " , multipeNumberES6(4,4));
// whenever you have one expression you do not need curly braces see above otherwise if your code has multople lines with expression then use return and curly braces
let multipleNumberES6 = (num1, num2) => {
  return num1 * num2;
}


// ES6 arrow function -if there is no parameter then curly braces are needed around function body
let getDocument = _ => {
   console.log("Document element" , document);
};
getDocument();

// arrow functions on arrays
const phones = [
  { name: 'iphone',
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

const arrayData = ['1', '2', '3'];
    arrayData.forEach(function(element){
    console.log(element);
});

// ES5
const mapWithPricePhones = phones.map(function(item){
      return item.price;
});

//console.log(phones);
console.log('Phones by price ', mapWithPricePhones);
console.log(typeof mapWithPricePhones); // object

// ES6
 // only one parameter so remove parenthese, we have only one expression remove return statement
 let mapWithNamePhones = phones.map(element => element.name );
 console.log("Phone by names arrow function ES6 " , mapWithNamePhones);

// ES6 filter by price
let filterByPrice = phones.filter(item => item.price == '3000kr');
console.log("Filtered by price arrow function ES6 " , filterByPrice);


const myModuleExample = {
  hi:'Hello data here',
  parseData:function(){

    this.greeting(function(returnData){
       console.log(returnData);
       console.log(this); // window
       //console.log(this.hi); // undefined
    });
  },
  greeting:function(callback){
    callback();
  }
};

const myModuleExampleES6 = {
  hi:'Hello ES6 and arrow function',
  parseData:function() { // not arrow function because it redefined the scope of this to window global object
    this.greeting((hellothere) => { // arrow will have as parent object so this is object
        console.log('Not global anymore', this.hi);
    });
  },
  greeting:function(callback){
    callback();
  }
};

console.log(myModuleExampleES6.parseData());
console.log(myModuleExample.parseData());

let objectI = {
   notThis:() => {
     console.log(this); // window, never use arrow function inside object methods
   }
};



console.log("=============== this with arrow function ===============");
// ES5
var objectES5 = {
  name: "ES5-Print after 2 seconds",

  printWithDelay: function(){
    //var self = this; // work around
    window.setTimeout(function(){ // function creates their own this
        this.textToPrint(); // change ti that
      // bind(this) -- to skip that and this
    }.bind(this), 1000); // print after two seconds or bind()
  },

  textToPrint: function(){
   console.log(this.name);
 }
}

objectES5.printWithDelay();


// ES6 and arrow function
const objectES6 = {
  name : "ES6-Print me after 2 seconds",
  printWithDelay :  function(){
    window.setTimeout(() => {
      this.textToPrint();
    }, 2000);
  },
  textToPrint: function(){
    console.log(this.name);
  }
}
objectES6.printWithDelay();


const objectButtonES6 = {
   buttonName: 'MyButton1',
   button : document.getElementById('myButton1'),
   endAnimation: function(){
     this.button.classList.add('active');
     setTimeout(() => { // lexical binding  "this" is set to function defined not used.
       this.button.classList.remove('active');
       this.button.classList.add('active-again');
       console.log("removed class is-open and active this ES6 ");
     }, 4000);
   },

   buttonClick: function(){
     // sorrounding scope here is buttonclick methods where this it refers to the object
      this.button.onclick = () => {
        console.log("yes got button name" , this.buttonName);
      };
   }
}

objectButtonES6.endAnimation();
objectButtonES6.buttonClick();

// problem with ES5 and this
const objectButtonES5= {
   button : document.getElementById('myButton'),
   endAnimation: function(){
     this.button.classList.add('active');
      window.setTimeout(function() {
       this.button.classList.remove('active');
       this.button.classList.add('active-again');
       console.log("removed class is-open and active with ES5")
     }.bind(this), 4000); // this does not refers to the object method endAnimation
               // overcome the problem use bind
   }
}
console.log("****************** End of arrow function **************");

console.log("================ Where not to use arrow function ============");

objectButtonES5.button.addEventListener('click', function(e){
  console.log("hello there");
  this.style.fontSize = '20px';
});

objectButtonES6.button.addEventListener('click',  (e) => {
   // if we can if this is === window - try in console- here will return undefined because of gulp and babel
   console.log(this === window) // true
   // to overcome issue we can access with e.srcElement
   //this.style.fontSize = "50px" error because the arrow function lexica scode is created when defined not executed and gets to the outer function
   e.srcElement.style.fontSize = "50px";

});


// case when arrow function would not work in object methods
const profile = {
    name: 'Naim',
    getName: function(){ // if replacing with ()  => this would not be the name but global scope
         return this.name;
    }
};
console.log(profile.getName());


// on constructor function
const Profile = (name) => {
  this.name = name;
}
//let firstProfile = new Profile() // throw and error
function Profile1(name){
  this.name = name;
}


// in prototype methods
Profile1.prototype.displayName = function(){
  console.log("This is my name-" , this.name);
}


var firstProfile1 = new Profile1("Hello there");
console.log(firstProfile1.displayName());


Profile1.prototype.displayNameArrowFunction = () => {
    console.log("Value of this ", this);
    console.log(window === this);
}

var secondProfile1 = new Profile1("With Arrow function");
console.log(secondProfile1.displayNameArrowFunction());
