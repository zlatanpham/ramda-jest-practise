const findById = require("./findByid");

const list = [{ id: 1 }, { id: 2 }, { id: 3 }];

test("get object with given id  from list", () => {
  expect(findById(2, list)).toEqual({ id: 2 });
  expect(findById(3, list)).toEqual({ id: 3 });
});
