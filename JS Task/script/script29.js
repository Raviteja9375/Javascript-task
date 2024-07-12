function askName() {
    
    let name = prompt("What is your name?");
  
    
    if (name.trim() === "") {
      alert("Name cannot be empty.");
    } else {
      alert("Hello, " + name + "!");
    }
  }
  
  
  askName();