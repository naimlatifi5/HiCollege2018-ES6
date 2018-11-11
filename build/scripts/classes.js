"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("*********** From cunstructors to classes ***************");

function Person(name) {
  this.name = "Hello from constructor function " + name;
}
Person.prototype.displayName = function () {
  return this.name;
};

var person1 = new Person('Naim');
console.log(person1.displayName());
console.log("Is instance of Person ? ", person1 instanceof Person);

console.log("============== Classes ==============");
// class declarationd 

var Person1 = function () {
  // equivalent to the constructor function Person
  function Person1(name) {
    _classCallCheck(this, Person1);

    this.name = "Hello from classes ES6 " + name;
  }

  _createClass(Person1, [{
    key: "displayName",
    value: function displayName() {
      return this.name;
    }
  }]);

  return Person1;
}();

// classes are not hoisted, calling person2 before class declaration throws an error.

var person2 = new Person1('Naim');
console.log(person2.displayName());
console.log(typeof Person1 === "undefined" ? "undefined" : _typeof(Person1)); // function
console.log("Is it instance of class Person1 ?", person2 instanceof Person1);

// similarly to function declaration there can be two kinds of class declaration ; class expression and class declaration

// class expression - anonymous
var myClass1 = function myClass1() {
  _classCallCheck(this, myClass1);
};

// class expression with name

var myClass2 = function () {
  function Me() {
    _classCallCheck(this, Me);
  }

  _createClass(Me, [{
    key: "getClassName",
    value: function getClassName() {
      console.log(typeof Me === "undefined" ? "undefined" : _typeof(Me));
      return Me.name;
    }
  }]);

  return Me;
}();

var myObjecClass = new myClass2();
console.dir(myObjecClass.getClassName());
//console.log(Me.name) // error and cannot access outside


console.log("===============Inheritance =============");

var Father1 = function () {
  function Father1(name) {
    _classCallCheck(this, Father1);

    this.fatherName = "Anders";
    this.name = name;
    this.addresses = ['Söderberga', 'Nacka'];
  }

  _createClass(Father1, [{
    key: "sayName",
    value: function sayName() {
      return this.name;
    }
  }, {
    key: "sayFathersName",
    value: function sayFathersName() {
      return this.fatherName;
    }
  }, {
    key: "getAddresses",
    value: function getAddresses() {
      return this.addresses;
    }
  }]);

  return Father1;
}();

console.log("========== ES5 inheritance ========");

var Child3 = function (_Father) {
  _inherits(Child3, _Father);

  function Child3(name, age) {
    _classCallCheck(this, Child3);

    var _this = _possibleConstructorReturn(this, (Child3.__proto__ || Object.getPrototypeOf(Child3)).call(this, name));
    // no need for stealing constructor here instad we use super


    _this.age = age;
    return _this;
  }

  _createClass(Child3, [{
    key: "getChildAge",
    value: function getChildAge() {
      return this.age;
    }
  }]);

  return Child3;
}(Father1);

console.log("child");
var firstChild = new Child3("Leo", '2');
console.log(firstChild.sayFathersName());
console.log(firstChild.sayName());
console.log(firstChild.getChildAge());
// new friends member
firstChild.addresses.push('New address');
console.log(firstChild.addresses);

var secondChild = new Child3('Beo', '5');
console.log(secondChild.sayFathersName());
console.log(secondChild.sayName());
console.log(secondChild.getChildAge());
console.log(secondChild.getAddresses());

console.log("========== WITH ES5 inheritance==========");

function Father1(name) {
  this.name = name;
  this.fathersName = 'Anders';
  this.addresses = ['Söderberga', 'Nacka'];
}
Father1.prototype.sayFatherName = function () {
  console.log(this.fathersName);
};

function Child3(name, age) {
  // stealing constructor
  Father1.call(this, name);
  this.age = age;
}
// all properties
Child3.prototype = new Father1();
Child3.prototype.sayName = function () {
  return this.name;
};
var firstChildES5 = new Child3('Joe', 22);
console.log("First child ", firstChildES5);
console.log(firstChildES5.sayFatherName());
console.log(firstChildES5.sayName());