const convertIdObjVal = require("./convertIdObjVal");

test("{'id-1': {name: 'Jerry'}} to be [{id: 'id-1', name: 'Jerry'}]", () => {
  const obj = { "id-1": { name: "Jerry" }, "id-2": { name: "Tom" } };
  const output = convertIdObjVal(obj);

  console.log(output);
  expect(output).toHaveLength(2);
  expect(output[0]).toEqual({ id: "id-1", name: "Jerry" });
});
