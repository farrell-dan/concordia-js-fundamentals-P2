// Exercise 3
//
// Write a function that accepts two numbers and returns
// the greater one. (this must have a different solution from the previous question.)
//
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_max.asp
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getMax(num1, num2) {
  // code here
  return Math.max(num1, num2);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(getMax(12, 43));

// This is needed for automated testing (more on that later)
module.exports = getMax;
