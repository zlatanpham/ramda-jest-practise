const calStats = require('./calStats')

const entries = [
    { percent: 100 },
    { percent: 20 },
    { percent: 19 },
    { percent: 57 },
    { percent: 90 },
    { percent: 99 }
]

test('Count stats from list', () => {
    expect(calStats(entries)).toEqual({ done: 1, halfDone: 3, unDone: 2 })
})
