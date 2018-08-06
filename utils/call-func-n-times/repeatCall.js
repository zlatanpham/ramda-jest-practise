const R = require("ramda");

const repeatCall = (func, n) => {
  R.map(R.call, R.repeat(func, n));
};

module.exports = repeatCall;
