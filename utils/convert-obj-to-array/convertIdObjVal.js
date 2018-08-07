const R = require("ramda");

// :: [number] -> number
const convertIdObjVal = R.pipe(
  R.toPairs,
  R.map(R.converge(R.assoc("id"), [R.nth(0), R.nth(1)]))
);

module.exports = convertIdObjVal;
