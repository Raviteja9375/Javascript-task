function compareNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:")); // Get the first number from the user
  
    if (isNaN(num1)) {
      console.error("Invalid input: Please enter a number."); // Check if the input is a valid number
      return;
    }
  
    const num2 = parseFloat(prompt("Enter the second number:")); // Get the second number from the user
  
   
    if (isNaN(num2)) {
      console.error("Invalid input: Please enter a number.");  // Check if the input is a valid number
      return;
    }
  
    if (num1 > num2) {
      console.log("The first number is greater than the second number.");
    } else if (num1 < num2) {
      console.log("The first number is less than the second number.");
    } else {
      console.log("The two numbers are equal.");
    }
  }
  
  // Call the function to compare numbers
  compareNumbers();