let name = prompt("Hello! Raviteja?"); // Prompt user for name

alert("Nice to meet you, " + name + "!");  // Greet the user

let proceed = confirm("Would you like to proceed?");  // Confirmation prompt

console.log("User wants to proceed:", proceed);  // Log the user's confirmation response


if (proceed) {
  console.log("Continuing...");  // Your code to be executed if user confirms
  
} else {
  console.log("Exiting...");  // Your code to be executed if user cancels
  
}
