import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";

//Доповнити об'єкт компанії відповідними даними

const company1 = {
    id: 'e7fh4kd7',
    name: 'TechNova',
};


const departments = [
    {
        id: 'dkh8jtg8',
        name: 'Frontend',
        companyId: 'e7fh4kd7'
    },
    {
        id: 'd2kf76bv',
        name: 'Sales',
        companyId: 'e7fhisgf'
    },
    {
        id: 'd8ghj4hf',
        name: 'Backend',
        companyId: 'e7fh4kd7'
    }
];

const filterDepartments = filter(departments, (dep)=>dep.companyId === company1.id)

company1.departments = filterDepartments


//
const employees = [
    {
        id: 'ud8fhb7x',
        name: 'Anna',
        role: 'developer',
        salary: 2500,
        departmentId: 'dkh8jtg8',
    },
    {
        id: 'uoebhv7m',
        name: 'John',
        role: 'team lead',
        salary: 6000,
        departmentId: 'd2kf76bv',
    },
    {
        id: 'usn3hrfv',
        name: 'John',
        role: 'team lead',
        salary: 4000,
        departmentId: 'dkh8jtg8',
    },
    {
        id: 'u1sjfgbv',
        name: 'Ira',
        role: 'developer',
        salary: 2700,
        departmentId: 'd8ghj4hf',
    },
    {
        id: 'ubv7sf59',
        name: 'Oleh',
        role: 'devops',
        salary: 3500,
        departmentId: 'd8ghj4hf',
    }
];

const tasks = [
    { id: 't8sght', title: 'Dashboard UI', hours: 15, status: 'in progress', employeeId: 'ud8fhb7x' },
    { id: 't2hf6x', title: 'Code review', hours: 10, status: 'done', employeeId: 'usn3hrfv' },
    { id: 'tu4gsf', title: 'API v2', hours: 25, status: 'done', employeeId: 'u1sjfgbv' },
    { id: 'ty1s6c', title: 'CI/CD pipeline', hours: 20, status: 'done', employeeId: 'ubv7sf59' },
    { id: 't7d74d', title: 'Marketing strategy', hours: 40, status: 'done', employeeId: 'uoebhv7m' },
    { id: 't0dgfv', title: 'Server monitoring', hours: 15, status: 'done', employeeId: 'ubv7sf59' },
    { id: 'tlfgv5', title: 'Mentorship', hours: 8, status: 'done', employeeId: 'usn3hrfv' },
    { id: 'ta7tdx', title: 'Refactoring', hours: 12, status: 'to do', employeeId: 'usn3hrfv' },
    { id: 't2gs6f', title: 'Audience research', hours: 15, status: 'done', employeeId: 'uoebhv7m' },
    { id: 't1jdg7', title: 'Landing page', hours: 20, status: 'done', employeeId: 'ud8fhb7x' },
    { id: 't5xlkg', title: 'Auth system', hours: 30, status: 'in progress', employeeId: 'u1sjfgbv' }
];


for (let i = 0; i < filterDepartments.length; i++) {
    filterDepartments[i].employees = filter(employees, (item)=> item.departmentId === filterDepartments[i].id)
    // for (let j = 0; j < filterDepartments[i].employees.length; j++) {
    //     filterDepartments[i].employees[j].tasks = filter(tasks, (task)=> task.employeeId === filterDepartments[i].employees[j].id )
    // }
}

 for (let j = 0; j < employees.length; j++) {
    employees[j].tasks = filter(tasks, (task)=> task.employeeId === employees[j].id)
 }

//
 console.log(company1);
/*
  {
  name: 'TechNova',
  departments: [
    {
      name: 'Frontend',
      employees: [
        {
          name: 'Anna',
          role: 'developer',
          salary: 2500,
          tasks: [
            { title: 'Landing page', hours: 20, status: 'done' },
            { title: 'Dashboard UI', hours: 15, status: 'in progress' }
          ]
        },
        {
          name: 'John',
          role: 'team lead',
          salary: 4000,
          tasks: [
            { title: 'Code review', hours: 10, status: 'done' },
            { title: 'Mentorship', hours: 8, status: 'done' },
            { title: 'Refactoring', hours: 12, status: 'to do' }
          ]
        }
      ]
    },
    {
      name: 'Backend',
      employees: [
        {
          name: 'Ira',
          role: 'developer',
          salary: 2700,
          tasks: [
            { title: 'API v2', hours: 25, status: 'done' },
            { title: 'Auth system', hours: 30, status: 'in progress' }
          ]
        },
        {
          name: 'Oleh',
          role: 'devops',
          salary: 3500,
          tasks: [
            { title: 'CI/CD pipeline', hours: 20, status: 'done' },
            { title: 'Server monitoring', hours: 15, status: 'done' }
          ]
        }
      ]
    }
  ]
}
*/

// //2)
const university = {
    id: 'u1',
    name: 'IT University'
};

const faculties = [
    { id: 'f1', name: 'Computer Science', universityId: 'u1' },
    { id: 'f2', name: 'Design', universityId: 'u1' }
];

const students1 = [
    { name: 'Anna', year: 2, facultyId: 'f1' },
    { name: 'Oleh', year: 3, facultyId: 'f1' },
    { name: 'Sofia', year: 1, facultyId: 'f2' }
];

university.faculties = faculties;

for (let i = 0; i < faculties.length; i++) {
    faculties[i].students  = filter(students1, item => item.facultyId === faculties[i].id)


}


console.log(university);
// /*
// {
//   id: 'u1',
//   name: 'IT University',
//   faculties: [
//     {
//       id: 'f1',
//       name: 'Computer Science',
//       students: [
//         { name: 'Anna', year: 2 },
//         { name: 'Oleh', year: 3 }
//       ]
//     },
//     {
//       id: 'f2',
//       name: 'Design',
//       students: [
//         { name: 'Sofia', year: 1 }
//       ]
//     }
//   ]
// }
// *
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

//1) додати кожному юзеру піб

const users = [
    { firstName: 'Anna', lastName: 'Shevchenko' },
    { firstName: 'Oleh', lastName: 'Kovalenko' },
    { firstName: 'Sofia', lastName: 'Melnyk' },
    { firstName: 'Ivan', lastName: 'Tkachenko' },
    { firstName: 'Kateryna', lastName: 'Bondar' },
    { firstName: 'Andrii', lastName: 'Petrenko' },
    { firstName: 'Yulia', lastName: 'Kravets' },
    { firstName: 'Dmytro', lastName: 'Moroz' },
    { firstName: 'Ira', lastName: 'Havrylenko' },
    { firstName: 'Taras', lastName: 'Lysenko' }
];

for (let i = 0; i < users.length; i++) {
    users[i].fullName = `${users[i].firstName} ${users[i].lastName}`
}

console.log(users);
/*
[
  { firstName: 'Anna', lastName: 'Shevchenko', fullName: 'Anna Shevchenko' },
  { firstName: 'Oleh', lastName: 'Kovalenko', fullName: 'Oleh Kovalenko' },
  { firstName: 'Sofia', lastName: 'Melnyk', fullName: 'Sofia Melnyk' },
  { firstName: 'Ivan', lastName: 'Tkachenko', fullName: 'Ivan Tkachenko' },
  { firstName: 'Kateryna', lastName: 'Bondar', fullName: 'Kateryna Bondar' },
  { firstName: 'Andrii', lastName: 'Petrenko', fullName: 'Andrii Petrenko' },
  { firstName: 'Yulia', lastName: 'Kravets', fullName: 'Yulia Kravets' },
  { firstName: 'Dmytro', lastName: 'Moroz', fullName: 'Dmytro Moroz' },
  { firstName: 'Ira', lastName: 'Havrylenko', fullName: 'Ira Havrylenko' },
  { firstName: 'Taras', lastName: 'Lysenko', fullName: 'Taras Lysenko' }
];

*/

//2) додати таски юзерам

const users1 = [
    { id: 'u1', firstName: 'Anna', lastName: 'Shevchenko' },
    { id: 'u2', firstName: 'Oleh', lastName: 'Kovalenko' },
    { id: 'u3', firstName: 'Sofia', lastName: 'Melnyk' },
    { id: 'u4', firstName: 'Ivan', lastName: 'Tkachenko' }
];

const tasks1 = [
    { id: 't1', title: 'Landing page', hours: 20, status: 'done', userId: 'u1' },
    { id: 't2', title: 'Dashboard UI', hours: 15, status: 'in progress', userId: 'u1' },
    { id: 't3', title: 'Code review', hours: 10, status: 'done', userId: 'u2' },
    { id: 't4', title: 'Auth system', hours: 25, status: 'done', userId: 'u3' },
    { id: 't5', title: 'Server monitoring', hours: 15, status: 'in progress', userId: 'u3' },
    { id: 't6', title: 'Bug fixing', hours: 12, status: 'to do', userId: 'u4' }
];

for (let i = 0; i < users1.length; i++) {
    users1[i].tasks = filter(tasks1, item => item.userId === users1[i].id)
}
    console.log(users1);
/*
[
  {
    id: 'u1',
    firstName: 'Anna',
    lastName: 'Shevchenko',
    tasks: [
      { id: 't1', title: 'Landing page', hours: 20, status: 'done' },
      { id: 't2', title: 'Dashboard UI', hours: 15, status: 'in progress' }
    ]
  },
  {
    id: 'u2',
    firstName: 'Oleh',
    lastName: 'Kovalenko',
    tasks: [
      { id: 't3', title: 'Code review', hours: 10, status: 'done' }
    ]
  },
  {
    id: 'u3',
    firstName: 'Sofia',
    lastName: 'Melnyk',
    tasks: [
      { id: 't4', title: 'Auth system', hours: 25, status: 'done' },
      { id: 't5', title: 'Server monitoring', hours: 15, status: 'in progress' }
    ]
  },
  {
    id: 'u4',
    firstName: 'Ivan',
    lastName: 'Tkachenko',
    tasks: [
      { id: 't6', title: 'Bug fixing', hours: 12, status: 'to do' }
    ]
  }
]
*/

//3) додати юзерам сумарні години

const users2 = [
    { id: 'u1', firstName: 'Anna', lastName: 'Shevchenko' },
    { id: 'u2', firstName: 'Oleh', lastName: 'Kovalenko' },
    { id: 'u3', firstName: 'Sofia', lastName: 'Melnyk' },
    { id: 'u4', firstName: 'Ivan', lastName: 'Tkachenko' }
];

const tasks2 = [
    { id: 't1', title: 'Landing page', hours: 20, status: 'done', userId: 'u1' },
    { id: 't2', title: 'Dashboard UI', hours: 15, status: 'in progress', userId: 'u1' },
    { id: 't3', title: 'Code review', hours: 10, status: 'done', userId: 'u2' },
    { id: 't4', title: 'Auth system', hours: 25, status: 'done', userId: 'u3' },
    { id: 't5', title: 'Server monitoring', hours: 15, status: 'in progress', userId: 'u3' },
    { id: 't6', title: 'Bug fixing', hours: 12, status: 'to do', userId: 'u4' }
];

    for (let i = 0; i < users2.length; i++) {
        let sum = 0
        const arr = filter(tasks2, item => item.userId === users2[i].id)
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j].hours
        }
        users2[i].totalHours = sum
    }
    console.log(users2);
// /*
// [
//   {
//     id: 'u1',
//     firstName: 'Anna',
//     lastName: 'Shevchenko',
//     totalHours: 35
//   },
//   {
//     id: 'u2',
//     firstName: 'Oleh',
//     lastName: 'Kovalenko',
//     totalHours: 10
//   },
//   {
//     id: 'u3',
//     firstName: 'Sofia',
//     lastName: 'Melnyk',
//     totalHours: 40
//   },
//   {
//     id: 'u4',
//     firstName: 'Ivan',
//     lastName: 'Tkachenko',
//     totalHours: 12
//   }
// ];
// */
//
// //4) додати юзерам рядки з інфою по задачах

const users3 = [
    { id: 'u1', firstName: 'Anna', lastName: 'Shevchenko' },
    { id: 'u2', firstName: 'Oleh', lastName: 'Kovalenko' },
    { id: 'u3', firstName: 'Sofia', lastName: 'Melnyk' },
    { id: 'u4', firstName: 'Ivan', lastName: 'Tkachenko' }
];

const tasks3 = [
    { id: 't1', title: 'Landing page', hours: 20, status: 'done', userId: 'u1' },
    { id: 't2', title: 'Dashboard UI', hours: 15, status: 'in progress', userId: 'u1' },
    { id: 't3', title: 'Code review', hours: 10, status: 'done', userId: 'u2' },
    { id: 't4', title: 'Auth system', hours: 25, status: 'done', userId: 'u3' },
    { id: 't5', title: 'Server monitoring', hours: 15, status: 'in progress', userId: 'u3' },
    { id: 't6', title: 'Bug fixing', hours: 12, status: 'to do', userId: 'u4' }
];



for (let i = 0; i < users3.length; i++) {
    let titles2 = [];
    for (let j = 0; j < tasks3.length; j++) {
        if (tasks3[j].userId === users3[i].id) {
            titles2.push(tasks3[j].title);
        }
    }

    const count = titles2.length;
        const taskWord = count === 1 ? 'task' : 'tasks';
        users3[i].tasksInfo = `${count} ${taskWord}: ${titles2.join(', ')}`;

}

console.log(users3);
// /*
// [
//   {
//     id: 'u1',
//     firstName: 'Anna',
//     lastName: 'Shevchenko',
//     tasksInfo: '2 tasks: Landing page, Dashboard UI'
//   },
//   {
//     id: 'u2',
//     firstName: 'Oleh',
//     lastName: 'Kovalenko',
//     tasksInfo: '1 task: Code review'
//   },
//   {
//     id: 'u3',
//     firstName: 'Sofia',
//     lastName: 'Melnyk',
//     tasksInfo: '2 tasks: Auth system, Server monitoring'
//   },
//   {
//     id: 'u4',
//     firstName: 'Ivan',
//     lastName: 'Tkachenko',
//     tasksInfo: '1 task: Bug fixing'
//   }
// ]
// */



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
}

const updateUsers = reduce(users7, (acc, item)=>{
    acc.address = {city: item.city, street: item.street, house: item.house}
    return acc
},{})
// ?
delete users7.city
delete users7.house
delete users7.street
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
