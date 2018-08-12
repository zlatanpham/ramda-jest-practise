const R = require('ramda')

const convertPropObjArray = R.pipe(
    R.toPairs,
    R.map(obj => {
        const gender = R.head(obj)
        const res = R.pipe(
            R.last,
            R.map(R.assoc('gender', gender))
        )(obj)

        return res
    }),
    R.flatten
)

module.exports = convertPropObjArray
