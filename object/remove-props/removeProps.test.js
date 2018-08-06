const removeProps = require("./removeProps");

test("removeProps(['a', 'b'], {a: 'a', b: 'b', c: 'c'}) to be {c: 'c'}", () => {
  expect(removeProps(["a", "b"], { a: "a", b: "b", c: "c" })).toEqual({
    c: "c"
  });
});
