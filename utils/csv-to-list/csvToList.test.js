const csvToList = require("./csvToList");

test("convert csv stream to list of obj", () => {
  const csvStream = "name,age\nZlatan,30\nJenny,23";
  const output = csvToList(csvStream);

  expect(output).toHaveLength(2);
  expect(output[0]).toEqual({ name: "Zlatan", age: 30 });
  expect(output[1]).toEqual({ name: "Jenny", age: 23 });
});
