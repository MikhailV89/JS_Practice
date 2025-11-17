import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";

// додати кожному користувачу:
// - fullName
// - address — { city, street, house }
// видалити поля city, street, house


const users7 = [
    { firstName: 'Anna', lastName: 'Shevchenko', city: 'Kyiv', street: 'Khreshchatyk', house: 10 },
    { firstName: 'Oleh', lastName: 'Kovalenko', city: 'Lviv', street: 'Bandery', house: 5 }
];

for (let i = 0; i < users7.length; i++) {
    users7[i].fullName = `${users7[i].firstName} ${users7[i].lastName}`

    users7[i].address = {city: users7[i].city, street: users7[i].street, house: users7[i].house}
    delete users7[i].city
    delete users7[i].house
    delete users7[i].street
}

console.log(users7);
/*
[
  {
    firstName: 'Anna',
    lastName: 'Shevchenko',
    fullName: 'Anna Shevchenko',
    address: { city: 'Kyiv', street: 'Khreshchatyk', house: 10 }
  },
  {
    firstName: 'Oleh',
    lastName: 'Kovalenko',
    fullName: 'Oleh Kovalenko',
    address: { city: 'Lviv', street: 'Bandery', house: 5 }
  }
]
*/



// додати користувачу:
// - fullName
// - address — { city, street, house }
// видалити поля city, street, house


const user = {
    firstName: 'Anna',
    lastName: 'Shevchenko',
    city: 'Kyiv',
    street: 'Khreshchatyk',
    house: 10
};

user.fullName = `${user.firstName} ${user.lastName}`
user.address = {city: user.city, street: user.street, house: user.house}

delete user.city
delete user.house
delete user.street
// ?

console.log(user);
/*
  {
    firstName: 'Anna',
    lastName: 'Shevchenko',
    fullName: 'Anna Shevchenko',
    address: { city: 'Kyiv', street: 'Khreshchatyk', house: 10 }
  }
*/
//--------------------------------------------------------------------


//1) додаи кожному студенту:
 //   - averageMark (середнє значення з масиву marks)
//- maxMark (найвища оцінка)
//- status: 'excellent' якщо середній >= 9, інакше 'normal'

const students1 = [
    { name: 'Ira', marks: [10, 8, 9, 7, 10] },
    { name: 'Dmytro', marks: [6, 7, 8, 5, 9] },
    { name: 'Sofia', marks: [9, 10, 10, 8, 9] }
];

 for (let i = 0; i < students1.length; i++) {
     students1[i].averageMark = 0
     let maxNum = students1[i].marks[0]
     for (let j = 0; j < students1[i].marks.length; j++) {
         students1[i].averageMark += students1[i].marks[j] / students1[i].marks.length

         if (students1[i].marks[j] > maxNum) maxNum = students1[i].marks[j]

     }
        students1[i].maxMark = maxNum
        students1[i].status = students1[i].averageMark >= 9 ? 'excellent' : 'normal'
 }

console.log(students1);
/*
[
  { name: 'Ira', marks: [10, 8, 9, 7, 10], averageMark: 8.8, maxMark: 10, status: 'normal' },
  { name: 'Dmytro', marks: [6, 7, 8, 5, 9], averageMark: 7, maxMark: 9, status: 'normal' },
  { name: 'Sofia', marks: [9, 10, 10, 8, 9], averageMark: 9.2, maxMark: 10, status: 'excellent' }
]
*/

//2) створити новий масив, де для кожного продукту буде:
 //   - total (price * quantity)
  //  - статус 'expensive', якщо total > 2000


const products = [
    { id: 'p1', name: 'Phone', price: 800 },
    { id: 'p2', name: 'Laptop', price: 2000 },
    { id: 'p3', name: 'Tablet', price: 1000 }
];

const orders = [
    { productId: 'p1', quantity: 3 },
    { productId: 'p2', quantity: 1 },
    { productId: 'p3', quantity: 2 }
];

let result = []
 for (let i = 0; i < products.length; i++) {
     for (let j = 0; j < orders.length; j++) {
         if (products[i].id === orders[j].productId) {
             products[i].total = products[i].price * orders[j].quantity
             products[i].quantity = orders[j].quantity
         }
     }
     products[i].status = products[i].total > 2000 ? 'expensive' : 'normal'
     result.push(products[i])
 }

 console.log(result);
// /*
// [
//   { id: 'p1', name: 'Phone', price: 800, quantity: 3, total: 2400, status: 'expensive' },
//   { id: 'p2', name: 'Laptop', price: 2000, quantity: 1, total: 2000, status: 'normal' },
//   { id: 'p3', name: 'Tablet', price: 1000, quantity: 2, total: 2000, status: 'normal' }
// ]
// */
//
// //3) Побудувати масив авторів, де в кожного:
//  //   - books: масив його книг { id, title, avgScore, reviewsCount } (avgScore — середнє з reviews;
//  якщо немає — null і 0).
// //- totalReviews: загальна кількість відгуків по всіх його книгах.
// //- bestBook: назва книги з найбільшим avgScore (або null, якщо всі без відгуків).
//
const authors = [
    { id: 'a1', name: 'Tolkien' },
    { id: 'a2', name: 'Rowling' }
];

const books = [
    { id: 'b1', title: 'LOTR', authorId: 'a1' },
    { id: 'b2', title: 'Hobbit', authorId: 'a1' },
    { id: 'b3', title: 'HP1', authorId: 'a2' },
    { id: 'b4', title: 'HP2', authorId: 'a2' }
];

const reviews = [
    { bookId: 'b1', score: 10 },
    { bookId: 'b1', score: 9 },
    { bookId: 'b2', score: 8 },
    { bookId: 'b3', score: 7 },
    { bookId: 'b3', score: 9 },
    { bookId: 'b4', score: 6 }
];

let result1 = []

for (let i = 0; i < authors.length; i++) {
    authors[i].books = []
    for (let j = 0; j < books.length; j++) {
        if (authors[i].id === books[j].authorId) {
            authors[i].books.push(books[j])
            delete books[j].authorId
        }
    }
    result1.push(authors[i])
}


for (let i = 0; i < result1.length; i++) {
    for (let j = 0; j < result1[i].books.length; j++) {
        result1[i].books[j].avgScore = 0
        let count = 0
        for (let q = 0; q < reviews.length; q++) {
            if (reviews[q].bookId === result1[i].books[j].id) {
                 result1[i].books[j].avgScore += reviews[q].score
                count++
             }
        }
        result1[i].books[j].avgScore /= count
        result1[i].books[j].reviewsCount = count
    }
}

console.log(result1);
// /*
// [
//   {
//     id: 'a1',
//     name: 'Tolkien',
//     books: [
//       { id: 'b1', title: 'LOTR',   avgScore: 9.5, reviewsCount: 2 },
//       { id: 'b2', title: 'Hobbit', avgScore: 8,   reviewsCount: 1 }
//     ],
//     totalReviews: 3,
//     bestBook: 'LOTR'
//   },
//   {
//     id: 'a2',
//     name: 'Rowling',
//     books: [
//       { id: 'b3', title: 'HP1', avgScore: 8, reviewsCount: 2 },
//       { id: 'b4', title: 'HP2', avgScore: 6, reviewsCount: 1 }
//     ],
//     totalReviews: 3,
//     bestBook: 'HP1'
//   }
// ]
// */
//
// //4) Зібрати масив магазинів, де в кожного:
//   //  - orders: масив його замовлень у форматі { id, customer, total, items }, де total = Σ(price * qty),
//   items — масив назв.
// //- revenue: сума total по всіх замовленнях магазину.
// //- categories: об’єкт-статистика по категоріях { category: totalQty } (сума кількості по категоріях)
//
// const shops = [
//     { id: 's1', name: 'TechStore' },
//     { id: 's2', name: 'HomeGoods' }
// ];
//
// const orders1 = [
//     { id: 'o1', shopId: 's1', customer: 'Anna' },
//     { id: 'o2', shopId: 's1', customer: 'John' },
//     { id: 'o3', shopId: 's2', customer: 'Ira' }
// ];
//
// const items = [
//     { orderId: 'o1', title: 'Laptop',    price: 2000, qty: 1, category: 'tech' },
//     { orderId: 'o1', title: 'Mouse',     price: 50,   qty: 2, category: 'tech' },
//     { orderId: 'o2', title: 'Vacuum',    price: 300,  qty: 1, category: 'home' },
//     { orderId: 'o3', title: 'Pan',       price: 40,   qty: 3, category: 'home' },
//     { orderId: 'o3', title: 'Towels',    price: 20,   qty: 5, category: 'home' }
// ];



console.log(result);
// /*
// [
//   {
//     id: 's1',
//     name: 'TechStore',
//     orders: [
//       { id: 'o1', customer: 'Anna', total: 2100, items: ['Laptop', 'Mouse', 'Mouse'] },
//       { id: 'o2', customer: 'John', total: 300,  items: ['Vacuum'] }
//     ],
//     revenue: 2400,
//     categories: { tech: 3, home: 1 }
//   },
//   {
//     id: 's2',
//     name: 'HomeGoods',
//     orders: [
//       { id: 'o3', customer: 'Ira', total: 200, items: ['Pan', 'Pan', 'Pan', 'Towels', 'Towels', 'Towels', 'Towels', 'Towels'] }
//     ],
//     revenue: 200,
//     categories: { home: 8 }
//   }
// ]
// */
//
// //5) Побудувати масив курсів, де в кожного:
// //- students: масив студентів цього курсу у форматі { id, name, avgScore, attempts },
// де avgScore — середнє по grades за курсом/студентом, attempts — кількість оцінок.
// //- avgCourseScore: середній бал курсу (середнє з усіх оцінок курсу).
// //- topStudent: ім’я студента з найбільшим avgScore (якщо нічиї — будь-хто з топів).
//
// const courses = [
//     { id: 'c1', title: 'JS Basics' },
//     { id: 'c2', title: 'React' }
// ];
//
// const enrollments = [
//     { courseId: 'c1', studentId: 'u1' },
//     { courseId: 'c1', studentId: 'u2' },
//     { courseId: 'c2', studentId: 'u1' }
// ];
//
// const students = [
//     { id: 'u1', name: 'Anna' },
//     { id: 'u2', name: 'John' }
// ];
//
// const grades = [
//     { courseId: 'c1', studentId: 'u1', score: 10 },
//     { courseId: 'c1', studentId: 'u1', score: 8 },
//     { courseId: 'c1', studentId: 'u2', score: 7 },
//     { courseId: 'c2', studentId: 'u1', score: 9 }
// ];
//
// console.log(result);
// /*
// [
//   {
//     id: 'c1',
//     title: 'JS Basics',
//     students: [
//       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 2 },
//       { id: 'u2', name: 'John', avgScore: 7, attempts: 1 }
//     ],
//     avgCourseScore: 8.5,
//     topStudent: 'Anna'
//   },
//   {
//     id: 'c2',
//     title: 'React',
//     students: [
//       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 1 }
//     ],
//     avgCourseScore: 9,
//     topStudent: 'Anna'
//   }
// ]
// */

