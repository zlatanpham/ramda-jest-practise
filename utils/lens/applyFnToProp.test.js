const R = require('ramda')
const applyFnToProp = require('./applyFnToProp')

const obj = { a: 20 }

test('expect {a: 20} to {a: -20}', () => {
    const output = applyFnToProp(R.negate, 'a', obj)
    expect(output).toEqual({ a: -20 })
})

test('expect {a:20} to {a: 21}', () => {
    expect(applyFnToProp(R.inc, 'a', obj)).toEqual({ a: 21 })
})

test('expect {a:20} to {a: 400}', () => {
    expect(applyFnToProp(x => x * x, 'a', obj)).toEqual({ a: 400 })
})
