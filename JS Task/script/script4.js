function convertStringToNumber(userInput) {
    
    const convertedNumber = parseFloat(userInput);
  
    
    if (isNaN(convertedNumber)) {
      alert("Invalid input! Please enter a valid number.");
    } else {
      console.log(convertedNumber); 
    }
  }
  
  
  const userInput = prompt("Enter a number:");
  convertStringToNumber(userInput)