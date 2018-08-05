const R = require("ramda");

// :: [Number] -> [a] -> [a]
const pickIndexes = R.compose(
  R.values,
  R.pickAll
);

module.exports = pickIndexes;
