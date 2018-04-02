/********************************************
*    Object literals enhancement ES6        *
*                                           *
**********************************************/
console.log("************Object literals enhancement ES6 ******************")
// Object literals enhancements with ES6
let color = "blue"
const Car = {
  //color: color, // if we have a key/ value with the same name then we can omit and have only one name
  color,
  drive: function(){  // functions keyword we can omit for functions and instead have the parenthese only
    return "Wiooo"
  },
  getColor: function(){
    return this.color;
  }
}

console.log("Hello my car ", Car.color);
console.log(Car.drive());


var object1 = {
  print1: function(){
    console.log('print1')
  },
  print2: function(){
    console.log('print2');
    this.print1();
  }
}

console.log(object1.print2());

// ES6 has method syntax definition
const object2 = {
  print3(){
    console.log("print 3");
  },
  print4(){
    this.print3();
  }
}
console.log(object2.print3());
