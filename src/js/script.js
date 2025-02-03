// const num1 = 4.67654645;
// let res = (num1 + 0.5) | 0;
//
// console.log(res);
//
// const num2 = 5.91833;
//
// let operation1 = (num2 * 100) + 0.5;
// let round = operation1 | 0;
// let result1 = round / 100;
// console.log(result1);
//
//
// const num = '1234567654321';
// let result = true
// //135791357913579975319735197531
// //******                  *******
// debugger
// for (let i = 0; i < num.length / 2; i++) {
//     if ( num[i] ===  num[num.length - 1 - i]) {
//
//     } else {
//         result = false
//         break
//     }
// }
//
// if (result === false) {
//     console.log('Number is incorrect');
// } else {
//     console.log('Number is correct');
// }
// if i = 0 => num.length - 1
// if i = 2 =>  num.length - 1 - 2
// if i = 1 =>  num.length - 1 - 1
// if i = 10 =>  num.length - 1 - 10
// if i = I =>  num.length - 1 - i
//----
// if num = 123456789987654321 length = 18  i = [8]
// if num = 1221 length = 4 i =[1]
// if num = 13531 length = 5 i =[1]
// if num = 1 length = 1 i =[не повинно перевірятися]
// if num = 10 length = 2 i =[0]
// if num = x length = x i =[1] = length / 2

debugger
const a = 5.9;
let result = 0
while (result <= a - 0.5) {
    result ++;
}


console.log(result);

// a = 5.7
//result = 0
// починаємо цикл
//0 + 1 <= 5.7
//result = 1
//1 + 1 <= 5.7
//result = 2
//2 + 1 <= 5.7
//result = 3
//3 + 1 <= 5.7
//result = 4
//4 + 1 <= 5.7
//result = 5
//5 + 1 <= 5.7
//console 5


// a = 5.7
//result = 0
// починаємо цикл
//0 - 1 <= 5.7
//result = 1
//1 - 1 <= 5.7
//result = 2
//2 - 1 <= 5.7
//result = 3
//3 - 1 <= 5.7
//result = 4
//4 - 1 <= 5.7
//result = 5
//5 - 1 <= 5.7
//result 6
//6 - 1 <= 5.7
//result 7
//7 - 1 <= 5.7
//console 7


//x + 5 = y + 3
//x = y + 3 - 5


for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log('Num is not prime');
    }
    else {
        console.log('Num is prime');
    }
}
if (num % 1 || num % num || !(num % 2)) {
    console.log('Num is prime');
}
else {
    console.log('Num is not prime');
}
