const keysToUppercase = require('./keysToUppercase')

test('{ a: \'a\', b: \'b\', c: \'c\' } to be {A: \'a\', B, \'b\', C: \'c\'}', () => {
    expect(
        keysToUppercase({
            a: 'a',
            b: 'b',
            c: 'c'
        })
    ).toEqual({
        A: 'a',
        B: 'b',
        C: 'c'
    })
})
