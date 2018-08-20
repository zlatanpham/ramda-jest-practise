const R = require('ramda')

const applyFnToProp = R.curry((func, prop, obj) => {
    const pLens = R.lens(R.prop(prop), R.assoc(prop))
    return R.over(pLens, func, obj)
})

module.exports = applyFnToProp
