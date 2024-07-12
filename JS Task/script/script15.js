function calculateSum() {
    
    const userInput = Number(prompt("Enter a number:"));
  
    if (isNaN(userInput)) {
      alert("Please enter a valid number.");
      return;
    }
  
    let sum = 0;  // sum variable
  
    // Loop through numbers from 1 to userInput
    for (let i = 1; i <= userInput; i++) {
      sum += i;
    }
  
    // Alert the calculated sum
    alert(`The sum of all numbers from 1 to ${userInput} is: ${sum}`);
  }
  
  calculateSum();  // Call the function