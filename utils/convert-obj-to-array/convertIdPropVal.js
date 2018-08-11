const R = require('ramda')

const convertIdPropVal = R.pipe(
    R.toPairs,
    R.map(R.zipObj(['id', 'count']))
)

module.exports = convertIdPropVal
