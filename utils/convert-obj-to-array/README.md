## Use case 1

```js
const obj = { 'id-1': 20, 'id-2': 12, 'id-3': 129, 'id-4': 0 }

const output = convertIdPropVal(obj)

// output = [
//   { id: "id-1", count: 20 },
//   { id: "id-2", count: 12 },
//   { id: "id-3", count: 129 },
//   { id: "id-4", count: 0 }
// ];
```

## Use case 2

```js
const obj = { 'id-1': { name: 'Jerry' }, 'id-2': { name: 'Tom' } }

const output = convertIdObjVal(obj)

// output = [{ id: "id-1", name: "Jerry" }, { id: "id-2", name: "Tom" }];
```

## Use case 3

```js
const obj = {
  male: [{ name: 'Gary' }, { name: 'Zlatan' }],
  female: [{ name: 'Hanna' }, { name: 'Jenny' }]
}

const output = convertPropObjArray(obj)

// output = [{ name: "Gary", gender: 'male' }, { name: "Zlatan", gender: 'male' }, { name: "Hanna", gender: 'female' }, { name: "Jenny", gender: 'female' }];
```
