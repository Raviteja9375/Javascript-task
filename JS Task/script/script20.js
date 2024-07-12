function combineValues() {
    // Prompt user for two values and store them in variables
    const value1 = prompt("Enter the first value:");
    const value2 = prompt("Enter the second value:");
  
    // Check the types of both values using typeof
    const type1 = typeof value1;
    const type2 = typeof value2;
  
    // Handle different scenarios based on types
    if (type1 === "string" && type2 === "string") {
      return value1 + value2; // Concatenate strings
    } else if (type1 === "number" && type2 === "number") {
      return parseFloat(value1) + parseFloat(value2); // Add numbers (ensure decimal handling)
    } else {
      return "Error: Input values must be both strings or both numbers."; // Type mismatch
    }
  }
  
  // Example usage
  const result = combineValues();
  console.log(result);