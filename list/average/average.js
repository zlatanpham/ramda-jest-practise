const R = require("ramda");

// :: [number] -> number
const average = R.converge(R.divide, [R.sum, R.length]);

module.exports = average;
