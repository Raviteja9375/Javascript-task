function powerOf(exponent) {
    // Closure to remember the exponent
    return function(base) {
      // Calculate the base raised to the exponent
      if (exponent === 0) {
        return 1; // Anything to the power of 0 is 1 (except 0 itself)
      } else if (exponent < 0) {
        return  1 / (base ** -exponent); // Handle negative exponents
      } else {
        return base ** exponent; // Use the exponentiation operator for efficiency
      }
    };
  }
  
  // Example usage
  const cube = powerOf(3); // Create a function for the cube (exponent 3)
  const square = powerOf(2); // Create a function for the square (exponent 2)
  
  console.log(cube(5)); // Output: 125 (5 cubed)
  console.log(square(10)); // Output: 100 (10 squared)