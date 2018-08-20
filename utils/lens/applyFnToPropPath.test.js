const R = require('Ramda')
const applyFnToPropPath = require('./applyFnToPropPath')

const obj = { a: { b: { c: 20 } } }
test('{ a:{b:{c:20}}} to be {a:{b:{c:-20}}}', () => {
    expect(applyFnToPropPath(R.negate, ['a', 'b', 'c'], obj)).toEqual({
        a: { b: { c: -20 } }
    })
})
