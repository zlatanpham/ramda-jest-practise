const convertIdPropVal = require('./convertIdPropVal')

test('{\'id-1\': 20} to be [{id: \'id-1\', count: 20}]', () => {
    const obj = {
            'id-1': 20,
            'id-2': 12,
            'id-3': 129,
            'id-4': 0
        },
        output = convertIdPropVal(obj)

    console.log(output)

    expect(output).toHaveLength(4)
    expect(output[0]).toEqual({
        id: 'id-1',
        count: 20
    })
    expect(output[3]).toEqual({
        id: 'id-4',
        count: 0
    })
})
