// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  let sum = 0
  for (let grade = 0 ; grade <grades.length; grade++){
    sum += grades[grade];
  }
  const average = Math.round(sum / grades.length);
  return average
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65, 24, 17, 100, 84]));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
