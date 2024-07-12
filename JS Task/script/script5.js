function calculate(num1, num2) {
  // Input validation (optional)
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid input: Please provide two numbers.');
  }

  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  
  // Handle division by zero
  let quotient;
  if (num2 === 0) {
    quotient = 'Division by zero is not allowed.';
  } else {
    quotient = num1 / num2;
  }

  return {
    sum,
    difference,
    product,
    quotient,
  };
}

// Example usage
const result = calculate(5, 2);
console.log(result);

// Output:
// { sum: 7, difference: 3, product: 10, quotient: 2.5 }
