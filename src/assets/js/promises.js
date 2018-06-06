//TODO- read article for promise https://www.datchley.name/es6-promises/



   // async example we call an callback with ES5 in order to do somethign with result
   function isGreaterThanES5(a, b, callback) {
     let greater = false;
     if(a > b) {
       greater = true;
     }
     callback(greater);
   }


   function isGreaterThanES6(a,b) {
     return new Promise((resolve, reject) => {
       if(a > b) {
         resolve(true);
       }else {
         reject(false);
       }
     });
   }
   // terrible and it is called callback hell and looks like pyramide if we would have more callbacks
   function callbackHell(){
      console.log('start!');
      setTimeout(function () {
        console.log('ping');
        setTimeout(function () {
          console.log('pong');
          setTimeout(function () {
            console.log('end!');
            setTimeout(function(){
              console.log('Booom')
            }, 4000);
          }, 1000);
        }, 2000);
      }, 3000);
   }

   function promiseCreation() {
     let promise = new Promise((resolve, reject) => {
       // when success resolve
       let value = "success";
       // a promise can be fullfilled- where promise succedded
       //   rejected- promise failed
       // pending - not fullfilled not rejected yet
       // settled - fullfiled or rejected
       resolve(value);
       // when an error ocurred reject
       reject(new Error('Something went wrong'));
     })

     console.log(promise);
     console.log("Type of promise ", typeof promise);
     // then() method to execute the code when the promise is settled
     promise
      .then(response => {
       console.log(response)
       return 'another promise';
      })
      // when using then a new promise is created and returned in this case another promise
      // Much cleaner and flat with then() compared to callbackhell
      .then( response => {
        console.log(response);
      })
      .catch( error  =>  {
        console.log("Something when wrong", error);
      })
   }

   function multiplePromisesInOne() {
      let doSomething = new Promise(resolve => {
        resolve('doSomething')
      });
      let doSomethingElse = new Promise(resolve =>  {
        resolve('I am doing something else here')
      });
      let oneMorePromise = new Promise(resolve => {
        resolve('Well I am having one more promise here')
      });

      Promise.all([
        doSomething,
        doSomethingElse,
        oneMorePromise
      ])
      .then( response => {
        let [first, second,third] = response;
        console.log("First promise", first);
        console.log("Second promise", second);
        console.log("Third promise", third);
      })

   }

    function initPromise() {
         // we call isGreaterThan
        isGreaterThanES5(5,2, function(result) {
           if(result) {
             console.log("It is greater than")
           }else {
             console.log("It is smaller than");
           }
         });

         console.log("ES6 featrures and promises")
         // ES6 and promise
         isGreaterThanES6(3,2)
              .then(result => {
                console.log("Greater")
              })
              .catch(result => {
                console.log("smaller")
        })
        // callback hell
        console.log("======Callbackhell =========")
        callbackHell();
        console.log("========= Promise creation ========");
        promiseCreation();
        console.log("======== Multiple promises =========");
        multiplePromisesInOne();
    }
 initPromise();
