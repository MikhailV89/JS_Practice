import {findLast, map, some, filter, reduce, forEach, every, reverse} from "./functions.js";
//написати функції, якій повертають елемент послідовності по індексу та масив послідовності вказаної довжини. послідовності:


//13) 1 3 7 13 21 31 43 57 ?
function getSequenceNumber13(index){
    // return  index * index - index + 1
    let result = 1
    let step = 2
    for (let i = 1; i < index; i++) {
        result += step
        step += 2
    }
    return result

}
console.log(getSequenceNumber13(9))
console.log(getSequenceNumber13(3))
console.log(getSequenceNumber13(6))

function getSequence13(length){
    let arr = [1]
    let result = 1
    let step = 2
    for (let i = 1; i < length; i++) {
        result += step
        arr.push(result)
        step += 2
    }
    return arr

}
console.log(getSequence13(9))
console.log(getSequence13(3))
console.log(getSequence13(6))

//  14) 2 5 2 5 2 5 2 5 2 5 ? 2

function getSequenceNumber14(index){
       return  index % 2 !== 0 ? 2 : 5

}
console.log(getSequenceNumber14(11))
console.log(getSequenceNumber14(3))
console.log(getSequenceNumber14(6))

function getSequence14(length){
 let arr = []
    let res = 0
    for (let i = 1; i <= length; i++) {
        // if (i % 2 !== 0) {
        //     res = 2
        //     arr.push(res)
        // } else {
        //     res = 5
        //     arr.push(res)
        // }
        i % 2 !== 0 ? res = 2 : res = 5
        arr.push(res)
    }
return arr
}

console.log(getSequence14(11))
    //15) -1 0 1 -1 0 1 -1 0 1 ? - 1

function getSequenceNumber15(index) {
    let res = -1;
    for (let i = 1; i < index; i++) {
        if (res === -1) {
            res = 0;
        } else if (res === 0) {
            res = 1;
        } else if (res === 1) {
            res = -1;
        }
    }
    return res;
}
console.log(getSequenceNumber15(4))

function getSequence15(length) {
    let res = [-1];
    for (let i = 1; i < length; i++) {
        if (res[i -1] === -1) {
            res.push(0);
        } else if (res[i - 1] === 0) {
            res.push(1);
        } else if (res[i - 1] === 1) {
            res.push(-1);
        }
    }
    return res;
}
console.log(getSequence15(4))

//16) 1 3 7 15 31 63 127 ?

function getSequenceNumber16(index) {
    return 2 ** index - 1
}
console.log(getSequenceNumber16(8))
console.log(getSequenceNumber16(3))
console.log(getSequenceNumber16(5))

function getSequence16(length) {
 let arr = []
    let res = 1
    for (let i = 1; i <= length; i++) {
       res = 2 ** i - 1
        arr.push(res)
    }
    return arr
}
console.log(getSequence16(8))
console.log(getSequence16(3))
console.log(getSequence16(5))

//17) 1 1 1 3 5 9 17 31 57 ?

function getSequence17(length) {
    let arr = [1, 1, 1]
    if (length === 1) return [1]
    if (length === 2) return [1, 1]
    for (let i = 3; i < length; i++) {
        let value = arr[i - 1] + arr[i - 2] + arr[i - 3]
        arr.push(value)
    }
    return arr
}
console.log(getSequence17(10))
console.log(getSequence17(7))

function getSequenceNumber17(index) {
     // debugger
    let num1 = 1 // чай
    let num2 = 1// молоко
    let num3 = 1// пепси
    let value = 0
    if(index <= 3) return 1

    for (let i = 3; i < index; i++) {
        value = num1 + num2 + num3// 3//  1 + 1 + 3 = 5
        num1 = num2//1.. 1
        num2 = num3//1// 3..
        num3 = value; // 3 = value 5


    }
    return value
}
console.log(getSequenceNumber17(9))

let a = 5; //чай
let b = 10 // молоко
let d = 15// pepsi
let c = 0;// 3 чашка

c = a // чай в пуст c = 5
a = b// a = 10
b = d// b = 15
d = c
//  молоко= чай   3чашка молоко  чай = молоко
// ?

console.log(a, b, d) // 10 5

//18) 1 3 6 8 11 13 16 18 21 ?

 function getSequenceNumber18(index) {
    let result = 1;
    for (let i = 1; i < index; i++) {
        let step = i % 2 !== 0 ? 2 : 3;
        result += step
    }
    return result
 }

 console.log(getSequenceNumber18(10))
console.log(getSequenceNumber18(3))
console.log(getSequenceNumber18(5))

function getSequence18(length) {
    let result = 1;
    let arr = [1]
    for (let i = 1; i < length; i++) {
        let step = i % 2 !== 0 ? 2 : 3;
        result += step
        arr.push(result)
    }
    return arr
}

console.log(getSequence18(10))
console.log(getSequence18(3))
console.log(getSequence18(5))
    //--------------------------------

//1) звіт по зроблений задачах. при цьому зробить підзадачі в окремих функціях, а  потім звести все в одне рішення

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

const project = projects[0]
project.tasks.reduce((acc) =>{

},{})

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
