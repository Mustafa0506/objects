// ТЗ
// 1. Седенить два объекта в один новый
// 2. достать все значения в один массив и все ключи тоже в один но отдельный массив
// 3. соеденить два массива в один целый
// 4. отфильтровать данные по их типам данных в соответствующие переменные



let user = {
    name: 'Mustafa',
    born: {
        year: 2006,
        month: 12,
        day: 05,
        age: 16,
    },
    study: {
        school: 37,
        extra: 'wepro'
    },
    live: {
        countrie: 'Uzb',
        sity: 'Sam'
    },
    isMarried: false,
}

let pasport = {
    id: 'AC',
    number: 1930434
}

let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}

// 1
let newUser = Object.assign(user, pasport)

// 2

let keys = Object.keys(user)
let value = Object.values(user)

// 3

let add = keys.concat(value)

// 4

let filtered = add.filter(item => {
    if (typeof (item) === 'number') {
        types.number.push(item)
    } else if (typeof (item) === 'string') {
        types.string.push(item)
    } else if (typeof (item) === 'object') {
        types.object.push(item)
    } else if (typeof (item) === 'boolean') {
        types.boolean.push(item)
    }
})



console.log('Задание 1', newUser);
console.log('Задание 2', keys);
console.log('Задание 2', value);
console.log('Задание 3', add);
console.log('Задание 4', types);
