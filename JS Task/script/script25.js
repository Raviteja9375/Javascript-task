function multiplyByTen() {
    
    const number = parseFloat(prompt("Enter a number:"));
  
    
    if (!isNaN(number)) {
      
      const result = number * 10;    // Calculate the result
  
      // Display the result using alert
      alert(`The result of multiplying ${number} by 10 is: ${result}`);
    } else {
      alert("Please enter a valid number.");
    }
  }
  
  // Call the function to execute the code
  multiplyByTen();