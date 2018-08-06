const convertIdObjVal = require("./convertIdObjVal");

test("{'id-1': {name: 'Jerry'}} to be [{id: 'id-1', name: 'Jerry'}]", () => {
  const obj = { "id-1": { name: "Jerry" }, "id-2": { name: "Tom" } };
  const output = convertIdObjVal(obj);

  expect(output).toHaveLength(2);
  expect(output[1]).toEqual({ id: "id-1", name: "Jerry" });
});
