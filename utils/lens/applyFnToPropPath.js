const R = require('ramda')

const applyFnToPropPath = R.curry((fn, path, obj) => {
    return R.over(R.lensPath(path), fn, obj)
})

module.exports = applyFnToPropPath
