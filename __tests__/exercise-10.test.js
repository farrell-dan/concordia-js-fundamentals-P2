const allLong = require("../workshop/exercise-10");

test("Exercise 10", () => {
  expect(allLong(["Scott", "Bob", "Ric", "Jim"])).toBe(false);
  expect(allLong(["Bob", "Ric", "Jim"])).toBe(false);
  expect(
    allLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
  ).toBe(true);
});
