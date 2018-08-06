const repeatCall = require("./repeatCall");

test("func should be called 5 times", () => {
  const func = jest.fn();
  repeatCall(func, 5);
  expect(func).toHaveBeenCalledTimes(5);
});
