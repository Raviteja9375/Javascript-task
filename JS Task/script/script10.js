function getMessageForDay(day) {
    const messages = {
      Monday: "Monday: Start of the work week!",
      Tuesday: "Tuesday: Keep the momentum going!",
      Wednesday: "Wednesday: We're halfway through!",
      Thursday: "Thursday: Almost there!",
      Friday: "Friday: TGIF!",
      Saturday: "Saturday: Relax and recharge!",
      Sunday: "Sunday: Enjoy your well-deserved break!",
    };
  
    return messages[day] || "Invalid day of the week";
  }
  
  // Example usage
  const today = "Wednesday";
  const message = getMessageForDay(today);
  console.log(message); // Output: "Wednesday: We're halfway through!"