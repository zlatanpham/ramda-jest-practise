const R = require("ramda");

const csvToList = R.pipe(
  R.split("\n"),
  R.map(R.split(",")),
  R.splitAt(1),
  R.apply(R.lift(R.zipObj)),
  R.map(obj => ({ ...obj, age: parseInt(obj.age) }))
);

module.exports = csvToList;
