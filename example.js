// Define an object called myobj with a property 'name'
const myobj = {
    name: "fred"
};

// Log a separator line and the content of myobj
console.log("--------");
console.log(myobj);

// Define a method called method1 within myobj
myobj.method1 = function() {
    // Define function a and arrow function b within method1
    const a = function() {
        console.log(globalThis === this); // Check if 'this' refers to the global object
        console.log(this.name); // Log the value of 'name' property of 'this'
    };
    const b = () => {
        console.log(globalThis === this); // Check if 'this' refers to the global object
        console.log(this.name); // Log the value of 'name' property of 'this'
    };

    // Call functions a and b to demonstrate their behavior with 'this'
    a();
    b();

    // Log a separator line
    console.log("--------");

    // Define another object called otherobj with a property 'name'
    const otherobj = {
        name: "sarah"
    };
    // Log the content of otherobj
    console.log(otherobj);
    console.log("--------");

    // Add functions a and b as methods to otherobj and call them
    otherobj.a = a;
    otherobj.b = b;
    otherobj.a();
    otherobj.b();
};

// Call method1 of myobj to demonstrate its behavior
myobj.method1();

// Log another separator line
console.log("--------||--------");

// Create a promise resolved with a value of 1 and log it
const promiseFromValue = Promise.resolve(1);
console.log(promiseFromValue);

// Create a promise resolved with a value of 2 using a constructor function and log it
const promiseFromFunction = new Promise(
    function(resolve,reject){
        resolve(2);
    }
);
console.log(promiseFromFunction);

// Log a separator line
console.log("--------");

// Create two promises that resolve with random delays and log their values
const promise1 = new Promise(
    function(resolve,reject){
        setTimeout(()=>{
            resolve(1);
        }, Math.random()*100);
    }
);

const promise2 = new Promise(
    function(resolve,reject){
        setTimeout(()=>{
            resolve(2);
        }, Math.random()*100);
    }
);

promise1.then(value=>console.log("promise1",value));
promise2.then(value =>console.log("promise2",value));

// Define an asynchronous function called main to demonstrate async/await
const main = async () => {
    console.log("promise1", await promise1); // Wait for promise1 to resolve and log its value
    console.log("promise2", await promise2); // Wait for promise2 to resolve and log its value
};
main(); // Call the main function

console.log("--main()--"); // Log a separator line after calling main()
