function printEvenNumbers() {
    
    for (let i = 1; i <= 20; i++) {
      
      if (i % 2 === 0) {
        console.log(i + " is even number");
      }
    }
  }
  
  function printOddNumbers() {
    let i = 1;
    
    while (i <= 20) {
     
      if (i % 2 !== 0) {
        console.log(i + " is odd number");
      }
      i += 2; 
    }
  }
  
  
  printEvenNumbers();
  printOddNumbers();