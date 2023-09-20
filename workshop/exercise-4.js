// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  // code here
  let sum = num1 + num2 + num3 + num4 + num5
  let ave = sum / 5
  return Math.round(ave);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
