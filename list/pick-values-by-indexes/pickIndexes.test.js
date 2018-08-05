const pickIndexes = require("./pickIndexes");

test("Pick values at index 0 and 2 from ['a', 'b', 'c'], expect result ['a', 'c']", () => {
  const res = pickIndexes([0, 2], ["a", "b", "c"]);
  expect(res[0]).toBe("a");
  expect(res[1]).toBe("c");
  expect(res).toHaveLength(2);
});
