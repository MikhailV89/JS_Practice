import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";


// //3) Побудувати масив авторів, де в кожного:
//  //   - books: масив його книг { id, title, avgScore, reviewsCount } (avgScore — середнє з reviews;
//  якщо немає — null і 0).
// //- totalReviews: загальна кількість відгуків по всіх його книгах.
// //- bestBook: назва книги з найбільшим avgScore (або null, якщо всі без відгуків).

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
    let total = 0
    let best = result1[i].books[0]
    for (let j = 0; j < result1[i].books.length; j++) {
        total += result1[i].books[j].reviewsCount
        if (result1[i].books[j].avgScore > best.avgScore) best = result1[i].books[j]
    }
    result1[i].totalReviews = total
    result1[i].bestBook =  best.title
}

// for (let i = 0; i < result1.length; i++) {
//     let total = 0
//     let best = result1[i].books[0]
//     for (let j = 0; j < result1[i].books.length; j++) {
//         total += result1[i].books[j].reviewsCount
//     if (result1[i].books[j].avgScore > best.avgScore) best = result1[i].books[j]
//     }
//     result1[i].totalReviews = total

//     result1[i].bestBook =  best.title
// }
console.log(authors)
console.log(result1);
// // /*
// // [
// //   {
// //     id: 'a1',
// //     name: 'Tolkien',
// //     books: [
// //       { id: 'b1', title: 'LOTR',   avgScore: 9.5, reviewsCount: 2 },
// //       { id: 'b2', title: 'Hobbit', avgScore: 8,   reviewsCount: 1 }
// //     ],
// //     totalReviews: 3,
// //     bestBook: 'LOTR'
// //   },
// //   {
// //     id: 'a2',
// //     name: 'Rowling',
// //     books: [
// //       { id: 'b3', title: 'HP1', avgScore: 8, reviewsCount: 2 },
// //       { id: 'b4', title: 'HP2', avgScore: 6, reviewsCount: 1 }
// //     ],
// //     totalReviews: 3,
// //     bestBook: 'HP1'
// //   }
// // ]
// // */
// //
// // //4) Зібрати масив магазинів, де в кожного:
// //   //  - orders: масив його замовлень у форматі { id, customer, total, items }, де total = Σ(price * qty),
// //   items — масив назв.
// // //- revenue: сума total по всіх замовленнях магазину.
// // //- categories: об’єкт-статистика по категоріях { category: totalQty } (сума кількості по категоріях)
// //
const shops = [
    { id: 's1', name: 'TechStore' },
    { id: 's2', name: 'HomeGoods' }
];

const orders1 = [
    { id: 'o1', shopId: 's1', customer: 'Anna' },
    { id: 'o2', shopId: 's1', customer: 'John' },
    { id: 'o3', shopId: 's2', customer: 'Ira' }
];

const items = [
    { orderId: 'o1', title: 'Laptop',    price: 2000, qty: 1, category: 'tech' },
    { orderId: 'o1', title: 'Mouse',     price: 50,   qty: 2, category: 'tech' },
    { orderId: 'o2', title: 'Vacuum',    price: 300,  qty: 1, category: 'home' },
    { orderId: 'o3', title: 'Pan',       price: 40,   qty: 3, category: 'home' },
    { orderId: 'o3', title: 'Towels',    price: 20,   qty: 5, category: 'home' }
];

let result2 = []

for (let i = 0; i < shops.length; i++) {
    shops[i].orders = []
    for (let j = 0; j < orders1.length; j++) {
        if (shops[i].id === orders1[j].shopId) {
            shops[i].orders.push(orders1[j])
            delete orders1[j].shopId
        }
    }
    result2.push(shops[i])
}

for (let i = 0; i < result2.length; i++) {
    for (let j = 0; j < result2[i].orders.length; j++) {
        let res = 0
        result2[i].orders[j].items = []

        for (let q = 0; q < items.length; q++) {
            if (items[q].orderId === result2[i].orders[j].id) {
               res += items[q].price * items[q].qty
               for (let h = 0; h < items[q].qty; h++ ) {
                   result2[i].orders[j].items.push(items[q].title)
               }
            }
        }
        result2[i].orders[j].total = res
    }
}

for(let i = 0; i < result2.length; i++) {
    let sum = 0
    for (let j = 0; j < result2[i].orders.length; j++) {
        sum +=  result2[i].orders[j].total
    }
    result2[i].revenue = sum
}

for (let i = 0; i < result2.length; i++) {
    result2[i].categories = reduce(result2[i].orders, (acc, element)=>{
        for (let j = 0; j < element.items.length; j++) {
            let category = null
            for (let k = 0; k < items.length; k++) {
                if (element.items[j] === items[k].title) {
                    category = items[k].category
                    break
                }
            }
            if (!acc[category]) acc[category] = 0
                acc[category]++
        }
        return acc
    }, {})
}

console.log(result2);
// // /*
// // [
// //   {
// //     id: 's1',
// //     name: 'TechStore',
// //     orders: [
// //       { id: 'o1', customer: 'Anna', total: 2100, items: ['Laptop', 'Mouse', 'Mouse'] },
// //       { id: 'o2', customer: 'John', total: 300,  items: ['Vacuum'] }
// //     ],
// //     revenue: 2400,
// //     categories: { tech: 3, home: 1 }
// //   },
// //   {
// //     id: 's2',
// //     name: 'HomeGoods',
// //     orders: [
// //       { id: 'o3', customer: 'Ira', total: 220, items: ['Pan', 'Pan', 'Pan', 'Towels', 'Towels', 'Towels', 'Towels', 'Towels'] }
// //     ],
// //     revenue: 220,
// //     categories: { home: 8 }
// //   }
// // ]
// // */
// //
// // //5) Побудувати масив курсів, де в кожного:
// // //- students: масив студентів цього курсу у форматі { id, name, avgScore, attempts },
// // де avgScore — середнє по grades за курсом/студентом, attempts — кількість оцінок.
// // //- avgCourseScore: середній бал курсу (середнє з усіх оцінок курсу).
// // //- topStudent: ім’я студента з найбільшим avgScore (якщо нічиї — будь-хто з топів).
// //
// // const courses = [
// //     { id: 'c1', title: 'JS Basics' },
// //     { id: 'c2', title: 'React' }
// // ];
// //
// // const enrollments = [
// //     { courseId: 'c1', studentId: 'u1' },
// //     { courseId: 'c1', studentId: 'u2' },
// //     { courseId: 'c2', studentId: 'u1' }
// // ];
// //
// // const students = [
// //     { id: 'u1', name: 'Anna' },
// //     { id: 'u2', name: 'John' }
// // ];
// //
// // const grades = [
// //     { courseId: 'c1', studentId: 'u1', score: 10 },
// //     { courseId: 'c1', studentId: 'u1', score: 8 },
// //     { courseId: 'c1', studentId: 'u2', score: 7 },
// //     { courseId: 'c2', studentId: 'u1', score: 9 }
// // ];
// //
// // console.log(result);
// // /*
// // [
// //   {
// //     id: 'c1',
// //     title: 'JS Basics',
// //     students: [
// //       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 2 },
// //       { id: 'u2', name: 'John', avgScore: 7, attempts: 1 }
// //     ],
// //     avgCourseScore: 8.5,
// //     topStudent: 'Anna'
// //   },
// //   {
// //     id: 'c2',
// //     title: 'React',
// //     students: [
// //       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 1 }
// //     ],
// //     avgCourseScore: 9,
// //     topStudent: 'Anna'
// //   }
// // ]
// // */
//
// //---------------------------------------------
//
//
//
// //1) Додати статистику по менторських сесіях
//
// //Для кожного ментора порахувати:
//
//   //  * sessions: масив його сесій { id, topic, rating }
// //* avgRating: середній рейтинг (до одного знака після крапки)
// //* sessionsCount: кількість сесій
// //* status: 'top' якщо avgRating ≥ 4.5 і sessionsCount ≥ 3, інакше 'regular'
//
const mentors = [
    { id: 'm1', name: 'Maria' },
    { id: 'm2', name: 'Oleh' },
    { id: 'm3', name: 'Ira' }
];

const sessions = [
    { id: 's1', mentorId: 'm1', topic: 'JS Basics', rating: 5 },
    { id: 's2', mentorId: 'm1', topic: 'Arrays', rating: 4 },
    { id: 's3', mentorId: 'm2', topic: 'HTML', rating: 4 },
    { id: 's4', mentorId: 'm1', topic: 'Functions', rating: 5 },
    { id: 's5', mentorId: 'm3', topic: 'CSS', rating: 3 },
    { id: 's6', mentorId: 'm2', topic: 'Flexbox', rating: 5 }
];

mentors.forEach(a => {
    a.sessions = sessions.filter(b => b.mentorId === a.id)
})

for (let i = 0; i < mentors.length; i++) {
    mentors[i].sessionsCount = mentors[i].sessions.length
        let sum = 0

    for (let j = 0; j < mentors[i].sessions.length; j++) {
        sum += mentors[i].sessions[j].rating;

    }
    mentors[i].avgRating = sum / mentors[i].sessions.length
    mentors[i].status = mentors[i].avgRating >= 4.5 && mentors[i].sessionsCount >= 3 ? 'top' : 'regular'
}

console.log(mentors)
//
// console.log(result);
// /*
// [
// {
// id: 'm1',
// name: 'Maria',
// sessions: [
// { id: 's1', topic: 'JS Basics', rating: 5 },
// { id: 's2', topic: 'Arrays', rating: 4 },
// { id: 's4', topic: 'Functions', rating: 5 }
// ],
// avgRating: 4.7,
// sessionsCount: 3,
// status: 'top'
// },
// {
// id: 'm2',
// name: 'Oleh',
// sessions: [
// { id: 's3', topic: 'HTML', rating: 4 },
// { id: 's6', topic: 'Flexbox', rating: 5 }
// ],
// avgRating: 4.5,
// sessionsCount: 2,
// status: 'regular'
// },
// {
// id: 'm3',
// name: 'Ira',
// sessions: [
// { id: 's5', topic: 'CSS', rating: 3 }
// ],
// avgRating: 3.0,
// sessionsCount: 1,
// status: 'regular'
// }
// ]
// */
//
// //2) Об’єднати продукти з продажами і додати підсумки
//
// //Створити масив, де для кожного продукту:
//
//  //   * soldQty: загальна кількість проданих одиниць
// //* revenue: price * soldQty
// //* tag: 'bestseller' якщо soldQty більше 5 або revenue більше 3000, інакше 'normal'
//
const products = [
    { id: 'p1', name: 'Phone', price: 800 },
    { id: 'p2', name: 'Laptop', price: 2000 },
    { id: 'p3', name: 'Tablet', price: 600 }
];

const sales = [
    { productId: 'p1', qty: 2 },
    { productId: 'p2', qty: 1 },
    { productId: 'p3', qty: 6 },
    { productId: 'p1', qty: 1 }
];

for (let i = 0; i < products.length; i++) {
    let value = 0
    for (let j = 0; j < sales.length; j++) {
        if (products[i].id === sales[j].productId) {
            value += sales[j].qty

        }
    }
    products[i].soldQty = value
    products[i].revenue = products[i].price * products[i].soldQty
    products[i].tag = products[i].soldQty > 5 || products[i].revenue > 3000 ? 'bestseller' : 'normal'

}
console.log(products)

// /*
// [
// { id: 'p1', name: 'Phone',  price: 800,  soldQty: 3, revenue: 2400, tag: 'normal' },
// { id: 'p2', name: 'Laptop', price: 2000, soldQty: 1, revenue: 2000, tag: 'normal' },
// { id: 'p3', name: 'Tablet', price: 600,  soldQty: 6, revenue: 3600, tag: 'bestseller' }
// ]
// */
//
// 3//) Платформа відео: шоу → сезони → епізоди
//
// //Побудувати масив шоу, де:
//
// //* seasons: масив { id, title, episodesCount, totalMinutes, longestEpisode } (longestEpisode — назва найдовшого епізоду сезону)
// //* totalMinutes: загальна тривалість шоу (сума по всіх сезонах)
// //* avgEpisode: середня тривалість епізоду по шоу (до одного знака)
// // topSeason: назва сезону з найбільшою totalMinutes
//
const shows = [
    { id: 'sh1', title: 'Frontend Show' },
    { id: 'sh2', title: 'Backend Show' }
];

const seasons = [
    { id: 's1', showId: 'sh1', title: 'Season 1' },
    { id: 's2', showId: 'sh1', title: 'Season 2' },
    { id: 's3', showId: 'sh2', title: 'Season 1' }
];

const episodes = [
    { seasonId: 's1', title: 'HTML', minutes: 25 },
    { seasonId: 's1', title: 'CSS', minutes: 30 },
    { seasonId: 's2', title: 'JS', minutes: 45 },
    { seasonId: 's2', title: 'React', minutes: 50 },
    { seasonId: 's3', title: 'Node', minutes: 40 },
    { seasonId: 's3', title: 'DB', minutes: 35 }
];

for(let i = 0; i < shows.length; i++) {
    shows[i].seasons = []
    for (let j = 0; j < seasons.length; j++) {
        if (shows[i].id === seasons[j].showId) {
            shows[i].seasons.push(seasons[j])
        }
    }
}

for (let i = 0 ;i < seasons.length; i++) {
    seasons[i].episodesCount = 0
    seasons[i].totalMinutes = 0
    let startEl = null
    for (let j = 0; j < episodes.length; j++) {

        if (seasons[i].id === episodes[j].seasonId) {
            seasons[i].episodesCount++
            seasons[i].totalMinutes += episodes[j].minutes
            if (startEl === null || episodes[j].minutes > startEl.minutes) {
                startEl = episodes[j]
            }
        }

    }
    seasons[i].longestEpisode = startEl.title
}

for (let i = 0; i < shows.length; i++) {
    shows[i].totalMinutes = 0
    let num = 0
    let top = null
    for (let j = 0; j < shows[i].seasons.length; j++) {
        shows[i].totalMinutes += shows[i].seasons[j].totalMinutes
       num += shows[i].seasons[j].episodesCount

        if (top === null || shows[i].seasons[j].totalMinutes > top.totalMinutes) {
            top = shows[i].seasons[j]
        }
    }
    shows[i].avgEpisode =  shows[i].totalMinutes / num
    shows[i].topSeason = top.title
}
console.log(shows)
// console.log(result);
// /*
// [
// {
// id: 'sh1',
// title: 'Frontend Show',
// seasons: [
// { id: 's1', title: 'Season 1', episodesCount: 2, totalMinutes: 55, longestEpisode: 'CSS' },
// { id: 's2', title: 'Season 2', episodesCount: 2, totalMinutes: 95, longestEpisode: 'React' }
// ],
// totalMinutes: 150,
// avgEpisode: 37.5,
// topSeason: 'Season 2'
// },
// {
// id: 'sh2',
// title: 'Backend Show',
// seasons: [
// { id: 's3', title: 'Season 1', episodesCount: 2, totalMinutes: 75, longestEpisode: 'Node' }
// ],
// totalMinutes: 75,
// avgEpisode: 37.5,
// topSeason: 'Season 1'
// }
// ]
// */
//
// //4) Саппорт: агенти → тікети → SLA
//
// //Для кожного агента:
//
//  //   * tickets: масив його тікетів { id, status, minutes }
// //* doneCount: кількість тікетів зі статусом 'done'
// //* breached: кількість тікетів, де minutes > slaMinutes
// //* grade: 'gold' якщо doneCount ≥ 3 і breached = 0, 'silver' якщо doneCount ≥ 2, інакше 'bronze'
//
const agents = [
    { id: 'a1', name: 'Anna', slaMinutes: 60 },
    { id: 'a2', name: 'John', slaMinutes: 45 }
];


const tickets = [
    { id: 't1', agentId: 'a1', status: 'done', minutes: 40 },
    { id: 't2', agentId: 'a1', status: 'done', minutes: 55 },
    { id: 't3', agentId: 'a1', status: 'in progress', minutes: 80 },
    { id: 't4', agentId: 'a2', status: 'done', minutes: 30 },
    { id: 't5', agentId: 'a2', status: 'done', minutes: 50 }
];

agents.forEach(a => {
    a.tickets = tickets.filter(b => b.agentId === a.id)
    a.grade = ''
    let done = 0;
    let ticketCount = 0
    for (let j = 0; j < a.tickets.length; j++) {
        if (a.tickets[j].status === 'done') done++
        if (a.tickets[j].minutes > a.slaMinutes) ticketCount++
    }
    a.doneCount = done
    a.breached = ticketCount

    if ( a.doneCount >= 3 &&  a.breached === 0) {
        a.grade = 'gold'
    } else if (a.doneCount >= 2) {
        a.grade = 'silver'
    } else {
        a.grade = 'bronze'
    }
})

// for (let i = 0; i < agents.length; i++) {
//     agents[i].grade = ''
//     let done = 0;
//     let ticketCount = 0
//     for (let j = 0; j < agents[i].tickets.length; j++) {
//         if (agents[i].tickets[j].status === 'done') done++
//         if (agents[i].tickets[j].minutes > agents[i].slaMinutes) ticketCount++
//     }
//     agents[i].doneCount = done
//     agents[i].breached = ticketCount
//
//     if ( agents[i].doneCount >= 3 &&  agents[i].breached === 0) {
//         agents[i].grade = 'gold'
//     } else if (agents[i].doneCount >= 2) {
//         agents[i].grade = 'silver'
//     } else {
//         agents[i].grade = 'bronze'
//     }
// }

const result = agents
console.log(result);
// /*
// [
// {
// id: 'a1',
// name: 'Anna',
// slaMinutes: 60,
// tickets: [
// { id: 't1', status: 'done', minutes: 40 },
// { id: 't2', status: 'done', minutes: 55 },
// { id: 't3', status: 'in progress', minutes: 80 }
// ],
// doneCount: 2,
// breached: 1,
// grade: 'silver'
// },
// {
// id: 'a2',
// name: 'John',
// slaMinutes: 45,
// tickets: [
// { id: 't4', status: 'done', minutes: 30 },
// { id: 't5', status: 'done', minutes: 50 }
// ],
// doneCount: 2,
// breached: 1,
// grade: 'silver'
// }
// ]
// */
//
// //5) Ресторани: меню → замовлення → аналітика
//
// //Побудувати масив ресторанів, де:
//
// //* orders: масив { id, customer, total, items } (items — масив назв, total — сума price * qty)
// //* revenue: загальна виручка
// //* topItem: назва страви з найбільшою кількістю замовлених одиниць у ресторані
// //* categories: { category: totalQty }
//
// const restaurants = [
//     { id: 'r1', name: 'La Pasta' },
//     { id: 'r2', name: 'Sushi Go' }
// ];
//
// const menu = [
//     { id: 'm1', restaurantId: 'r1', title: 'Carbonara', price: 12, category: 'pasta' },
//     { id: 'm2', restaurantId: 'r1', title: 'Bolognese', price: 11, category: 'pasta' },
//     { id: 'm3', restaurantId: 'r2', title: 'Nigiri',     price: 8,  category: 'sushi' },
//     { id: 'm4', restaurantId: 'r2', title: 'Udon',       price: 10, category: 'noodles' }
// ];
//
// const orders = [
//     { id: 'o1', restaurantId: 'r1', customer: 'Anna' },
//     { id: 'o2', restaurantId: 'r1', customer: 'John' },
//     { id: 'o3', restaurantId: 'r2', customer: 'Ira' }
// ];
//
// const orderItems = [
//     { orderId: 'o1', menuId: 'm1', qty: 2 },
//     { orderId: 'o1', menuId: 'm2', qty: 1 },
//     { orderId: 'o2', menuId: 'm1', qty: 1 },
//     { orderId: 'o3', menuId: 'm3', qty: 3 },
//     { orderId: 'o3', menuId: 'm4', qty: 1 }
// ];
//
// // ?
//
// console.log(result);
// /*
// [
// {
// id: 'r1',
// name: 'La Pasta',
// orders: [
// { id: 'o1', customer: 'Anna', total: 35, items: ['Carbonara','Carbonara','Bolognese'] },
// { id: 'o2', customer: 'John', total: 12, items: ['Carbonara'] }
// ],
// revenue: 47,
// topItem: 'Carbonara',
// categories: { pasta: 3 }
// },
// {
// id: 'r2',
// name: 'Sushi Go',
// orders: [
// { id: 'o3', customer: 'Ira', total: 34, items: ['Nigiri','Nigiri','Nigiri','Udon'] }
// ],
// revenue: 34,
// categories: { sushi: 3, noodles: 1 },
// topItem: 'Nigiri'
// }
// ]
// */
//



//що виведе в консолі?

   // 1)
// const user1 = { name: 'John' };
// const user2 = user1;
// const user3 = Object.assign({}, user1);
//
// user2.name = 'Lily';
// user3.name = 'Amy';
//
// console.log(user1.name); // lily
// console.log(user2.name); // lily
// console.log(user3.name); //amy

//2)
// const user1 = { name: 'John', permissions: { home: true, stat: true } };
// const user2 = user1;
// const user3 = Object.assign({}, user1);
//
// user2.permissions.stat = false;
// user3.permissions.settings = true;
//
// console.log(user1.permissions); //  { home: true, stat: false , settings: true} ;
// console.log(user2.permissions); // { home: true, stat: false settings: true } ;
// console.log(user3.permissions); // { home: true, stat: false settings: true} ;

// //3)
// const users1 = [{ name: 'John' }, { name: 'Jack' }];
// const users2 = users1;
// const users3 = users1.slice();
//
// users2.push({ name: 'Kate' });
// users3.push({ name: 'Amy' });
//
// console.log(users1);// [{ name: 'John' }, { name: 'Jack' } { name: 'Kate' }];
// console.log(users2); // [{ name: 'John' }, { name: 'Jack' } { name: 'Kate' }];
// console.log(users3); // [{ name: 'John' }, { name: 'Jack' } { name: 'Amy' }];

// //4)
// const users = [{ name: 'John' }, { name: 'Jack' }];
//
// const coolUser = users[1];
// coolUser.role = 'admin';
//
// console.log(users); // [{ name: 'John' }, { name: 'Jack' , role: 'admin}];
//
// //5)
// const a = { x: 1, y: { z: 5 } };
// const b = a;
// const c = { ...a };
//
// b.x = 10;
// c.y.z = 99;
//
// console.log(a); // { x: 10, y: { z: 99 } };
// console.log(b);  // { x: 10, y: { z: 99 } };
// console.log(c);  // { x: 1, y: { z: 99 } };

// //6)
// const user = {
//     name: 'Bob',
//     contacts: {
//         email: 'bob@mail.com'
//     }
// };
//
// const copy1 = user;
// const copy2 = JSON.parse(JSON.stringify(user));
//
// copy1.contacts.email = 'changed@mail.com';
// copy2.contacts.phone = '123-45-67';
//
// console.log(user.contacts); // {email: 'changed@mail.com'}
// console.log(copy1.contacts); //  {email: 'changed@mail.com'}
// console.log(copy2.contacts); // {email: 'bob@mail.com', phone: '123-45-67}
//
// //7)
// const arr1 = [{ n: 1 }, { n: 2 }, { n: 3 }];
// const arr2 = arr1;
// const arr3 = [...arr1];
//
// arr2[0].n = 100;
// arr3[1] = { n: 999 };
//
// console.log(arr1); //  [{ n: 100 }, { n: 2 }, { n: 3 }]
// console.log(arr2); //  [{ n: 100 }, { n: 2 }, { n: 3 }]
// console.log(arr3); //  [{ n: 100 }, { n: 999 }, { n: 3 }]

// //8)
// const settings1 = {
//     theme: 'light',
//     ui: { fontSize: 14, contrast: 'normal' }
// };
//
// const settings2 = settings1;
// const settings3 = Object.assign({}, settings1);
//
// settings2.ui.fontSize = 30;
// settings3.ui.contrast = 'high';
//
// console.log(settings1.ui); //{ fontSize: 30, contrast: 'high' }
// console.log(settings2.ui); // { fontSize: 30, contrast: 'high' }
// console.log(settings3.ui); // { fontSize: 30, contrast: 'high' }
//
// //9)
// const reviews1 = [
//     { user: 'Anna', score: 5 },
//     { user: 'John', score: 3 }
// ];

// const reviews2 = reviews1.slice();
// const reviews3 = [...reviews1];
//
// reviews1[1].score = 10;
// reviews2.push({ user: 'Ira', score: 8 });
// reviews3[0] = { user: 'Mike', score: 2 };
//
// console.log(reviews1); // [ { user: 'Anna', score: 5 }, { user: 'John', score: 10 } ]
// console.log(reviews2); // [{ user: 'Anna', score: 5 },{ user: 'John', score: 10 } { user: 'Ira', score: 8 }]
// console.log(reviews3); // [ { user: 'Mike', score: 2 }, { user: 'John', score: 10 } ]
