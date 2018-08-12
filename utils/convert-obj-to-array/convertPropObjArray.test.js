const convertPropObjArray = require('./convertPropObjArray')

test('{male:[{name: "Zlatan"}] to [{name:"Zlatan", gender: "male"}]', () => {
    const obj = {
        male: [{ name: 'Gary' }, { name: 'Zlatan' }],
        female: [{ name: 'Hanna' }, { name: 'Jenny' }]
    }
    const output = convertPropObjArray(obj)

    console.log(output)
    expect(output).toHaveLength(4)
    expect(output[0]).toEqual({ name: 'Gary', gender: 'male' })
})
