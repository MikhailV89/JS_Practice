import {findLast, map, some, filter, reduce, forEach} from "./functions.js";

// 1) Побудувати масив квадратів непарних чисел

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = map(filter(numbers, (item) => item % 2 !== 0),
    (element) => {
    return element * element
})
console.log(result); // [1, 9, 25, 49, 81]

 //2) Перевірити, чи всі числа в масиві парні

const arr1 = [2, 4, 6];
const arr2 = [2, 3, 6];

 const allEven1 = reduce(arr1, (acc, num) => {
    return  acc && num % 2 === 0
 },true)

const allEven2 = reduce(arr2, (acc, num) => {
    return acc && num % 2 === 0
},true)


const result2 = !some(arr2, (element) => {
      return element % 2 !== 0
})


console.log(result2)

console.log(allEven1); // true
console.log(allEven2); // false

//3) Знайти останнє довге слово (довше 5 символів)


const words = ['apple', 'banana', 'kiwi', 'watermelon', 'pear', 'plum'];

const lastLongWord = findLast(words, (element) => {
   return  element.length > 5
})
console.log(lastLongWord); // 'watermelon'

//4) Вивести всі назви тварин з великої літери

const animals = ['cat', 'dog', 'elephant', 'lion'];

const capitalized = map(animals, (item) => {
    return  item[0].toUpperCase() + item.slice(1)

})
console.log(capitalized); // ['Cat', 'Dog', 'Elephant', 'Lion']


 //5) Побудувати масив довжин слів, довших за 3 символи

 const words2 = ['hi', 'hello', 'yo', 'goodbye', 'ok'];

 const lengths = map(filter(words2, (element) => element.length > 3),
     (item) => {
         return item.length
     }
 )

console.log(lengths); // [5, 7]

// //6) Вивести в консоль повідомлення про кожного користувача

const users3 = [
    { name: 'John', isOnline: true },
    { name: 'Anna', isOnline: false },
    { name: 'Mike', isOnline: true },
];

const message1 = map(users3, (item) => {
    let online =  item.isOnline ?  'online' : 'offline'

   return `User ${item.name} is ${online}`
}).join(', ')

    console.log(message1); // "User John is online, User Anna is offline, User Mike is online"
//
// // 7) Вивести імена людей віком до 25

const people = [
    { name: 'Olga', age: 32 },
    { name: 'Dima', age: 24 },
    { name: 'Ira', age: 19 },
    { name: 'Oleh', age: 45 },
];



const message = 'Young users: ' + map(filter(people, (item) => item.age < 25),
    (item) => {
    return item.name
}).join(', ')
    // ?

    console.log(message); // 'Young users: Dima, Ira'

//8) згрупувать юзерів по ролях

const users = [
    { name: 'John', age: 25, email: 'john@mail.com', isActive: true, role: 'admin' },
    { name: 'Mike', age: 17, email: 'mike@mail.com', isActive: true, role: 'manager' },
    { name: 'Anna', age: 22, email: 'anna@mail.com', isActive: false, role: 'user' },
    { name: 'Olga', age: 30, email: 'olga@mail.com', isActive: true, role: 'user' },
    { name: 'Ivan', age: 45, email: 'ivan@mail.com', isActive: false, role: 'admin' },
    { name: 'Sasha', age: 20, email: 'sasha@mail.com', isActive: true, role: 'admin' },
];

const usersByRoles = reduce(users, (acc, item) => {
 const key = item.role;
 if (!acc[key]) acc[key] = []
    acc[key].push(item)
return acc
},{})

    console.log(usersByRoles);
// /*
//   {
//     admin: [
//       { name: 'John', age: 25, email: 'john@mail.com', isActive: true, role: 'admin' },
//       { name: 'Ivan', age: 45, email: 'ivan@mail.com', isActive: false, role: 'admin' },
//       { name: 'Sasha', age: 20, email: 'sasha@mail.com', isActive: true, role: 'admin' }
//     ],
//     manager: [
//       { name: 'Mike', age: 17, email: 'mike@mail.com', isActive: true, role: 'manager' }
//     ],
//     user: [
//       { name: 'Anna', age: 22, email: 'anna@mail.com', isActive: false, role: 'user' },
//       { name: 'Olga', age: 30, email: 'olga@mail.com', isActive: true, role: 'user' }
//     ]
//   }
// */
//
// //9) вивести імена юзерів по ролях

// const users2 = [
//     { name: 'John', age: 25, email: 'john@mail.com', isActive: true, role: 'admin' },
//     { name: 'Mike', age: 17, email: 'mike@mail.com', isActive: true, role: 'manager' },
//     { name: 'Anna', age: 22, email: 'anna@mail.com', isActive: false, role: 'user' },
//     { name: 'Olga', age: 30, email: 'olga@mail.com', isActive: true, role: 'user' },
//     { name: 'Ivan', age: 45, email: 'ivan@mail.com', isActive: false, role: 'admin' },
//     { name: 'Sasha', age: 20, email: 'sasha@mail.com', isActive: true, role: 'admin' },
// ];
// const usersByRoles1 = reduce(users2, (acc, item) => {
//     const key = item.role;
//     if (!acc[key]) acc[key] = []
//     acc[key].push(item)
//     return acc
// },{})
//
// // item - [key: [{}{}{}]
//
// const message4 = reduce(Object.entries(usersByRoles1), (acc, item) => {
//    const role = item[0]
//     const users = item[1]
//     `${role}: ${users}`
// }, '')
//
//     console.log(message4); // 'admin: John, Ivan, Sasha; manager: Mike; user: Anna, Olga.'
//
// //10) використовуючи свої map і filter, прибрати пробіли (без trim) і зробити всі слова великими
//
// // const words = [' apple ', 'banana', ' cherry', ' date '];
// //
// // const trimmed = ?
// //
// //     console.log(trimmed); // ['APPLE', 'BANANA', 'CHERRY', 'DATE']
//
//
// //11) реалізувати функцію reverse

function reverse (arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j] = result[j]
    }
    return arr
}

const arr7 = [1, 2, 3, 4, 5]
const reverseArray = reverse(arr7)
console.log(reverseArray)



// function every (arr, predicate) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!some(arr, () => predicate)) return false
//     }
//
//     return true
// }
//
// const arr = [3, 6, 9, 12, 15];
// const isAllDiv3 = every(arr, item => item % 3 === 0); // true
// const isAllDiv6 = every(arr, item => item % 6 === 0); // false
//
// console.log(isAllDiv3)
// console.log(isAllDiv6)
