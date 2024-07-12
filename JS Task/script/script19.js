function factorial(number) {
    // Handle negative numbers and 0
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (number === 0) {
      return 1;
    }
  
    // Initialize result variable
    let result = 1;
  
    // Loop from 1 to the number, multiplying by each number
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
  
    return result;   // Return the factorial
  }
  
  console.log(factorial(5));   // Output: 120
  console.log(factorial(0));   // Output: 1
  console.log(factorial(-3));  // Output: "Factorial is not defined for negative numbers"