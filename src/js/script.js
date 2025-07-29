import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";

(() => {
    // використовуючи every, визначить,
    // - чи є адмін серед юзерів // чи нема не адміна серед юзерів
    // - чи є не адмін серед юзерів // чи нема адміна серед юзерів

    const users1 = [{ name: 'Joe', role: 'admin' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];

    const hasAdmin1 = !every(users1, (item) => item.role !== 'admin') // true
    const hasNotAdmin1 = !every(users1, (item) => item.role === 'admin') // false

    console.log(hasAdmin1)
    console.log(hasNotAdmin1)

    const users2 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'admin' }, { name: 'Lily', role: 'admin' }];

    const hasAdmin2 = !every(users2, (item) => item.role !== 'admin') // true
    const hasNotAdmin2 =!every(users2, (item) => item.role === 'admin') // true

    console.log(hasAdmin2)
    console.log(hasNotAdmin2)


    const users3 = [{ name: 'Joe', role: 'user' }, { name: 'Kate', role: 'user' }, { name: 'Lily', role: 'user' }];

    const hasAdmin3 = !every(users3, (item) => item.role !== 'admin') // false
    const hasNotAdmin3 = !every(users3, (item) => item.role === 'admin') // true

    console.log(hasAdmin3)
    console.log(hasNotAdmin3)
})();

(() => {
    // Побудувати масив довжин слів, довших за 3 символи - замінить map i filter на reduce

     const words = ['hi', 'hello', 'yo', 'goodbye', 'ok'];

    const lengths = reduce(words, (acc, item) => {
        if (item.length > 3) acc.push(item.length)
        return acc
    },[])

    console.log(lengths); // [5, 7]
})();

(() => {
    // Побудувати масив emailів активних користувачів з використанням reduce

    const users = [
        { name: 'Anna', email: 'anna@mail.com', isActive: true },
        { name: 'Oleh', email: 'oleh@mail.com', isActive: false },
        { name: 'Dima', email: 'dima@mail.com', isActive: true },
    ];

    const activeEmails = reduce(users, (acc, item) => {
        if (item.isActive) acc.push(item.email)
        return acc
    },[]);

    console.log(activeEmails); // ['anna@mail.com', 'dima@mail.com']

})();
//
(() => {
    // Побудувати масив імен людей, які мають більше 3 друзів з використанням reduce

    const people = [
        { name: 'Ira', friendsCount: 2 },
        { name: 'Vlad', friendsCount: 5 },
        { name: 'Nastya', friendsCount: 8 },
        { name: 'Petro', friendsCount: 1 },
    ];

    const popularNames = reduce(people, (acc, item) => {
        if (item.friendsCount > 3) acc.push(item.name)

        return acc
    }, [])
    console.log(popularNames); // ['Vlad', 'Nastya']

})();
//
(() => {
    // Побудувати масив повідомлень у верхньому регістрі, але тільки тих, що довші за 10 символів з використанням reduce

    const messages = [
        'hi',
        'hello world',
        'ok',
        'this is long',
        'short',
    ];

    const longMessagesUpper = reduce(messages, (acc, item) =>{
    if (item.length > 10) acc.push(item.toUpperCase())
        return acc
    },[])
    console.log(longMessagesUpper); // ['HELLO WORLD', 'THIS IS LONG']

})();
//
(() => {
    // Побудувати рядок назв товарів, ціна яких менше 100 з використанням reduce

    const products = [
        { name: 'Mouse', price: 80 },
        { name: 'Monitor', price: 300 },
        { name: 'Keyboard', price: 90 },
    ];

     const cheapProductNames = 'Cheap product names: ' + reduce(products, (acc, item)=> {
         if (item.price < 100) acc.push(item.name)
         return acc
     },[]).join(', ')
    console.log(cheapProductNames); // 'Cheap product names: Mouse, Keyboard'

})();
//
(() => {
    // Побудувати рядок фраз типу "NAME is Y years old" тільки для тих, хто старший за 20 з використанням reduce

    const users = [
        { name: 'Lena', age: 19 },
        { name: 'Sergiy', age: 25 },
        { name: 'Olga', age: 21 },
    ];

    const info = 'Oldies: ' + reduce(users, (acc, item)=> {
        if (item.age > 20) acc.push(`${item.name} is ${item.age} years old`)
        return acc
    },[]).join('; ')
    console.log(info); // 'Oldies: Sergiy is 25 years old; Olga is 21 years old'

})();
//
(() => {
    // Порахувати суму довжин назв фільмів, які починаються на літеру 'T' з використанням reduce

    const movies = ['Titanic', 'Avatar', 'Top Gun', 'Inception', 'Tenet'];

    const lengthSum = reduce(movies, (acc, item) => {
        if (item[0] === 'T') acc += item.length
        return acc
    }, 0)
    console.log(lengthSum); // 19

})();
//
(() => {
    // реалізувать свій trim, який прибирає пробіли з початку і кінця рядка
    // підказка: розглядати рядок як масив символів - у нього теж є довжина і читання по індексу

    function trim(str) {
        // for (let i = 0; i <= str.length; i++) {
        //     if (str[0] === ' ') str = str.slice(1)
        //     if (str.at(-1) === ' ') str = str.slice(0, -1)
        // }

        while (str[0] === ' ') {
            str = str.slice(1)
        }
        while (str.at(-1) === ' ') {
            str = str.slice(0, -1)
        }
        return str
    }

    const trimmed1 = trim('    ololo'); // 'ololo'
    console.log(trimmed1)
    const trimmed2 = trim('ololo      '); // 'ololo'
    console.log(trimmed2)
    const trimmed3 = trim('    ololo     '); // 'ololo'
    console.log(trimmed3)
    const trimmed4 = trim('    ololo   ololo   '); // 'ololo   ololo'
    console.log(trimmed4)
})();
//
(() => {
    // реалізувать аля trim для масиву символів, який прибирає пробіли з початку і кінця масиву

    function trim(arr) {
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[0] === ' ') arr = arr.slice(1)
        //     if (arr.at(-1) === ' ') arr = arr.slice(0, -1)
        // }

        while (arr[0] === ' ') {
            arr = arr.slice(1)
        }
        while (arr.at(-1) === ' ') {
            arr = arr.slice(0, -1)
        }
        return arr
    }

    const trimmed1 = trim([' ', ' ', ' ', 'o', 'l', 'o', 'l', 'o']); // ['o', 'l', 'o', 'l', 'o']
    console.log(trimmed1)
    const trimmed2 = trim([' ', ' ', ' ', 'o', 'l', 'o', 'l', 'o', ' ', ' ']); // ['o', 'l', 'o', 'l', 'o']
    console.log(trimmed2)
    const trimmed3 = trim([' ', ' ', ' ', 'o', 'l', 'o', 'l', 'o', ' ', ' ']); // ['o', 'l', 'o', 'l', 'o']
    console.log(trimmed3)
    const trimmed4 = trim([' ', ' ', 'o', 'l', 'o', 'l', 'o', ' ', ' ', ' ', 'o', 'l', 'o', 'l', 'o', ' ', ' ', ' ']); // ['o', 'l', 'o', 'l', 'o', ' ', ' ', ' ', 'o', 'l', 'o', 'l', 'o']
    console.log(trimmed4)
})();

/*
знайди рівнозначні твердження. Дається одна фраза. Треба знайти серед варіантів ту, яка означає рівно те саме, але інакше сформульована.

1. Всі юзери — адміни
A) Кожен юзер не адмін
B) Немає жодного юзера, який не є адміном +
C) Хоча б один юзер не є адміном
D) Деякі адміни — не юзери

2. Не всі задачі складні
A) Всі задачі прості
B) Жодна задача не складна
C) Є хоча б одна задача, яка не складна +
D) Всі задачі складні

3. Хоч один з товарів без знижки
A) Всі товари без знижки
B) Немає товарів без знижки
C) Є товари зі знижкою
D) Не всі товари мають знижку +

4. Усі студенти здали тест
A) Є студенти, які не здали тест
B) Ніхто зі студентів не провалився +
C) Деякі студенти склали тест
D) Один студент точно здав

5. Жоден працівник не спізнився
A) Всі працівники прийшли вчасно +
B) Хоч один працівник спізнився
C) Деякі працівники прийшли вчасно
D) Ніхто не прийшов

————————————

Треба сформулювати те саме інакше. замість "усі" має бути "деякий", "жоден", "хоча б один" і навпаки (приклади в тестах вище).

1. Усі студенти програмують на JavaScript
→ ? Немає студентів які не програмують на JS

2. Є хоча б один працівник, який не носить бейдж
→ ?  не усі працівникі носять бейдж

3. Жодна задача не залишилася без рішення
→ ?Усі задачі були вирішені

4. Не всі фрукти свіжі
→ Деякі фрукти не свіжі

5. Немає жодного рядка коду, який працює правильно
→ ? усі рядки коду првцюють неправильно

 */



//10) використовуючи свої map і filter, прибрати пробіли (без trim) і зробити всі слова великими

const words = [' apple          ', 'banana', '  cherry', ' date '];

const trimmed = reduce(words, (acc, item) => {
// debugger
    // for (let i = 0; i <= item.length; i++) {
    //     if (item[0] === ' ') {
    //         item = item.slice(1)
    //     }
    //     if (item.at(-1) === ' ') {
    //         item = item.slice(0, -1)
    //     }
    //
    //     // break
    // }

    while (item[0] === ' ') {
        item = item.slice(1)
    }
    while (item.at(-1) === ' ') {
        item = item.slice(0, -1)
    }
    acc.push(item.toUpperCase())
    return acc
},[]);

    console.log(trimmed); // ['APPLE', 'BANANA', 'CHERRY', 'DATE']
