// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  let count = 0
  for (let letter = 0; letter <str.length; letter++){
    if (str[letter] === "B"){
      count++;
    }
  }
  return count;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(countBs("BananaBabyBubbles"));

// This is needed for automated testing (more on that later)
module.exports = countBs;
