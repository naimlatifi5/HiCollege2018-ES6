
console.log("*********** From cunstructors to classes ***************");

    function Person(name){
       this.name = `Hello from constructor function ${name}`;
    }

    Person.prototype.displayName = function(){
      return this.name;
    }

    let person1 = new Person('Naim');
    console.log(person1.displayName());
    console.log("Is instance of Person ? ", person1 instanceof Person);




console.log("============== Classes ==============");
// class declaration
class Person1 {
  // equivalent to the constructor function Person
  constructor(name) {
    this.name = `Hello from classes ES6 ${name}`;
  }

  displayName() {
    return this.name;
  }
}

// classes are not hoisted, calling person2 before class declaration throws an error.

let person2 = new Person1('Naim');
console.log(person2.displayName());
console.log(typeof Person1) // function
console.log("Is it instance of class Person1 ?" , person2 instanceof Person1);


// similarly to function declaration there can be two kinds of class declaration ; class expression and class declaration

// class expression - anonymous
const myClass1 = class {

}

// class expression with name

const myClass2 = class Me {
   getClassName(){
     console.log(typeof Me);
     return Me.name;
   }
}

const myObjecClass = new myClass2();
console.dir(myObjecClass.getClassName());
//console.log(Me.name) // error and cannot access outside



console.log("===============Inheritance=============");

class Father1 {

  constructor(name){
  this.fatherName = "Anders";
  this.name = name;
  this.addresses = ['Söderberga', 'Nacka'];
  }
  sayName() {
    return  this.name;
  }

  sayFathersName() {
    return this.fatherName;
  }

  getAddresses() {
    return this.addresses;
  }

}


class Child3 extends Father1 {
    constructor(name,age){
     // no need for stealing constructor here instad we use super
      super(name)
      this.age = age;
    }

    getChildAge() {
      return this.age;
    }

}

console.log("child")
let firstChild = new Child3("Leo", '2');
console.log(firstChild.sayFathersName());
console.log(firstChild.sayName());
console.log(firstChild.getChildAge());
// new friends member
firstChild.addresses.push('New address');
console.log(firstChild.addresses);

let secondChild = new Child3('Beo', '5');
console.log(secondChild.sayFathersName());
console.log(secondChild.sayName());
console.log(secondChild.getChildAge());
console.log(secondChild.getAddresses());
