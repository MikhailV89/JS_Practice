//1
// const str = "JavaScript";
// let reverseStr = '';
//
// for (let i = str.length - 1; i >= 0; i-- ) {
//     reverseStr += str[i];
// }
//
// console.log(reverseStr);
//
// //2
//
// const a = 5.91833;
// let operation = (a * 100) + 0.5;
// let result = 0;
//
// while (result <= operation - 0.5) {
//     result ++;
//  }
//  console.log(result / 100);
//
// //3
// const num = 3;
// let isPrime = true;
//
// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//            isPrime = false;
//            break
//         }
//     }
// }
//
// if (isPrime) {
//     console.log('Num is prime');
// } else {
//     console.log('Num is not prime');
// }


//     [[1, 2, 3],
//     [2, 4, 6],
//     [3, 6, 9]]
// size = 1 === [ [1] ]
// size = 2 === [ [1, 2],[2, 4] ]
// size = 4 === [ [1, 2, 3, 4],[2, 4, 6, 8] ,[3, 6, 9, 12],[4, 8, 12, 16]]
// size = 4 === [ [1, 2, 3, 4],[2, 4, 6, 8] ,[3, 6, 9, 12],[4, 8, 12, 16],[5, 10, 15, 25]]
// row = 3....size = 7....[3, 6, 9, 12, 15, 18, 21]
// row = 2...size = 5...[2, 4, 6, 8, 10]
// row = x...size = 5.. [5 elements] === x * size[index]...x * 5[1]
// x * 1 = 1
//x * 2 = ...
// row = 3....[x * 1, x * 2, x * 3 , x * 4, x * 5]
//  let row = [];
//  const size = 5;
//  const rowIndex = 3
//
// for (let i = 1; i <= size; i++) {
//     // 3 6 9 12 15 result
//     row.push(i * rowIndex);
// }
//
// console.log(row) // [3,6,9,12,15]
// const size = 3;
// let arr = [];

// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//         arr.push([i * j]);
//     }
// }
// console.log(arr);
//

const users = [{
    name: 'Alex',
    role: 'admin'
},
    {
        name: 'Jane',
        role: 'admin'
    },
    {
        name: 'Joe',
        role: 'manager'
    },
    {
        name: 'Bob',
        role: 'user'
    },
    {
        name: 'Lily',
        role: 'manager'
    },
    {
        name: 'Kate',
        role: 'admin'
    }];
let result3 = {};
// let admin = 0;
// let user = 0;
// let manager = 0;
for (let i = 0; i < users.length; i++) {
    const data = users[i].role;
    if (result3[data] === undefined) {
        result3[data] = 0;
    }
    result3[data] = (result3[data]) + 1;
    // if (users[i].role === 'admin') {
    //     admin++
    // } else if (users[i].role === 'user') {
    //     user++
    // } else if (users[i].role === 'manager') {
    //     manager++
    // }
}
// console.log(`Admin: ${admin}, Manager: ${manager}, User: ${user}`)
console.log(JSON.stringify(result3));

// i = 0
// 0 < 6
// data = 'admin'
//result3 data = 0 + 1
//i = 1
//1 < 6
//data = 'admin'
//result3 data = 1 + 1
//i = 2
//2 < 6
//data = manager
//result3 data(manager) = 0 + 1

// let res = 0;
// for (let i = 1; i <=3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         res = i * j;
//         console.log(`${i} * ${j} = ${res}`)
//     }
// }

// 1 * 1 = 1
// 1 * 2 = 2
//1 * 3 = 3

 const size = 2;
 const table = [];
 for (let i = 1; i <= size; i++) {
     const row = [];
     for (let j = 1; j <= size; j++) {
         row.push(i*j);
     }
     table.push(row);
 }
 console.log(table);
//size = 2 === [ [1, 2],[2, 4] ]
