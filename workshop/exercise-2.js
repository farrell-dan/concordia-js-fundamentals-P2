// Exercise 2
//
// Write a function that accepts two numbers and returns
// the greater one.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {
  // your code here...
  if (num1 > num2){
    return num1;
  }else{
    return num2
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(getMax(12, 43));

// This is needed for automated testing (more on that later)
module.exports = getMax;
