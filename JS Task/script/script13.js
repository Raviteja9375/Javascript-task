function factorial(num) {
    // Base case: Factorial of 0 or 1 is 1
    if (num === 0 || num === 1) {
      return 1;
    }
  
    // Recursive case: Factorial of n is n * factorial(n-1)
    return num * factorial(num - 1);
  }
  
  // Example usage
  console.log(factorial(5)); // Output: 120