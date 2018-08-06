const R = require("ramda");

const removeProps = (props, obj) => {
  return R.omit(props, obj);
};

module.exports = removeProps;
