function calculateGrade(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
  }
  
  function getUserInput() {
    const userInput = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));
    
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
      alert("Invalid input. Please enter a valid mark between 0 and 100.");
    } else {
      const grade = calculateGrade(userInput);
      alert(`Grade: ${grade}`);
    }
  }
  
  getUserInput();
  