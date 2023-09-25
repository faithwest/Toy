//function to calculate grades based on students' marks
function calculateGrade(marks) {
    if (marks > 80) return 'A'; //grade 80 and above, gives A
    if (marks >= 60) return 'B'; //grade 60 and above, gives B
    if (marks >= 50) return 'C'; //grade 50 and above, gives C
    if (marks >= 40) return 'D'; //grade 40 and above, gives D
    return 'E'; //otherwise return E
  }
  
  //this function calculaates the students' grades
  function getUserInput() {
    const userInput = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));
    
    //function to check if user input is a valid number and if out of expected range
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
      alert("Invalid input. Please enter a valid mark between 0 and 100.");
    } else {
      //this function calculates the grades and gives ou the alert after its done
      const grade = calculateGrade(userInput);
      alert(`Grade: ${grade}`);
    }
  }
  //Call function to begin the process
  getUserInput();
  