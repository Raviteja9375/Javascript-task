function atLeastTwoTrue(a, b, c) {
    // Use logical OR (||) to check if at least one of the following conditions is true:
    
    return (a && b) || (a && c) || (b && c);
    
    // - a is true and b is true
    // - a is true and c is true
    // - b is true and c is true

  }
  
  // Example usage
  const result1 = atLeastTwoTrue(true, false, false); // false (only one true)
  const result2 = atLeastTwoTrue(false, true, true);  // true (two true)
  const result3 = atLeastTwoTrue(false, false, false); // false (no true)
  
  console.log(result1); // false
  console.log(result2); // true
  console.log(result3); // false