import {findLast, map, some, filter, reduce, forEach, every, reverse, hours} from "./functions.js";

// 1) Дано масиви проєктів, задач і підзадач.

const projects = [
    {id: 'p1', title: 'Web App'},
    {id: 'p2', title: 'Mobile App'}
];

const tasks = [
    {id: 't1', projectId: 'p1', title: 'Login'},
    {id: 't2', projectId: 'p1', title: 'Profile'},
    {id: 't3', projectId: 'p2', title: 'Onboarding'}
];

const subTasks = [
    {taskId: 't1', title: 'UI', status: 'done'},
    {taskId: 't1', title: 'API', status: 'in progress'},
    {taskId: 't1', title: 'Validation', status: 'done'},

    {taskId: 't2', title: 'UI', status: 'done'},
    {taskId: 't2', title: 'Avatar upload', status: 'to do'},

    {taskId: 't3', title: 'Screens', status: 'in progress'},
    {taskId: 't3', title: 'Animations', status: 'to do'},
    {taskId: 't3', title: 'Tracking', status: 'done'},
    {taskId: 't3', title: 'Push permissions', status: 'done'}
];

// обчислити необхідні дані, створити такий список з js коду і додати на сторінку:

for (let i = 0; i < tasks.length; i++) {
    let count = 0
    let doneCount = 0
    for (let j = 0; j < subTasks.length; j++) {
        if (tasks[i].id === subTasks[j].taskId) {
            count++
            if (subTasks[j].status === 'done') doneCount++
        }
    }
    tasks[i].subTasksCount = count
    tasks[i].doneCount = doneCount
}

for (let i = 0; i < projects.length; i++) {
    projects[i].tasks = [];

    for (let j = 0; j < tasks.length; j++) {
        if (projects[i].id === tasks[j].projectId) {
            projects[i].tasks.push(tasks[j])
        }
    }
}

for (let i = 0; i < projects.length; i++) {
    let count = 0
    let done = 0
    for (let j = 0; j < projects[i].tasks.length; j++) {
        count += projects[i].tasks[j].subTasksCount
        done += projects[i].tasks[j].doneCount
    }
    projects[i].tasksCount = projects[i].tasks.length
    projects[i].subTasksCount = count
    projects[i].doneCount = done


}
console.log(projects)

const div = document.getElementById('firstDiv');
const ul = document.createElement('ul')

for (let i = 0; i < projects.length; i++) {
    let taskString = projects[i].tasksCount > 1 ? 'tasks' : 'task';

    const li = document.createElement('li');
    li.textContent = `${projects[i].title}: `

    const span = document.createElement('span')
    span.textContent = `${projects[i].tasksCount} ${taskString}, ${projects[i].subTasksCount} subTasks, ${projects[i].doneCount} done`

    li.append(span)
    ul.append(li)
}
div.append(ul)

// <ul>
//     <li>Web App: <span>2 tasks, 5 subTasks, 3 done</span></li>
//     <li>Mobile App: <span>1 task, 4 subTasks, 2 done</span></li>
// </ul>
//
//

// [
//     {
//         id: 'p1',
//         title: 'Web App',
//
//         tasksCount: 2,
//         subTasksCount: 5,
//         doneCount: 3,
//
//         tasks: [
//             {
//                 id: 't1',
//                 title: 'Login',
//                 subTasksCount: 3,
//                 doneCount: 2
//             },
//             {
//                 id: 't2',
//                 title: 'Profile',
//                 subTasksCount: 2,
//                 doneCount: 1
//             }
//         ]
//     },
//     {
//         id: 'p2',
//         title: 'Mobile App',
//
//         tasksCount: 1,
//         subTasksCount: 4,
//         doneCount: 2,
//
//         tasks: [
//             {
//                 id: 't3',
//                 title: 'Onboarding',
//                 subTasksCount: 4,
//                 doneCount: 2
//             }
//         ]
//     }
// ];

const div1 = document.getElementById('secondDiv')
const list = document.createElement('ul')

for (let i = 0; i < projects.length; i++) {

    const button = document.createElement('button')
    button.textContent = '>'
    button.onclick = (e) => {

        if (e.target.nextElementSibling.style.display === '') {
            e.target.nextElementSibling.style.display = 'none'
            button.textContent = 'V'
        } else {
            e.target.nextElementSibling.style.display = ''
            button.textContent = '>'
        }
    }
        let task = projects[i].tasksCount > 1 ? 'tasks' : 'task';

        const li = document.createElement('li')
        li.textContent = `${projects[i].title}: `

        const span = document.createElement('span')
        span.textContent = `${projects[i].tasksCount} ${task}, ${projects[i].subTasksCount} subTasks, ${projects[i].doneCount} done`

        li.append(span)
        li.append(button)

        const innerUl = document.createElement('ul')

        for (let j = 0; j < projects[i].tasks.length; j++) {
            const innerLi = document.createElement('li')
            innerLi.textContent = `${projects[i].tasks[j].title} `

            const innerSpan = document.createElement('span')
            innerSpan.textContent = `${projects[i].tasks[j].subTasksCount} subTasks, ${projects[i].tasks[j].doneCount} done`

            innerLi.append(innerSpan)
            const subUl = document.createElement('ul')
            for (let k = 0; k < subTasks.length; k++) {
                if (subTasks[k].taskId === projects[i].tasks[j].id) {
                    const subLi = document.createElement('li')
                    subLi.textContent = `${subTasks[k].title} - ${subTasks[k].status}`
                    subUl.append(subLi)
                }
            }

            const innerButton = document.createElement('button')
            innerButton.textContent = '>'
            innerButton.onclick = (e) => {

                if (e.target.nextElementSibling.style.display === '') {
                    e.target.nextElementSibling.style.display = 'none'
                    innerButton.textContent = 'V'
                } else {
                    e.target.nextElementSibling.style.display = ''
                    innerButton.textContent = '>'
                }
            }

            innerLi.append(innerButton)
            innerLi.append(subUl)
            innerUl.append(innerLi)
        }
        li.append(innerUl)
        list.append(li)

    }
    div1.append(list)

// <ul>
//     <li>
//         Web App: <span>2 tasks, 5 subTasks, 3 done</span>
//         <ul>
//             <li>Login: <span>3 subTasks, 2 done</span></li>
//             <li>Profile: <span>2 subTasks, 1 done</span></li>
//         </ul>
//     </li>
//     <li>
//         Mobile App: <span>1 task, 4 subTasks, 2 done</span>
//         <ul>
//             <li>Onboarding: <span>4 subTasks, 2 done</span></li>
//         </ul>
//     </li>
// </ul>

//___________________________________________________________________________________


// 2) Дано масиви категорій, продуктів і продажів.

    // const categories = [
    //     {id: 'c1', title: 'Phones'},
    //     {id: 'c2', title: 'Laptops'}
    // ];
    //
    // const products = [
    //     {id: 'p1', categoryId: 'c1', title: 'iPhone', price: 1200},
    //     {id: 'p2', categoryId: 'c1', title: 'Samsung', price: 1000},
    //     {id: 'p3', categoryId: 'c2', title: 'MacBook', price: 2000},
    //     {id: 'p4', categoryId: 'c2', title: 'Dell', price: 1500}
    // ];
    //
    // const sales = [
    //     {productId: 'p1', qty: 2, status: 'done'},
    //     {productId: 'p1', qty: 1, status: 'refunded'},
    //     {productId: 'p2', qty: 3, status: 'done'},
    //     {productId: 'p3', qty: 1, status: 'done'},
    //     {productId: 'p4', qty: 2, status: 'done'},
    //     {productId: 'p4', qty: 1, status: 'pending'}
    // ];

    /*
      обчислити необхідні дані, створити такий список з js коду і додати на сторінку:
      - products: кількість продуктів у категорії
      - sold: сума qty тільки з продажів зі status done
      - revenue: сума (price * qty) тільки з продажів зі status done
    */

//     for (let i = 0; i < products.length; i++) {
//         let sumQty = 0
//         let revenue = 0
//         for (let j = 0; j < sales.length; j++) {
//             if (products[i].id === sales[j].productId && sales[j].status === 'done') {
//                 sumQty += sales[j].qty;
//                 revenue += products[i].price * sales[j].qty
//             }
//         }
//         products[i].sold = sumQty
//         products[i].revenue = revenue
//     }
//
//     for (let i = 0; i < categories.length; i++) {
//         categories[i].products = []
//         for (let j = 0; j < products.length; j++) {
//             if (categories[i].id === products[j].categoryId) {
//                 categories[i].products.push(products[j])
//             }
//         }
//     }
//
//     for (let i = 0; i < categories.length; i++) {
//         let totalSold = 0;
//         let totalRevenue = 0
//         for (let j = 0; j < categories[i].products.length; j++) {
//             totalSold += categories[i].products[j].sold
//             totalRevenue += categories[i].products[j].revenue
//         }
//         categories[i].productsCount = categories[i].products.length
//         categories[i].sold = totalSold
//         categories[i].revenue = totalRevenue
//     }
//
//     const wrapDiv = document.getElementById('task1')
//     const wrapList = document.createElement('ul')
//
//     for (let i = 0; i < categories.length; i++) {
//         let productString = categories[i].productsCount > 1 ? 'products' : 'product';
//         const li = document.createElement('li')
//         const span = document.createElement('span')
//
//         li.textContent = `${categories[i].title}: `
//         span.textContent = `${categories[i].productsCount} ${productString}, ${categories[i].sold} sold, revenue ${categories[i].revenue}`
//
//         li.append(span)
//         wrapList.append(li)
//     }
//     wrapDiv.append(wrapList)
//
//
//     const wrapDiv1 = document.getElementById('task2')
//     const list1 = document.createElement('ul')
//
//     for (let i = 0; i < categories.length; i++) {
//         let task = categories[i].productsCount > 1 ? 'products' : 'product';
//
//         const li = document.createElement('li');
//         const span = document.createElement('span')
//
//         li.textContent = `${categories[i].title}: `
//         span.textContent = `${categories[i].productsCount} ${task}, ${categories[i].sold} sold, revenue ${categories[i].revenue}`
//
//         li.append(span)
//         const innerUl = document.createElement('ul')
//         for (let j = 0; j < categories[i].products.length; j++) {
//
//             const innerLi = document.createElement('li')
//             const innerSpan = document.createElement('span')
//
//             innerLi.textContent = `${categories[i].products[j].title}: `
//             innerSpan.textContent = `${categories[i].products[j].sold} sold, revenue ${categories[i].products[j].revenue}`
//
//             innerLi.append(innerSpan)
//             innerUl.append(innerLi)
//         }
//         li.append(innerUl)
//         list1.append(li)
//     }
//
// wrapDiv1.append(list1)
/*[
    {
        id: 'c1',
        title: 'Phones',
        productsCount: 2,
        sold: 5,
        revenue: 5400,
        products: [
            {
                id: 'p1',
                title: 'iPhone',
                sold: 2,
                revenue: 2400
            },
            {
                id: 'p2',
                title: 'Samsung',
                sold: 3,
                revenue: 3000
            }
        ]
    },
    {
        id: 'c2',
        title: 'Laptops',
        productsCount: 2,
        sold: 3,
        revenue: 5000,
        products: [
            {
                id: 'p3',
                title: 'MacBook',
                sold: 1,
                revenue: 2000
            },
            {
                id: 'p4',
                title: 'Dell',
                sold: 2,
                revenue: 3000
            }
        ]
    }
];
*/


// <ul>
//     <li>Phones: <span>2 products, 5 sold, revenue 5400</span></li>
//     <li>Laptops: <span>2 products, 3 sold, revenue 5000</span></li>
// </ul>
//
//
// <ul>
//     <li>
//         Phones: <span>2 products, 5 sold, revenue 5400</span>
//         <ul>
//             <li>iPhone: <span>2 sold, revenue 2400</span></li>
//             <li>Samsung: <span>3 sold, revenue 3000</span></li>
//         </ul>
//     </li>
//     <li>
//         Laptops: <span>2 products, 3 sold, revenue 5000</span>
//         <ul>
//             <li>MacBook: <span>1 sold, revenue 2000</span></li>
//             <li>Dell: <span>2 sold, revenue 3000</span></li>
//         </ul>
//     </li>
// </ul>

//-------------------------------------------------------------------------------------------


// 3) Дано масиви команд, гравців і матчів.
//
// const teams = [
//     {id: 't1', title: 'Dragons'},
//     {id: 't2', title: 'Wolves'}
// ];
//
// const players = [
//     {id: 'p1', teamId: 't1', name: 'Anna'},
//     {id: 'p2', teamId: 't1', name: 'John'},
//     {id: 'p3', teamId: 't2', name: 'Ira'},
//     {id: 'p4', teamId: 't2', name: 'Oleh'}
// ];
//
// const matches = [
//     {playerId: 'p1', goals: 2, status: 'finished'},
//     {playerId: 'p2', goals: 1, status: 'finished'},
//     {playerId: 'p2', goals: 3, status: 'finished'},
//     {playerId: 'p3', goals: 0, status: 'finished'},
//     {playerId: 'p4', goals: 4, status: 'finished'},
//     {playerId: 'p4', goals: 2, status: 'scheduled'}
// ];
//
// /*
//   обчислити необхідні дані, створити такий список з js коду і додати на сторінку:
//   players: кількість гравців у команді
//   goals: сума goals тільки з матчів зі status finished
// */
//
// for (let i = 0; i < teams.length; i++) {
//     teams[i].players = []
//
//     for (let j = 0; j < players.length; j++) {
//         if (teams[i].id === players[j].teamId) {
//             let count = 0
//             teams[i].players.push(players[j])
//             for (let k = 0; k < matches.length; k++) {
//                 if (players[j].id === matches[k].playerId && matches[k].status === 'finished') {
//                     count += matches[k].goals
//                 }
//             }
//             players[j].goals = count
//         }
//
//     }
// }
//
// for (let i = 0; i < teams.length; i++) {
//     let goals = 0;
//     for (let j = 0; j < teams[i].players.length; j++) {
//         goals += teams[i].players[j].goals
//     }
//     teams[i].playersCount = teams[i].players.length
//     teams[i]. totalGoals = goals
// }
// console.log(teams)
//
// const wrapDiv2 = document.getElementById('task3')
// const list2 = document.createElement('ul')
//
// for (let i = 0; i < teams.length; i++) {
//     const li = document.createElement('li')
//     li.textContent = `${teams[i].title}: `
//
//     const span = document.createElement('span')
//     span.textContent = `${teams[i].playersCount} players, ${teams[i].totalGoals} goals`
//
//     li.append(span)
//     list2.append(li)
// }
// wrapDiv2.append(list2)

// const wrapDiv3 = document.getElementById('task4')
// const list3 = document.createElement('ul')


// for (let i = 0; i < teams.length; i++) {
//     const button = document.createElement('button')
//     button.textContent = '>'
//     button.onclick = (e) => {
//
//         if (e.target.nextElementSibling.style.display === '') {
//             e.target.nextElementSibling.style.display = 'none'
//             button.textContent = 'V'
//         } else {
//             e.target.nextElementSibling.style.display = ''
//             button.textContent = '>'
//         }
//
//     }
//     const li = document.createElement('li')
//     li.textContent = `${teams[i].title}: `
//
//     const span = document.createElement('span')
//     span.textContent = `${teams[i].playersCount} players, ${teams[i].totalGoals} goals`
//
//     li.append(span)
//     li.append(button)
//
//     const innerUl = document.createElement('ul')
//
//     for (let j = 0; j < teams[i].players.length; j++) {
//         const innerLi = document.createElement('li');
//         innerLi.textContent = `${teams[i].players[j].name}: `
//
//         const innerSpan = document.createElement('span')
//         innerSpan.textContent = `${teams[i].players[j].goals} goals`
//
//         innerLi.append(innerSpan)
//         innerUl.append(innerLi)
//     }
//     li.append(innerUl)
//     list3.append(li)
// }
//
// wrapDiv3.append(list3)
/*
[
    {
        id: 't1',
        title: 'Dragons',
        playersCount: 2,
        totalGoals: 6,
        players: [
            {
                id: 'p1',
                name: 'Anna',
                goals: 2
            },
            {
                id: 'p2',
                name: 'John',
                goals: 4
            }
        ]
    },
    {
        id: 't2',
        title: 'Wolves',
        playersCount: 2,
        totalGoals: 4,
        players: [
            {
                id: 'p3',
                name: 'Ira',
                goals: 0
            },
            {
                id: 'p4',
                name: 'Oleh',
                goals: 4
            }
        ]
    }
];
*/
// <ul>
//     <li>Dragons: <span>2 players, 6 goals</span></li>
//     <li>Wolves: <span>2 players, 4 goals</span></li>
// </ul>

// <ul>
//     <li>
//         Dragons: <span>2 players, 6 goals</span>
//         <ul>
//             <li>Anna: <span>2 goals</span></li>
//             <li>John: <span>4 goals</span></li>
//         </ul>
//     </li>
//     <li>
//         Wolves: <span>2 players, 4 goals</span>
//         <ul>
//             <li>Ira: <span>0 goals</span></li>
//             <li>Oleh: <span>4 goals</span></li>
//         </ul>
//     </li>
// </ul>


// До дз 1:
// 1.3) кожному проєкту додати кнопку, яка ховає/показує список задач
// 1.4) зробити так, щоб коли список задач не показує, кнопка була >, коли показує v
// 1.5) кожній задачі додати список її підзадач, який показує назву і статус (UI - done)
// 1.6) кожній задачі додати кнопку для приховування/показування цього списка
// 1.7) зробити так, щоб коли список підзадач не показує, кнопка була >, коли показує v
//
// аналогічні завдання до дз 2 і 3:
// - додати кнопки приховування/показування
// - показувати стрілку на кнопці відповідно до стану списка
