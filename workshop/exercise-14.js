// Exercise 14
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  // str and char are both strings
  let count = 0
  for (let letter = 0; letter <str.length; letter++){
    if (str[letter] === char){
      count++;
    }
  }
  return count;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(countChar("BananaBabyBubbles", "a"));

// This is needed for automated testing (more on that later)
module.exports = countChar;
