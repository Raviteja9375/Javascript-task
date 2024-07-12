function calculateGrade(marks) {
    if (marks >= 90) {
      return 'A';
    } else if (marks >= 80) {
      return 'B';
    } else if (marks >= 70) {
      return 'C';
    } else if (marks >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  // Example usage
  const studentMarks = 85;
  const grade = calculateGrade(studentMarks);
  console.log("Student's grade:", grade);