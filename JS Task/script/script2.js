function logParamTypes(str, num, bool) {
    console.log("Hello:", typeof str); // here Hello is String
    console.log("13:", typeof num); // 13 is Number
    console.log("true:", typeof bool); // true is Boolean
  }
  
  // Example usage
  const myString = "Hello";
  const myNumber = 42;
  const myBool = true;
  
  logParamTypes(myString, myNumber, myBool);