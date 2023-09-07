const calculateAverage = require("../workshop/exercise-11");

test("Exercise 11", () => {
  expect(calculateAverage([76, 60, 83, 100, 78])).toBe(79);
  expect(calculateAverage([20, 30, 40, 50, 60, 1])).toBe(34);
  expect(calculateAverage([34])).toBe(34);
  expect(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65, 24, 17, 100, 84])).toBe(63);
});
