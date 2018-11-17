/* 
    This challenge is to understand how promises works in ES6
*/

// #Challenge1
// Try to undestand the code within function getUserExample() and make a new request to fake rest api.
// Return the first response and then append the response to the DOM (hint: there is a div in html file called "appendUserData" where you can append your template) that will print the name, email and website to the user
// After that from the same function make a new request and return a new promise which will return the response by using the user2 API url and print it in the console.
// if there is a wrong url given then display to user the error
const user1 = 'https://jsonplaceholder.typicode.com/users/1';
const user2 = 'https://jsonplaceholder.typicode.com/users/2';

function getUserExample(url) {
    //Return a new promise object
    return new Promise((resolve, reject) => {
        // Create a variable and assign a new XMLHttpRequest object to it.
        let asyncReq = new XMLHttpRequest();
        //Make request to url endpoint, using GET request.
        asyncReq.open('GET', url);
        asyncReq.onload = function () {
            if (asyncReq.status == 200) {
                // Recieved data, resolve promise.
                resolve(asyncReq.response);
            } else {
                // Reject promise, wrong status.
                reject(Error(asyncReq.statusText));
            }
        }
        asyncReq.onerror = () => {
            // Error occurred, reject Promise.
            reject(Error("Network Error"));
        }
        // Send request
        asyncReq.send();
    });
}

console.log("=============== My solution ==============");