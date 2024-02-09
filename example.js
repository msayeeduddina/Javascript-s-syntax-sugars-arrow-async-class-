// Define an object called myobj with a property 'name'
const myobj = {
    name: "fred"
};

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
