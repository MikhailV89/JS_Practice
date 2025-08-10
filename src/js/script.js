import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";


// 1 звіт по компанії - порахувать масив кількостей активних працівників

const employees = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

const activeEmployeeByDepartment = Object.values(reduce(filter(employees, (element)=> element.isActive),(acc, item)=>{
    const key = item.department;
    acc[key] = (acc[key] || 0) + 1
    return acc
},{}));
console.log(activeEmployeeByDepartment); // [2, 1, 1]

 // 2 звіт по компанії - порахувать зарплати активних працівників по відділах

const employees1 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

const salariesByDepartment = Object.values(reduce(filter(employees1, (element)=> element.isActive),(acc, item)=>{
    const key = item.department;
    acc[key] =  (acc[key] || 0) + item.salary
    return acc
},{}))

console.log(salariesByDepartment); // [4200, 4500, 3000]


//3) звіт по компанії - порахувать масив назв відділів

const employees2 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

 const departmentNames = reduce(filter(employees2, (element) => element.isActive), (acc, item)=>{
     if (!acc.includes(item.department)){
         acc.push(item.department)
     }
     return acc
 },[])
console.log(departmentNames); // ['HR', 'IT', 'Sales']

//4) звіт по компанії - маючи масиви назв відділів, зп і кількості працівників, поразувать масив звітів по кожному відділу

const employees3 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

const departmentNames1 = ['HR', 'IT', 'Sales']
const salariesByDepartment1 = [4200, 4500, 3000]
const activeEmployeeByDepartment1 = [2, 1, 1]

const reportLines = map(departmentNames, (item, index)=> {
    return `Відділ ${item}: ${salariesByDepartment1[index]} грн (${activeEmployeeByDepartment1[index]} працівників) `
})

console.log(reportLines);
/* [
  'Відділ HR: 4200 грн (2 працівників)',
  'Відділ IT: 4500 грн (1 працівників)',
  'Відділ Sales: 3000 грн (1 працівників)'
]
 */
//
// //5) звіт по компанії - маючи масив звітів по кожному відділу, зробить загальний звіт

const employees7 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

const reportLines1 = [
    'Відділ HR: 4200 грн (2 працівників)',
    'Відділ IT: 4500 грн (1 працівників)',
    'Відділ Sales: 3000 грн (1 працівників)'
]

const reportDep = reportLines1.join('\n')
console.log(reportDep);
/*
  "Відділ HR: 4200 грн (2 працівників)
Відділ IT: 4500 грн (1 працівників)
Відділ Sales: 3000 грн (1 працівників)"
*/

 //6) звіт по компанії - порахувать усю зп і кількість активних працівників

const employees6 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];


// const total1 = reduce(filter(employees6, (element) => element.isActive), (acc, item)=>{
//     acc.sumSalary += item.salary
//     acc.count += 1
//     return acc
//
// },{sumSalary: 0, count: 0 });
//
// const strResult = `Разом: ${total1.count} працівників, ${total1.sumSalary} грн зарплати`
// console.log(strResult);
// /*
//   "Разом: 4 працівників, 11700 грн зарплати"
// */
//
// 7) Звіт по компанії - звести до купи рішення з попередніх задач. взяти тільки активних співробітників і порахувати сумарну зп по відділах

const employees8 = [
    { name: 'Anna', department: 'HR', salary: 2000, isActive: true },
    { name: 'John', department: 'IT', salary: 4000, isActive: false },
    { name: 'Mike', department: 'IT', salary: 4500, isActive: true },
    { name: 'Olga', department: 'HR', salary: 2200, isActive: true },
    { name: 'Ira', department: 'Sales', salary: 3000, isActive: true },
];

const dep = reduce(employees8, (acc, item) => {
    const key = item.department;
    if (!acc.includes(key)) acc.push(item.department)
    return acc
},[]);

const peopleSalary = reduce(employees8, (acc, item)=> {
    if (item.isActive) {
        acc.salary += item.salary;
        acc.count++
    }
    return acc
}, {count: 0, salary: 0})

const total = `Разом: ${peopleSalary.count} працівників, ${peopleSalary.salary} грн зарплати`
console.log(total)

const departmentCount = Object.values(reduce(employees8, (acc, item) => {
    if (item.isActive) {
        const key = item.department;
        acc[key] = (acc[key] || 0) + item.salary
    }
return acc

},{}))
console.log(departmentCount)

const peopleCount = Object.values(reduce(employees8, (acc, item) => {
    if (item.isActive) {
        const key = item.department;
        acc[key] = (acc[key] || 0) + 1
    }
    return acc

},{}))
console.log(peopleCount)

 const result = map(dep, (item, index)=>{
     return `Відділ ${item}: ${departmentCount[index]} грн (${peopleCount[index]} працівників)`
 })
console.log(result)

const report = result.join('\n') + '\n' +  total;
 console.log(report);
/*
Відділ HR: 4200 грн (2 працівників)
Відділ IT: 4500 грн (1 працівників)
Відділ Sales: 3000 грн (1 працівників)
Разом: 4 працівників, 11700 грн зарплати
*/

/*
4) 1, 2, 6, 24, 120, ?
    5) 3, 5, 7, 9, 11, ? 13
    6) 2, 3, 5, 7, 11, 13, 17, ? 19
    7) 2, 5, 10, 17, 26, 37, ?
 */
