let globalVar = "This is a global variable";

function myFunction() {
  let localVar = "This is a local variable";
  console.log("Local variable:", localVar); // Accessible within the function
}

myFunction();
console.log("Global variable:", globalVar); // Accessible outside the function

// Trying to access localVar outside the function will result in an error
console.log("Local variable outside function:", localVar); 