const average = require("./average");

test("Average of [1, 2, 3, 4, 5] as 15/5 equals 3", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});
