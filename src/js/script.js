function reduce(arr, callback, initialValue) {

    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr)

    }

    return result
}

function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let res1 = callback(arr[i])
        result.push(res1)

    }

    return result
}

function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result
}

function some(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) return true
    }
    return false
}

function findLast(arr, predicate) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr)) return arr[i]
    }
}

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}


//1) використовуючи тільки свою фунцію reduce, зробити масив лише зі зростаючих елементів


const numbers = [1,-10,6,8,-2,2,10];
const res = reduce(numbers, (acc, item)=> {

    if (acc.length === 0 || item > acc[acc.length - 1]) {
        acc.push(item);
    }
    return acc

},[] )

    console.log(res); // [5, 6, 7]

//2) реалізувати функцію reverse

function reverse (arr) {
    let result = []
        for (let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i])
    }
      for (let j = 0; j < result.length; j++) {

      }
    return arr
}

const arr1 = [1, 2, 3, 4, 5]
const reverseArray = reverse(arr1)
console.log(reverseArray)

//3) використовуючи тільки свої реалізовані функції, зробити масив привітань тільки для коротких імен (ім'я максимум 5 літер)


const names = ['John', 'Mike', 'Sarah', 'Jessica', 'Joe'];

const greetings = map(filter(names, (item) => {
    return item.length <= 5
}), (modItem) => {
    return `Hello ${modItem}!`
})


     console.log(greetings); // ['Hello John!', 'Hello Mike!', 'Hello Sarah!', 'Hello Joe!']
//
// //4) використовуючи тільки свої map і filter, побудувати масив цін зі знижкою для товарів дорожчих за 100
//
const prices = [80, 120, 250, 90, 200];

 // залишити тільки ті, що > 100, і зробити знижку 20%
 const discounted = map(filter(prices, (num) => num > 100
 ), (discount) => discount * 0.8)

    console.log(discounted); // [96, 200, 160]
//
// //5) використовуючи свої map і filter, прибрати пробіли (без trim) і зробити всі слова великими

// const words = [' apple ', 'banana', ' cherry', ' date '];
//
// const trimmed =
//
//
//     console.log(trimmed); // ['APPLE', 'BANANA', 'CHERRY', 'DATE']
//
 //6) використовуючи findLast, знайти останнє слово, яке починається на 'S'



const words = ['Apple', 'Orange', 'Strawberry', 'Banana', 'Sugar'];

const lastS = findLast(words, (element) => {
   // return  element.startsWith('S');
    return element[0] === 'S'
})

    console.log(lastS); // 'Sugar'

/* 7) Використовуючи тільки свої реалізації функцій filter, map, some, findLast, forEach, зробити:
- Отримати список email’ів активних користувачів старших за 18
- Перевірити, чи є хоч один активний користувач молодший за 20
- Знайти останнього неактивного користувача
- Вивести в консоль усі імена користувачів у форматі: "Користувач: ІМʼЯ (вік X)"
*/
const users = [
    { name: 'John', age: 25, email: 'john@mail.com', isActive: true },
    { name: 'Mike', age: 17, email: 'mike@mail.com', isActive: true },
    { name: 'Anna', age: 22, email: 'anna@mail.com', isActive: false },
    { name: 'Olga', age: 30, email: 'olga@mail.com', isActive: true },
    { name: 'Ivan', age: 45, email: 'ivan@mail.com', isActive: false },
    { name: 'Sasha', age: 20, email: 'sasha@mail.com', isActive: true },
];

const activeEmails = map(filter(users, (emails)=> {
    if (emails.age > 18 && emails.isActive) return emails.email
}), (element)=> element.email)
console.log(activeEmails); // ['john@mail.com', 'olga@mail.com', 'sasha@mail.com']

const userInfos = forEach(users, (element) =>
    console.log(`Користувач: ${element.name} (вік ${element.age})`)
)
 console.log(userInfos); // ['Користувач: John (вік 25)', 'Користувач: Mike (вік 17)', 'Користувач: Anna (вік 22)', 'Користувач: Olga (вік 30)', 'Користувач: Ivan (вік 45)', 'Користувач: Sasha (вік 20)']


//
const hasYoungActive = some(users, (element) => element.isActive && element.age < 20)
    console.log(hasYoungActive); // true

const lastInactiveUser = findLast(users, (element)=> !element.isActive)
    console.log(lastInactiveUser); // { name: 'Ivan', age: 45, email: 'ivan@mail.com', isActive: false }





