import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";

//1) звіт по зроблений задачах. при цьому зробить підзадачі в окремих функціях, а  потім звести все в одне рішення

// const projects = [
//     {
//         name: 'Website',
//         tasks: [
//             { assignee: 'Anna', status: 'done', hours: 5 },
//             { assignee: 'John', status: 'in_progress', hours: 3 },
//             { assignee: 'Anna', status: 'done', hours: 2 }
//         ]
//     },
//     {
//         name: 'Mobile App',
//         tasks: [
//             { assignee: 'Mike', status: 'done', hours: 7 },
//             { assignee: 'John', status: 'done', hours: 4 }
//         ]
//     },
//     {
//         name: 'Backend',
//         tasks: [
//             { assignee: 'Anna', status: 'review', hours: 2 },
//             { assignee: 'Mike', status: 'done', hours: 6 }
//         ]
//     }
// ];

// // ?
// console.log(report);
// /*
// Виконавець Anna: 7 год (2 задач)
// Виконавець Mike: 13 год (2 задач)
// Виконавець John: 4 год (1 задач)
// Разом: 24 год, 5 задач
// */
//
//1.1) реалізувать функцію, яка вертає згруповану інфу по юзерах
// function getTasksByUsers(projects) {
//  const
// }
//
// const tasksByUsers = getTasksByUsers(projects);
// console.log(tasksByUsers)
/*
  {
    Anna: { tasksCount: 2, totalHours: 7 },
    Mike: { tasksCount: 2, totalHours: 13 },
    John: { tasksCount: 1, totalHours: 4 }
  }
*/
//
// //1.2) реалізувать функцію, яка вертає масив рядків зі звіта, використовуючи згруповану інфу по юзерах
// function getReportLines(tasksByUsers) {
//     // ?
// }
//
// const reportLines = getReportLines(tasksByUsers);
// console.log(reportLines)
// /*
//   [
//     'Виконавець Anna: 7 год (2 задач)',
//     'Виконавець Mike: 13 год (2 задач)',
//     'Виконавець John: 4 год (1 задач)'
//   ]
// */
//
// //1.3) реалізувать функцію, яка вертає підсумуючий рядок звіта, використовуючи згруповану інфу по юзерах
// function getReportSummary(tasksByUsers) {
//     // ?
// }
//
// const reportSummary = getReportSummary(tasksByUsers);
// console.log(reportSummary) // 'Разом: 24 год, 5 задач'
//
// //1.4) звести усі підзадачі і виконати завдання повністю
//
// //-----------------------------
//
//    // 2) звіт продажів
//
// const initialAmount = [
//     { purchaseType: 'apple', amount: 10 },
//     { purchaseType: 'orange', amount: 5 },
//     { purchaseType: 'banana', amount: 7 }
// ]
//
// const orders = [
//     { user: 'Anna', purchaseType: 'apple', amount: 0.5 },
//     { user: 'John', purchaseType: 'orange', amount: 0.7 },
//     { user: 'Anna', purchaseType: 'orange', amount: 1 },
//     { user: 'Jack', purchaseType: 'apple', amount: 1.5 },
//     { user: 'Amy', purchaseType: 'banana', amount: 0.6 },
//     { user: 'John', purchaseType: 'apple', amount: 0.3 },
//     { user: 'Anna', purchaseType: 'banana', amount: 2 },
// ]
//
//     ?
//     console.log(reportSummary);
// /*
//   'Anna bought 4 kg of fruit
//   John bought 1 kg of fruit
//   Jack bought 1.5 kg of fruit
//   Amy bought 0.6 kg of fruit
//
//   Remained:
//   apple - 7.7 kg
//   orange - 3.3 kg
//   banana - 4.4 kg'
// */


const projects = [
    {
        name: 'Website',
        tasks: [
            { assignee: 'Anna', status: 'done', hours: 5 },
            { assignee: 'John', status: 'in_progress', hours: 3 },
            { assignee: 'Anna', status: 'done', hours: 2 }
        ]
    },
    {
        name: 'Mobile App',
        tasks: [
            { assignee: 'Mike', status: 'done', hours: 7 },
            { assignee: 'John', status: 'done', hours: 4 }
        ]
    },
    {
        name: 'Backend',
        tasks: [
            { assignee: 'Anna', status: 'review', hours: 2 },
            { assignee: 'Mike', status: 'done', hours: 6 }
        ]
    }
];

//1) перетворить масив на об'єкт:

const tasks1 = projects[0].tasks;

const tasks1ByAssignee = reduce(tasks1, (acc,task)=>{
if (!acc[task.assignee]) {
    acc[task.assignee] = []
}
acc[task.assignee].push(task)
    return acc
},{})

    console.log(tasks1ByAssignee);
/*
{
  Anna: [
    { assignee: 'Anna', status: 'done', hours: 5 },
    { assignee: 'Anna', status: 'done', hours: 2 }
  ],
  John: [
    { assignee: 'John', status: 'in_progress', hours: 3 }
  ]

}
*/

//2) витягнути всі задачі у масив

const allTasks = reduce(projects, (acc, item)=>{
    for (let i = 0; i < item.tasks.length; i++) {
        acc.push(item.tasks[i])
    }
    return acc
},[])

    console.log(allTasks)
    /*
    [
        { assignee: 'Anna', status: 'done', hours: 5 },
        { assignee: 'John', status: 'in_progress', hours: 3 },
        { assignee: 'Anna', status: 'done', hours: 2 },
        { assignee: 'Mike', status: 'done', hours: 7 },
        { assignee: 'John', status: 'done', hours: 4 },
        { assignee: 'Anna', status: 'review', hours: 2 },
        { assignee: 'Mike', status: 'done', hours: 6 }
    ]
    */

   // 3) перетворить масив задач на об'єкт:

const allTasksByAssignee = reduce(allTasks, (acc, task)=> {
    const key = task.assignee;
    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(task)
    return acc
},{})

    console.log(allTasksByAssignee);
/*
{
  Anna: [
    { assignee: 'Anna', status: 'done', hours: 5 },
    { assignee: 'Anna', status: 'done', hours: 2 },
    { assignee: 'Anna', status: 'review', hours: 2 },
  ],
  John: [
    { assignee: 'John', status: 'in_progress', hours: 3 },
    { assignee: 'John', status: 'done', hours: 4 }
  ],
  Mike: [
    { assignee: 'Mike', status: 'done', hours: 7 },
    { assignee: 'Mike', status: 'done', hours: 6 }
  ]

}
*/

// //4) перетворить об'єкт з задачами, згрупованими по імені, на об'єкт зі статистикою по задачах

const result = Object.entries(allTasksByAssignee )
const tasksStatByAssignee = reduce(result, (acc, item)=> {

    const key = item[0]
    if (!acc[key]) acc[key] = {tasksCount: 0, totalHours: 0}
    for (let i = 0; i < item[1].length; i++) {
        if (item[1][i].status === 'done') {
            acc[key].tasksCount+= 1
            acc[key].totalHours += item[1][i].hours//
        }
    }
    // acc[key].tasksCount+= 1
    // acc[key].totalHours += item[1][0].hours//
    return acc
}, {})

    console.log(tasksStatByAssignee);

// // /*
// //   {
// //     Anna: { tasksCount: 2, totalHours: 7 },
//     Mike: { tasksCount: 2, totalHours: 13 },
//     John: { tasksCount: 1, totalHours: 4 }
//   }
// */



//Дано:
    const users = [
        {
            name: 'John',
            projects: [
                {
                    name: 'Web',
                    status: 'open',
                    tasks: [
                        {
                            name: 'Login page',
                            hours: 8,
                            status: 'in progress',
                            subTasks: [
                                {
                                    name: 'Create login UI',
                                    hours: 2,
                                    status: 'done',
                                },
                                {
                                    name: 'Integrate Auth API',
                                    hours: 5,
                                    status: 'in progress',
                                },
                                {
                                    name: 'Deploy login to test',
                                    hours: 1,
                                    status: 'to start',
                                }
                            ]
                        },
                        {
                            name: 'About page',
                            hours: 4,
                            status: 'to start',
                            subTasks: [
                                {
                                    name: 'Create about UI',
                                    hours: 3,
                                    status: 'to start',
                                },
                                {
                                    name: 'Deploy about to test',
                                    hours: 1,
                                    status: 'to start',
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Banking',
                    status: 'open',
                    tasks: [
                        {
                            name: 'Account stat',
                            hours: 16,
                            status: 'done',
                            subTasks: [
                                {
                                    name: 'Calculate',
                                    hours: 11,
                                    status: 'done',
                                },
                                {
                                    name: 'Render report',
                                    hours: 4,
                                    status: 'done',
                                },
                                {
                                    name: 'Deploy Account stat to test',
                                    hours: 1,
                                    status: 'done',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Kyle',
            projects: [
                {
                    name: 'Web',
                    status: 'open',
                    tasks: [
                        {
                            name: 'Profile page',
                            hours: 8,
                            status: 'in progress',
                            subTasks: [
                                {
                                    name: 'Create profile UI',
                                    hours: 3,
                                    status: 'in progress',
                                },
                                {
                                    name: 'Integrate user API',
                                    hours: 4,
                                    status: 'to start',
                                },
                                {
                                    name: 'Deploy Profile to test',
                                    hours: 1,
                                    status: 'to start',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

//1) прочитати потрібну властивість з комплексного об'єкта

console.log(users[1].name); // 'Kyle'
console.log(users[0].name); // 'John'
 console.log(users[0].projects[0].name); // 'Web'
 console.log(users[0].projects[1].tasks[0].subTasks[0].hours); // 11
 console.log(users[0].projects[0].tasks[0].name); // 'Login page'
console.log(users[1].projects[0].tasks[0].subTasks[1].name); // 'Integrate user API'
 console.log(users[0].projects[0].tasks[0].subTasks[1].hours); // 5
 console.log(users[0].projects[1].name); // 'Banking'
 console.log(users[0].projects[1].tasks[0].subTasks[1].name); // 'Render report'
console.log(users[1].projects[0].tasks[0].subTasks[2].name); // 'Deploy Profile to test'
 console.log(users[0].projects[1].tasks[0].hours); // 16    //users0 projects1.tasks0 hours
// console.log(?);
/* {
  name: 'Integrate Auth API',
  hours: 5,
  status: 'in progress',
}
*/
// console.log(?);
/*
[
  {
    name: 'Calculate',
    hours: 11,
    status: 'done',
  },
  {
    name: 'Render report',
    hours: 4,
    status: 'done',
  },
  {
    name: 'Deploy Account stat to test',
    hours: 1,
    status: 'done',
  }
]
*/
// console.log(?);
/*
[
  {
    name: 'Web',
    status: 'open',
    tasks: [
      {
        name: 'Profile page',
        hours: 8,
        status: 'in progress',
        subTasks: [
          {
            name: 'Create profile UI',
            hours: 3,
            status: 'in progress',
          },
          {
            name: 'Integrate user API',
            hours: 4,
            status: 'to start',
          },
          {
            name: 'Deploy Profile to test',
            hours: 1,
            status: 'to start',
          }
        ]
      }
    ]
  }
]
*/

// наприклад, щоб прочитати 'Account stat', треба написати так:
console.log(users[0].projects[1].tasks[0].name); // 'Account stat'

//2) що виведе в консолі?

 console.log(users[1].projects[0].name); // ? Web
console.log(users[2]); // ? undefined
 console.log(users[0].projects[2]); // undefined
 console.log(users[0][0]); // ? undefined
 //console.log(users[1].projects[0].tasks[1].hours); // ? error
 console.log(users[1].projects[0].tasks[0]); // ? {Profile page}
 console.log(users[1].projects[0].tasks[0].subTasks[3]); // ? undefined

// //3) зробить масив усіх проєктів:

    const allProjects = reduce(users, (acc, item)=>{
        for (let i = 0; i < item.projects.length; i++) {
            acc.push(item.projects[i])
        }
        return acc
    },[])
        console.log(allProjects);
/*
[
      {
        name: 'Web',
        status: 'open',
        tasks: [
          {
            name: 'Login page',
            hours: 8,
            status: 'in progress',
            subTasks: [
              {
                name: 'Create login UI',
                hours: 2,
                status: 'done',
              },
              {
                name: 'Integrate Auth API',
                hours: 5,
                status: 'in progress',
              },
              {
                name: 'Deploy login to test',
                hours: 1,
                status: 'to start',
              }
            ]
          },
          {
            name: 'About page',
            hours: 4,
            status: 'to start',
            subTasks: [
              {
                name: 'Create about UI',
                hours: 3,
                status: 'to start',
              },
              {
                name: 'Deploy about to test',
                hours: 1,
                status: 'to start',
              }
            ]
          }
        ]
      },
      {
        name: 'Banking',
        status: 'open',
        tasks: [
          {
            name: 'Account stat',
            hours: 16,
            status: 'done',
            subTasks: [
              {
                name: 'Calculate',
                hours: 11,
                status: 'done',
              },
              {
                name: 'Render report',
                hours: 4,
                status: 'done',
              },
              {
                name: 'Deploy Account stat to test',
                hours: 1,
                status: 'done',
              }
            ]
          }
        ]
      },
      {
        name: 'Web',
        status: 'open',
        tasks: [
          {
            name: 'Profile page',
            hours: 8,
            status: 'in progress',
            subTasks: [
              {
                name: 'Create profile UI',
                hours: 3,
                status: 'in progress',
              },
              {
                name: 'Integrate user API',
                hours: 4,
                status: 'to start',
              },
              {
                name: 'Deploy Profile to test',
                hours: 1,
                status: 'to start',
              }
            ]
          }
        ]
      }
    ]
*/

//4) зробить масив усіх імен юзерів

const allUserNames = map(users, (item=> item.name));
    console.log(allUserNames) // ['John', 'Kyle']

// 5) зробить масив усіх назв основних задач

const allTaskNames = reduce(users, (acc, item)=>{
    for (let i = 0; i < item.projects.length; i++) {
        for (let j = 0; j < item.projects[i].tasks.length; j++) {
            acc.push(item.projects[i].tasks[j].name)
        }
    }
    return acc
},[])
    console.log(allTaskNames) // ['Login page', 'About page', 'Account stat', 'Profile page']

//6) зробить масив усіх підзадач

 const allSubTasks = reduce(users, (acc, item)=>{
     for (let i = 0; i < item.projects.length; i++) {
         for (let j = 0; j < item.projects[i].tasks.length; j++) {
             for (let k = 0; k < item.projects[i].tasks[j].subTasks.length; k++) {
                 acc.push(item.projects[i].tasks[j].subTasks[k].name)
             }
         }
     }
     return acc
 },[])
     console.log(allSubTasks);
//
 //7) згрупувать юзерів по проєктах
const usersSortByProjects = reduce(users, (acc, user)=>{

    for (let i = 0; i < user.projects.length; i++) {
        const key = user.projects[i].name
        if (!acc[key])  acc[key] = [];
        acc[key].push(user)
    }
   return acc
},{})
 console.log(usersSortByProjects);
/*
  {
    'Web': [
      {
        name: 'John',
        projects: [
          ...
        ]
      },
      {
        name: 'Kyle',
        projects: [
          ...
        ]
      }
    ],
    'Banking': [
      {
        name: 'John',
        projects: [
          ...
        ]
      }
    ]
  }
*/

//8) вивести інфо по кількості юзерів
const userInfoValues = Object.entries(usersSortByProjects)

const userInfo = reduce(userInfoValues, (acc, item)=> {
   const str = item[0]
    const count = item[1].length
    const user = count > 1 ? 'users' : 'user'
    acc += `${str} - ${count} ${user}, `
    return acc
}, '').slice(0, -2)
console.log(userInfo); // 'Web - 2 users, Banking - 1 user'
//
// //9) вивести інфо по іменах юзерів
//
// console.log(?); // 'Web - John, Kyle; Banking - John'
//
// //10) вивести інфо по кількості задач кожного юзера
//
// console.log(?); // 'John - 3 tasks, Kyle - 1 task'



