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

console.log(company1)
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

// // ?
//
// console.log(company);
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


//дано:
    const company = {
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
    };

//1) Порахувати загальну кількість співробітників у компанії

const totalEmployees = reduce(company.departments, (acc, item)=>{
   acc+= item.employees.length
    return acc
},0)
console.log(totalEmployees); // 4

//2) Порахувати загальну зарплату по всіх департаментах

const totalSalary = reduce(company.departments, (acc, item)=>{
    for (let i = 0; i < item.employees.length; i++) {
        acc += item.employees[i].salary
        }

    return acc
}, 0)
console.log(totalSalary); // 12700

//3) Знайти всіх співробітників із роллю "developer"

const developers = reduce(company.departments, (acc, item)=>{
for (let i = 0; i < item.employees.length; i++) {
    if (item.employees[i].role === 'developer') acc.push(item.employees[i].name)
}
return acc
},[])
console.log(developers);
// ['Anna', 'Ira']

//4) Порахувати загальну кількість годин у задачах зі статусом 'done'

const doneHours = reduce(company.departments, (acc, item)=>{
    for (let i = 0; i < item.employees.length; i++) {
        for (let j = 0; j < item.employees[i].tasks.length; j++){
            if (item.employees[i].tasks[j].status === 'done') {
                acc += item.employees[i].tasks[j].hours
            }
        }
    }
    return acc
}, 0)
console.log(doneHours); // 85

//5) Порахувати кількість задач кожного статусу

const statusStats = reduce(company.departments, (acc, item)=>{
    for(let i = 0; i < item.employees.length; i++) {
        for (let j = 0; j < item.employees[i].tasks.length; j++){
            const key = item.employees[i].tasks[j].status
            if (!acc[key]) acc[key] = 0
            acc[key] += 1
        }
    }
    return acc
},{})
console.log(statusStats);
/*
{
  done: 6,
  'in progress': 2,
  'to do': 1
}
*/

//6) Побудувати об’єкт: департамент → кількість співробітників

const deptCounts = reduce(company.departments, (acc, item)=>{
    const key = item.name
    if (!acc[key]) acc[key] = 0
    acc[key] += item.employees.length

return acc

},{})

console.log(deptCounts);
/*
{
  Frontend: 2,
  Backend: 2
}
*/

//7) Побудувати об’єкт: ім’я співробітника → сумарні години у всіх його задачах

const hoursByEmployee = reduce(company.departments, (acc, item)=>{
for (let i = 0; i < item.employees.length; i++) {
    const key = item.employees[i].name
    if (!acc[key]) acc[key] = 0
    for (let j = 0; j < item.employees[i].tasks.length; j++) {
        acc[key] += item.employees[i].tasks[j].hours
    }
}
return acc
},{})

console.log(hoursByEmployee);
/*
{
  Anna: 35,
  John: 30,
  Ira: 55,
  Oleh: 35
}
*/

//8) Побудувати об’єкт: департамент → загальна зарплата

const salaryByDept = reduce(company.departments, (acc, item)=>{

       const key = item.name
       if (!acc[key]) acc[key] = 0
    for (let i = 0; i < item.employees.length; i++) {
        acc[key] += item.employees[i].salary
    }

    return acc
}, {})
console.log(salaryByDept);
/*
{
  Frontend: 6500,
  Backend: 6200
}
*/

//9) Побудувати об’єкт: статус задачі → імена співробітників, у яких є такі задачі (без повторів імен!)

const employeesByStatus = reduce(company.departments, (acc, item)=>{
    for (let i = 0; i < item.employees.length; i++) {
        for (let j = 0; j < item.employees[i].tasks.length; j++) {
            const key = item.employees[i].tasks[j].status
            if (!acc[key]) acc[key] = []
            if (!acc[key].includes(item.employees[i].name)) acc[key].push(item.employees[i].name)
        }
    }
    return acc
},{})
console.log(employeesByStatus);
/*
{
  done: ['Anna', 'John', 'Ira', 'Oleh'],
  'in progress': ['Anna', 'Ira'],
  'to do': ['John']
}
*/

//10) Згенерувати звіт рядком
const value = Object.entries(salaryByDept)
console.log(value)// [ [Frontend, 6500], [Backend, 6200]]

const report = reduce(value, (acc, item)=>{

    acc += `${item[0]}: ${deptCounts[item[0]]} співробітники, ${item[1]} грн; `
    // for (let i = 0; i < item.length; i++) {
    //     acc += `${item[0]}: ${deptCounts[item[0]]}`
    // }
    return acc
},'') + `Разом: ${totalEmployees} співробітники, ${totalSalary} грн`
console.log(report);
/*
'Frontend: 2 співробітники, 6500 грн; Backend: 2 співробітники, 6200 грн; Разом: 4 співробітники, 12700 грн'
*/







//доповнить об'єкт:

// //1)
const shop = {
    id: 's1',
    name: 'GadgetStore'
};



const categories = [
    { id: 'c1', name: 'Phones', shopId: 's1' },
    { id: 'c2', name: 'Laptops', shopId: 's1' }
];

const products = [
    { name: 'iPhone 14', price: 1200, categoryId: 'c1' },
    { name: 'Samsung S23', price: 1000, categoryId: 'c1' },
    { name: 'MacBook Air', price: 1500, categoryId: 'c2' }
];

shop.categories = categories

for (let i = 0; i < categories.length; i++) {
    let filterArr = filter(products, item => item.categoryId === categories[i].id)
    categories[i].products = filterArr

}


// ?
//
 console.log(shop);
// /*
// {
//   id: 's1',
//   name: 'GadgetStore',
//   categories: [
//     {
//       id: 'c1',
//       name: 'Phones',
//       products: [
//         { name: 'iPhone 14', price: 1200 },
//         { name: 'Samsung S23', price: 1000 }
//       ]
//     },
//     {
//       id: 'c2',
//       name: 'Laptops',
//       products: [
//         { name: 'MacBook Air', price: 1500 }
//       ]
//     }
//   ]
// }
// */
//
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
    let arr = filter(students1, item => item.facultyId === faculties[i].id)
    faculties[i].students = arr

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
// */
//
// згрупувать дані
//
// //3)
const customers = [
    { id: 'c1', name: 'Anna' },
    { id: 'c2', name: 'John' }
];

const orders = [
    { id: 'o1', customerId: 'c1', items: ['apple', 'banana'] },
    { id: 'o2', customerId: 'c1', items: ['milk'] },
    { id: 'o3', customerId: 'c2', items: ['bread', 'butter', 'milk'] }
];

const result7 = reduce(orders, (acc, item)=>{

    const custName = customers.find(n => n.id === item.customerId)
    const key = custName.name
    if (!acc[key]) acc[key] = []
     for (let i = 0; i < item.items.length; i++) {
         acc[key].push(item.items[i])
     }
    return acc
},{})

 console.log(result7);
// /*
// {
//   Anna: ['apple', 'banana', 'milk'],
//   John: ['bread', 'butter', 'milk']
// }
// */

//4)
const teachers = [
    { id: 't1', name: 'Olena' },
    { id: 't2', name: 'Andrii' }
];

const courses = [
    { title: 'JavaScript', teacherId: 't1' },
    { title: 'HTML & CSS', teacherId: 't1' },
    { title: 'React', teacherId: 't2' }
];


const result4 = reduce(courses, (acc, item)=>{
    const teacher = teachers.find(unit => unit.id === item.teacherId)
    const key = teacher.name
    if (!acc[key])acc[key] = []
    acc[key].push(item.title)
    return acc
},{})
console.log(result4);
/*
{
  Olena: ['JavaScript', 'HTML & CSS'],
  Andrii: ['React']
}
*/

//5)
const products1 = [
    { name: 'iPhone', category: 'phones', price: 1200 },
    { name: 'Samsung', category: 'phones', price: 900 },
    { name: 'MacBook', category: 'laptops', price: 1800 },
    { name: 'Dell', category: 'laptops', price: 1500 }
];

const grouped = reduce(products1, (acc, item)=>{
 if (!acc[item.category])acc[item.category] = []
 acc[item.category].push({name: item.name, price: item.price})
    return acc
},{})
console.log(grouped);
// /*
// {
//   phones: [
//     { name: 'iPhone', price: 1200 },
//     { name: 'Samsung', price: 900 }
//   ],
//   laptops: [
//     { name: 'MacBook', price: 1800 },
//     { name: 'Dell', price: 1500 }
//   ]
// }
// */
//
// //6)
const reviews = [
    { author: 'Anna', score: 4 },
    { author: 'Anna', score: 5 },
    { author: 'John', score: 3 },
    { author: 'John', score: 4 },
    { author: 'John', score: 2 }
];

const avgByAuthor = reduce(reviews, (acc, item)=>{

    let count = 0
    if (!acc[item.author]) acc[item.author] = 0

    for (let i = 0; i < reviews.length; i++) {
        if (item.author === reviews[i].author) count++
    }
    acc[item.author] += item.score / count
    return acc
},{})
 console.log(avgByAuthor);
/*
{
  Anna: 4.5,
  John: 3
}
*/



const students = [
    { name: 'Anna', subjects: ['Math', 'English', 'Physics'] },
    { name: 'John', subjects: ['Math', 'Biology'] },
    { name: 'Sofia', subjects: [] }
];

const result1 = reduce(students, (acc, item)=>{
    const key = item.name
    if (!acc[key])acc[key] = 0
    acc[key] += item.subjects.length
    return acc
},{})
console.log(result1);
/*
{
  Anna: 3,
  John: 2,
  Sofia: 0
}
*/


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
        users[i].fullName = ''
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
