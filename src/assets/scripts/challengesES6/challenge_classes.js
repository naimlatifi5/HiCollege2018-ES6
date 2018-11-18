/* 
 *  Challenge 1 with Classes in ES6      *
 */

// 1. Alert the the code below this line
// Crate the Class so that you can create other objects such 'volvo' from the crated class
//let Car = undefined;
class Car {
    constructor(name) {
        this.name = name;
    }
    model(type) {
        return `I have an ${type} model`;
    }
}

const volvo = new Car('Volvo');
console.log(volvo.name) // => should print 'Volvo'
console.log(volvo.model('S80')) // should print  "I have an S80 model"