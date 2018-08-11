const R = require('ramda')

const keysToUppercase = (props, obj) => R.omit(props, obj)

module.exports = keysToUppercase
