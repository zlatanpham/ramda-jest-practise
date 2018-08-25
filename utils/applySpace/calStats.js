const R = require('ramda')

const countDone = R.compose(
    R.length,
    R.filter(R.propSatisfies(x => x === 100, 'percent'))
)
const countHalfDone = R.compose(
    R.length,
    R.filter(R.propSatisfies(x => x <= 99 && x >= 50, 'percent'))
)

const countUndone = R.compose(
    R.length,
    R.filter(R.propSatisfies(x => x < 50, 'percent'))
)

const calStats = R.applySpec({
    done: countDone,
    halfDone: countHalfDone,
    unDone: countUndone
})

module.exports = calStats
