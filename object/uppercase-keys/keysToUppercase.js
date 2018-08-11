const R = require('ramda')

const keysToUppercase = R.pipe(
    R.toPairs,
    R.map(R.adjust(R.toUpper, 0)),
    R.fromPairs
)

module.exports = keysToUppercase
