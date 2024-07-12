function checkAge() {
   
    let age = parseInt(prompt("What is your age?"));   // Get the user's age from the prompt
  
   
    if (isNaN(age)) {
      alert("Please enter a valid number for your age.");   // Check if age is a valid number
      return;
    }
  
    
    if (age >= 18) {
      alert("You are an adult.");
    } else {
      alert("You are a minor.");
    }
  }
  
  // Call the function to prompt the user
  checkAge();