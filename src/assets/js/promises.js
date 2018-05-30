initPromise() {
      // we call isGreaterThan
    isGreaterThanES5(5,2, function(result) {
        if(result) {
          console.log("It is greater than")
        }else {
          console.log("It is smaller than");
        }
      })

      console.log("ES6 featrures and promises")
      // ES6 and promise
      isGreaterThanES6(3,2)
           .then(result => {
             console.log("Greater")
           })
           .catch(result => {
             console.log("smaller")
           })
   },
   // async example we call an callback with ES5 in order to do somethign with result
   isGreaterThanES5(a, b, callback) {
     let greater = false;
     if(a > b) {
       greater = true;
     }
     callback(greater);
   },

   isGreaterThanES6(a,b) {
     return new Promise((resolve, reject) => {
       if(a > b) {
         resolve(true);
       }else {
         reject(false);
       }
     });
