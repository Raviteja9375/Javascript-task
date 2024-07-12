function checkNumberSign(number) {
   
    if (isNaN(number)) {
      console.log("Invalid input. Please enter a valid number.");
      return; // Exit the function if input is not a number
    }
  
    if (number === 0) {
      console.log("The number is zero.");
    } else if (number > 0) {
      console.log("The number is positive.");
    } else {
      console.log("The number is negative.");
    }
  }
  
  // Example usage
  checkNumberSign(5);    // Output: The number is positive.
  checkNumberSign(-7);   // Output: The number is negative.
  checkNumberSign(0);    // Output: The number is zero.
  checkNumberSign("abc"); // Output: Invalid input. Please enter a valid number.