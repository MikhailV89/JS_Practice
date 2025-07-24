import {findLast, map, some, filter, reduce, forEach} from "./functions.js";

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


// //10) використовуючи свої map і filter, прибрати пробіли (без trim) і зробити всі слова великими
//
// // const words = [' apple ', 'banana', ' cherry', ' date '];
// //
// // const trimmed = ?
// //
// //     console.log(trimmed); // ['APPLE', 'BANANA', 'CHERRY', 'DATE']
//


// 1) реалізувать свою функцію every

function every(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i, arr)) return false
    }

    return true
}

const arr = [3, 6, 9, 12, 15];
const isAllDiv3 = every(arr, item => item % 3 === 0); // true
const isAllDiv6 = every(arr, item => item % 6 === 0); // false
console.log(isAllDiv3);
console.log(isAllDiv6);

// 2) реалізувать функцію every, використовуючи вже реалізовану some

(() => {
    function every(arr, predicate) {
       return  !some(arr, (element, index, arr) => !predicate(element, index, arr));
    }

    const arr = [3, 6, 9, 12, 15];
    const isAllDiv3 = every(arr, item => item % 3 === 0); // true
    const isAllDiv6 = every(arr, item => item % 6 === 0); // false
    console.log(isAllDiv3)
    console.log(isAllDiv6)
})()


// 3) використовуючи some, визначить,
// - чи всі юзери адміни // немає жодного не адміна
// - чи всі юзери не адміни // немає жодного адміна

 const users2 = [{ name: 'Joe', role: 'admin' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];
//
 const isAllAdmins1 = !some(users2, (item) => item.role !== 'admin') // true
const isAllNotAdmins1 = !some(users2, (item) => item.role === 'admin') // false
console.log(isAllAdmins1)
console.log(isAllNotAdmins1)
//
const users4 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];

const isAllAdmins2 = !some(users4, (item) => item.role !== 'admin') // false
const isAllNotAdmins2 = !some(users4, (item) => item.role === 'admin') // false

console.log(isAllAdmins2);
console.log(isAllNotAdmins2);

const users3 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'user' }, { name: 'Lily', role: 'user' }];

const isAllAdmins3 = !some(users3, (item) => item.role !== 'admin') // false
const isAllNotAdmins3 = !some(users3, (item) => item.role === 'admin') // true

console.log(isAllAdmins3)
console.log(isAllNotAdmins3)



 // 4) використовуючи every, визначить,
 // - чи є адмін серед юзерів // чи не всі адміни серед юзерів
// - чи є не адмін серед юзерів //

const users1 = [{ name: 'Joe', role: 'admin' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];

const hasAdmin1 = every(users1, (item)=> item.role === 'admin') // true
console.log(hasAdmin1)
 const hasNotAdmin1 = every(users1, (item) => item.role !== 'admin') // false
console.log(hasNotAdmin1)


// const users3 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];
//
//  const hasAdmin2 =  every(users3, (item)=> item.role === 'admin')// true
//  const hasNotAdmin2 = every(users3, (item)=> item.role === 'admin') // true
//
// console.log(hasAdmin2)
// console.log(hasNotAdmin2)
//
//  const users4 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'user' }, { name: 'Lily', role: 'user' }];
//
// const hasAdmin3 = ? // false
//  const hasNotAdmin3 = ? // true

// // 5) Вивести імена людей віком до 25 - замінить map i filter на reduce
//
const people = [
    { name: 'Olga', age: 32 },
    { name: 'Dima', age: 24 },
    { name: 'Ira', age: 19 },
    { name: 'Oleh', age: 45 },
];



// const message = 'Young users: ' + map(filter(people, (item) => item.age < 25),
//     (item) => {
//         return item.name
//     }).join(', ')
// // ?

const message = 'Young users: ' + reduce(people, (acc, item) =>{

    if (item.age < 25) acc.push(item.name)
    return acc
},[]).join(', ')
    // ?
    console.log(message); // 'Young users: Dima, Ira'
//
// // 6) Побудувати масив довжин слів, довших за 3 символи - замінить map i filter на reduce
//
// const words = ['hi', 'hello', 'yo', 'goodbye', 'ok'];
//
// // ?
// console.log(lengths); // [5, 7]
