function checkEligibility() {
    // Get user's age
    const age = parseInt(prompt("Please enter your age:"));
  
    // Check for voting eligibility
    if (age >= 18) {
      console.log("You are eligible to vote!");
    } else {
      console.log("You are not yet eligible to vote.");
    }
  
    // Check for senior discount eligibility (nested if statement)
    if (age >= 65) {
      console.log("You are eligible for senior discounts!");
    } else if (age >= 18) {
      console.log("While not eligible for senior discounts, you can vote!");
    } else {
      console.log("You are not eligible for voting or senior discounts yet.");
    }
  }
  
  checkEligibility();