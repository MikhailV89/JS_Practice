import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";

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

//8) вивести інфо по кількості юзерів
const userInfoValues = Object.entries(usersSortByProjects)
console.log(userInfoValues)

const userInfo = reduce(userInfoValues, (acc, item)=> {
    const str = item[0]
    const count = item[1].length
    const user = count > 1 ? 'users' : 'user'
    acc += `${str} - ${count} ${user}, `
    return acc
}, '').slice(0, -2)
console.log(userInfo); // 'Web - 2 users, Banking - 1 user'
//
 //9) вивести інфо по іменах юзерів
 const userNamesInfo = reduce(userInfoValues, (acc, item)=>{
     const project = item[0];
     const userNames = item[1]

     const name = map(userNames,(user=> user.name)).join(', ')
     acc += `${project} - ${name}; `

     return acc

 }, '')
 console.log(userNamesInfo.slice(0, -2)); // 'Web - John, Kyle; Banking - John'
//
//10) вивести інфо по кількості задач кожного юзера

const tasksCount = reduce(users,(acc, item)=>{
let count = 0;
for (let i = 0; i < item.projects.length; i++) {
    // for (let j = 0; j < item.projects[i].tasks.length; j++) {
    //     count += 1
    // }
    count += item.projects[i].tasks.length
}
    const tasks = count > 1 ? 'tasks' : 'task'
acc += `${item.name} - ${count} ${tasks}, `
return acc
}, '').slice(0, -2)

 console.log(tasksCount); // 'John - 3 tasks, Kyle - 1 task'

//-------------------------------------------------------------------//


//дано:
    const teams = [
        {
            name: 'Frontend',
            members: [
                {
                    name: 'Alice',
                    skills: ['HTML', 'CSS', 'JS'],
                    projects: [
                        {
                            title: 'Landing',
                            tasks: [
                                { name: 'Header', hours: 3, status: 'done' },
                                { name: 'Footer', hours: 2, status: 'in progress' }
                            ]
                        },
                        {
                            title: 'Dashboard',
                            tasks: [
                                { name: 'Auth page', hours: 5, status: 'done' },
                                { name: 'Profile page', hours: 6, status: 'to start' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Bob',
                    skills: ['React', 'Redux'],
                    projects: [
                        {
                            title: 'Admin',
                            tasks: [
                                { name: 'User list', hours: 4, status: 'done' },
                                { name: 'Roles', hours: 7, status: 'in progress' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Backend',
            members: [
                {
                    name: 'Charlie',
                    skills: ['Node.js', 'SQL'],
                    projects: [
                        {
                            title: 'API',
                            tasks: [
                                { name: 'Login API', hours: 5, status: 'done' },
                                { name: 'Payments API', hours: 10, status: 'in progress' }
                            ]
                        }
                    ]
                }
            ]
        }
    ];


//1) Прочитати властивості з комплексного об’єкта
 console.log(teams[0].name); // 'Frontend'
console.log(teams[0].members[1].name); // 'Bob'
 console.log(teams[0].members[0].projects[1].title); // 'Dashboard'
 console.log(teams[1].members[0].projects[0].tasks[1].name); // 'Payments API'
 console.log(teams[0].members[1].projects[0].tasks[1].hours); // 7
 console.log(teams[0].members[0].projects[1].tasks[0].name); // 'Auth page'
 console.log(teams[0].members[1].skills); // ['React', 'Redux']
console.log(teams[1].members[0].name); // 'Charlie'
 console.log(teams[0].members[0].projects[0].tasks[1].name); // 'Footer'
// /*
// {
//   name: 'Login API',
//   hours: 5,
//   status: 'done'
// }
// */
//
// //2) Що виведе в консоль?
//
 console.log(teams[1].members[0].projects[0].title); // ? 'API'
 console.log(teams[2]); // ? undefined
 console.log(teams[0].members[2]); // ? undefined
 console.log(teams[0].members[0].projects[1].tasks[3]); // ? undefined
 console.log(teams[0].members[1].projects[0].tasks[0].status); // ? 'done'
//
// //3) Зробити масив усіх назв проєктів
const allProjectTitles = reduce(teams, (acc, item)=>{
 for (let i = 0; i < item.members.length; i++ ) {
     for (let j = 0; j < item.members[i].projects.length; j++) {
         acc.push(item.members[i].projects[j].title)
     }
 }
 return acc
}, [])
console.log(allProjectTitles);
// // ['Landing', 'Dashboard', 'Admin', 'API']
//
// //4) Зробити масив усіх імен учасників
 const allMemberNames = reduce(teams, (acc, item)=>{
     for (let i = 0; i < item.members.length; i++) {
        acc.push(item.members[i].name)
     }
     return acc
 }, []);
 console.log(allMemberNames);
// // ['Alice', 'Bob', 'Charlie']
//
// //5) Зробити масив усіх назв задач
const allTaskNames = reduce(teams, (acc, item)=>{
    for (let i = 0; i < item.members.length; i++ ) {
        for (let j = 0; j < item.members[i].projects.length; j++) {
           for (let k = 0; k < item.members[i].projects[j].tasks.length; k++) {
               acc.push(item.members[i].projects[j].tasks[k].name)
           }
        }
    }
    return acc
},[]);
console.log(allTaskNames);
// // ['Header', 'Footer', 'Auth page', 'Profile page', 'User list', 'Roles', 'Login API', 'Payments API']
//
// //6) Порахувати загальну кількість годин усіх задач
const totalHours = reduce(teams, (acc, hours)=>{
    for (let i = 0; i < hours.members.length; i++ ) {
        for (let j = 0; j < hours.members[i].projects.length; j++) {
            for (let k = 0; k < hours.members[i].projects[j].tasks.length; k++) {
              acc += hours.members[i].projects[j].tasks[k].hours
            }
        }
    }
    return acc
}, 0);
console.log(totalHours); // 42
//
//7) Згрупувати учасників по командах

const userTeams = reduce(teams, (acc, item)=>{
        const key = item.name
        if (!acc[key]) acc[key] = []

    for (let i = 0; i < item.members.length; i++) {
        acc[key].push(item.members[i].name)
    }

    return acc
},{})
 console.log(userTeams);
// /*
// {
//   'Frontend': ['Alice', 'Bob'],
//   'Backend': ['Charlie']
// }
// */
//
// //8) Вивести інфо по кількості проєктів у кожного учасника

const countInfoProjectsUsers = reduce(teams, (acc, item)=>{
    for (let i = 0; i < item.members.length; i++) {
        const name = item.members[i].name;
        const count = item.members[i].projects.length
        const word = count > 1 ? 'projects' : 'project'

        acc += `${name} - ${count} ${word}, `
    }
    return acc
},'').slice(0, -2)
 console.log(countInfoProjectsUsers);
// // 'Alice - 2 projects, Bob - 1 project, Charlie - 1 project'
//
// //9) Вивести інфо по кількості виконаних задач у кожного учасника

const doneCountInfoProjectsUsers = reduce(teams, (acc, item)=>{
    for (let i = 0; i < item.members.length; i++) {
        const name = item.members[i].name
        let count = 0
        for (let j = 0; j < item.members[i].projects.length; j++) {
           for (let k = 0; k < item.members[i].projects[j].tasks.length; k++) {
               if (item.members[i].projects[j].tasks[k].status === 'done') count ++
           }
        }
        acc += `${name} - ${count} done, `
    }
    return acc
}, '').slice(0, -2)
 console.log(doneCountInfoProjectsUsers);
// // 'Alice - 2 done, Bob - 1 done, Charlie - 1 done'
//
// //10) Вивести загальну статистику по статусах усіх задач

const allStatusCount = reduce(teams, (acc, item)=>{

    for (let i = 0; i <item.members.length; i++) {
        for (let j = 0; j < item.members[i].projects.length; j++) {
            for (let k = 0; k < item.members[i].projects[j].tasks.length; k++) {
                const key = item.members[i].projects[j].tasks[k].status
                if (!acc[key]) acc[key] = 0
                 acc[key] += 1
            }
        }
    }
    return acc
},{})
 console.log(allStatusCount);
// /*
// {
//   'done': 4,
//   'in progress': 3,
//   'to start': 1
// }
// */
