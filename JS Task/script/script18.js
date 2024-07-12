function checkDay(day) {
    switch (day.toLowerCase()) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
        return "It's a weekday!";
      case "saturday":
      case "sunday":
        return "It's the weekend!";
      default:
        return "Invalid day entered. Please enter a day of the week.";
    }
  }
  
  const userInput = prompt("Enter a day of the week: ");
  const message = checkDay(userInput);
  
  console.log(message);