/** 
 * calling the function with different speeds to evaluate output.
 * speed limit is80. 
 * Demerit will be the speed difference.
 * Math.ceil function from the JavaScript library Mathdecimal values are rounded up to the nearest whole number. 
 * speedDifference variable / 5; (for every 5 km/s the driver exceeds the limit, they get one demerit point).

 */ 

function calculateDemeritPoints(speed) {
    
    const speedLimit = 80;
    const speedDifference = speed - speedLimit;
  
    if (speedDifference <= 0) {
      console.log("limitOk");
      return;
    }

    const demeritPoints = Math.ceil(speedDifference / 5);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", demeritPoints);
    }
  }
  
  // Example 
  calculateDemeritPoints(14); // Output: Points: 4
  calculateDemeritPoints(74); // Output: Ok
  calculateDemeritPoints(90); // Output: Points: 2
  calculateDemeritPoints(130); // Output: License suspended