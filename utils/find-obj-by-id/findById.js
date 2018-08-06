const R = require("ramda");

// :: String -> Array -> Object
const findById = R.converge(R.find, [
  R.pipe(
    R.nthArg(0),
    R.propEq("id")
  ),
  R.nthArg(1)
]);

module.exports = findById;
