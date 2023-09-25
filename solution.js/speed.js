// Function for calculating points using car speed
function calculateCoveredPoint(speed) {
  // speed max and covered point threshold
  const speedLimit = 70;
  const kmPerCoveredPoint = 5;
  
  // Checking if the car's speed is below the speed max
  if (speed <= speedLimit) {
    console.log("Ok"); // If yes, print "Ok"
  } else {
    // Calculate point based on excess speed
    const coveredPoint = Math.floor((speed - speedLimit) / kmPerCoveredPoint);
    
    // Check if point exceed 12
    if (coveredPoint > 12) {
      console.log("License suspended"); // If yes, print "License suspended"
    } else {
      console.log(`Points: ${coveredPoint}`); // Otherwise, print the number of point
    }
  }
}

// Call the function with the car's speed as an argument
calculateCoveredPoint(80); // Points: 2
