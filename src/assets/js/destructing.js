/********************************************
*   Destructing objects ES6                 *
*                                           *
**********************************************/

console.log("================== Destructing objects ES6 =================");
    const personObject = {
        name: ' Naim',
        lastName: "Latifi"
      };

    // accessing property on object with destructing ES6
    let { name, lastName } = personObject;

  // what ES6 does here is that it assign name and lastName as variables as :
    // let name = personObject.name;
    // let lastName = personObject.lastName;
    // console.log(name1, + lastName1);
    console.log(name);
    console.log(lastName);
    // if there is no property on object that undefined is returned
    let {birthday} = personObject;
    console.log(birthday);

    // we can add parameters as in function for destructing object
    let {city  =  'Stockholm'} = personObject;
    console.log(city);


    // default valuue added to personObject
    const object1 = {
      cityName: "stockholm",
      programmingLanguage : "JS"
    }
    // if there is no property in object default value is provided like birthdayCity,
    // this works similarly as to functions with default params
    let {cityName, programmingLanguage, birthdayCity = 'stockholm'} = object1;
    console.log(object1);






   console.log("================ Destructing arrays in ES6 ==========");
    // similar as destructing objects but we use square brackes instead []
    let myArrayData = ['1', '2', '3'];
    let [one] = myArrayData;

    // get the rest of parameters use spear operator with ...rest
    let [firstElementInArray, ...rest] = myArrayData;
    console.log("First element on array " , firstElementInArray);
    console.log("get the whole array- ", rest); // [1,2,3]

    // if we are interested to destruct only the particular item from array then we can do like this

    let [, , bringMeThirdElement ] = myArrayData;
    console.log("Third element from array " , bringMeThirdElement);


    // swiping variables ES5
    let a = 1;
    let b = 2;
    let temp;

    temp = a;
    a = b;
    b = temp;

    //console.log(a);
    //console.log(b);
    // swiping with ES6
    let c = 3;
    let d = 4;

    [c, d ] = [d, c];
    console.log(c);
    console.log(d);
