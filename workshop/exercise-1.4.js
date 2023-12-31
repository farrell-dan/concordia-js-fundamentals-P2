// Exercise 1.4
//
// Write a function that accepts a name and returns only the first name and last name.
// Essentially removing the middle name if there is one.
// - This function should still work if there is no middle name.
// - If there are multiple middle names this function should still work.
// - If the string has only one name, e.g. "Adele", it should return that name
//
// Example:
// removeMiddleName("Morty Antoine Smith") should return "Morty Smith"
// removeMiddleName("Morty Smith") should return "Morty Smith"
// removeMiddleName("Morty") should return "Morty"
// removeMiddleName("Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  // complete the function
  let lastName = string.split(" ").pop();
  let firstName = string.split(" ").shift();
  if (firstName === lastName) {
    return firstName
  }else
  return firstName + " " + lastName

  // let nameArray2= nameArray[0] + nameArray[2];
  console.log(nameArray)
  // console.log(nameArray[0])

  // console.log(nameArray[2])
  console.log(nameArray2)

  // return nameArray.concat(nameArray[0] + " " + nameArray[-1]);

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
