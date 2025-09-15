//1) Для кожної послідовності написати функцію, яка вертає число на вказаному місці
// (послідовності всі які були вже):

//1.1) 1, 1, 2, 3, 5, 8, ?
//     function getSequenceNumber1(index) {
//         let result = 0;
//         return result
//     }
//
//     console.log(getSequenceNumber1(3)) // 2
// console.log(getSequenceNumber1(5)) // 5
// console.log(getSequenceNumber1(6)) // 8

// //1.2) 1, 3, 6, 10, 15, 21, ?

function getSequenceNumber2(length){
    let result = 0;
    for (let i = 1; i <= length; i++) {
        result += i
    }
    return result
}
console.log(getSequenceNumber2(7))

function getSequence2(length) {
    let arr = [];
    let result = 0;
    for(let i = 1; i <= length; i++) {
        result += i;
        arr.push(result)
    }
    return arr
}
console.log(getSequence2(7))

  //   1.4) 1, 2, 6, 24, 120, ?
function getSequence4(index) {
    let result = 1;
    for (let i = 2; i<= index; i++) {
        result *= i
    }
    return result
}
console.log(getSequence4(6))

function getSequenceNumber4(index) {
    let result = [];
    let value = 1;
    for (let i = 1; i<= index; i++) {
        value *= i
        result.push(value)
    }
    return result
}
console.log(getSequenceNumber4(6))
//   1.5) 3, 5, 7, 9, 11, ?

function getSequenceNumber5(index) {

    let result = 3
    for (let i = 1; i < index; i++){
        result += 2
    }
    return result
}

function  getSequence5(length) {
    let result = [3]
    for (let i = 1; i < length; i++) {
        let value = result[i - 1] + 2
        result.push(value)
    }
    return result
}
console.log(getSequence5(7))

//   1.5) 3, 5, 7, 9, 11, ? 11 + 2 13 + 2 15 + 2 17 + 2 19 + 2
console.log(getSequenceNumber5(5))

//1.9) 2 4 8 16 32 64 ?
function getSequenceNumber9(index) {
    return 2 ** index
}
console.log(getSequenceNumber9(7))

function getSequence9(length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
       let result = 2 ** i
        arr.push(result)
    }
    return arr
}
console.log(getSequence9(7))
//1.10) 3 5 9 17 33 65 ?  2 4 8 16 32 64 128
 function getSequenceNumber10(index) {
     return 2 ** index + 1
 }
console.log(getSequenceNumber10(7))

function getSequence10(length) {
    let arr = []
    for (let i = 1; i <= length; i++) {
        let result = 2 ** i + 1
        arr.push(result)
    }
    return arr
}
console.log(getSequence10(7))

//1.11) 3 9 27 81 243 ?
function getSequenceNumber11(index) {
   return 3 ** index
}
console.log(getSequenceNumber11(6))

function getSequence11(length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        let result = 3 ** i;
        arr.push(result);
    }
    return arr
}
console.log(getSequence11(6))
   // 1.12) 1 3 6 8 11 13 16 18 21 ?
 function getSequenceNumber12(index) {
    let result = 1;
    for (let i = 2; i <= index; i++) {
        let step = i % 2 === 0 ? 2 : 3;
        result += step
    }
    return result
 }
console.log(getSequenceNumber12(10))

function getSequence12(length) {
    let arr = [1];
    let result = 1;
    for (let i = 2; i <= length; i++) {
        let step = i % 2 === 0 ? 2 : 3;
        result += step
        arr.push(result)
    }
    return arr
}
console.log(getSequence12(10))

//     //наприклад:
//
//     function getSequenceNumber7(index) {
//         return index ** 2 + 1;
//     }
//
// console.log(getSequenceNumber7(3)) // 10
// console.log(getSequenceNumber7(5)) // 26
// console.log(getSequenceNumber7(6)) // 37



// --------------------------------------------------------------
//
   // 2) перевірити, чи число паліндром (читається число однаково зліва направо і справа наліво):

function isPalindrom(num) {
 let result = ''
    let numStr = String(num)
    for (let i = numStr.length - 1; i >= 0; i--) {
        result+= numStr[i]
    }
   return (result === numStr)
}

console.log(isPalindrom(121)) // true
console.log(isPalindrom(123456754321)) // false
console.log(isPalindrom(6)) // true
console.log(isPalindrom(66)) // true
console.log(isPalindrom(67)) // false
console.log(isPalindrom(1441)) // true

//3) перевернути рядок без використання готових методів (зробить його задом наперед). наприклад,
// для рядка "JavaScript" має вивести "tpircSavaJ".

    function getReversedStr(str) {
    let result = ''
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i]
        }
        return result
}

console.log(getReversedStr("JavaScript")) // "tpircSavaJ"
console.log(getReversedStr("ololo2")) // "2ololo"
console.log(getReversedStr("ha-ha")) // "ah-ah"

//4) є список юзерів. вивести рядок - кількість юзерів кожної ролі

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

let result = {}
for (let i = 0; i < users.length; i++) {
    const key = users[i].role
    if (!result[key]) result[key] = 0
    result[key] += 1
}

const arrResult = Object.entries(result);

let str = ''

for (let i = 0; i < arrResult.length; i++) {
    if (i > 0) str += ', '
    str += arrResult[i][0] + ' - ' + arrResult[i][1]
    // for (let j = 0; j < arrResult[i].length; j++) {
    //     str += arrResult[i][j] + ' - '
    // }
}

console.log(str)
console.log(result); // "admin - 3, manager - 2, user - 1"
//
//
 //5) Для кожної послідовності написати функцію, яка вертає масив - послідовність вказаної довжини
// (послідовності всі які були вже):
//
 //5.1) 1, 1, 2, 3, 5, 8, ?
    function getSequence1(length) {
        let result = [1, 1]
        if (length === 1) return [1]
        if (length === 2) return [1, 1]

        for (let i = 2; i < length; i++) {
            let value = result[i - 1] + result[i -2]
                result.push(value)
        }
        return result
    }

    console.log(getSequence1(3)) // [1, 1, 2]
console.log(getSequence1(5)) // [1, 1, 2, 3, 5]
console.log(getSequence1(6)) // [1, 1, 2, 3, 5, 8]

//
//  */
//    // наприклад:
//
//     function getSequence7(length) {
//         const seq = [];
//         for (let i = 1; i <= length; i++) {
//             seq.push(i**2 + 1);
//         }
//
//         return seq;
//     }
//
// console.log(getSequence7(3)) // [2, 5, 10]
// console.log(getSequence7(5)) // [2, 5, 10, 17, 26]
// console.log(getSequence7(6)) // [2, 5, 10, 17, 26, 37]


//написать функцію, яка генерує послідовність чисел вказаної довжини і за вказаним правилом:

    function getSequence(length, getSequenceNumber) {
        let arr = []
        for (let i = 1; i <= length; i++) {
            let res = getSequenceNumber(i)
            arr.push(res)
        }
        return arr
    }

const seq1 = getSequence(5, getSequenceNumber5);
const seq2 = getSequence(7, function (index) {
    return index ** 2 + 1;
});

console.log(seq1); // [3,5,7,9,11]
console.log(seq2); // [2, 5, 10, 17, 26, 37, 50]

// 1.6) 2, 3, 5, 7, 11, 13, 17, ?

function getSequenceNumber6(index) {
    let result = 0;

    for (let i = 2; i <= index; i++) {
       if (!(i % 2)) {
           result = i
       }
    }
    return result
}

console.log(getSequenceNumber6(7))

// function num(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false
//     }
//     return true
// }
//
// console.log(num(691)) // true
// console.log(num(29)) // true
// console.log(num(21)) // false
// 1.6) 2, 3, 5, 7, 11, 13, 17, ?
function getSequence6(index) {
    let result = 0;
    let arrResult = []
    for (let i = 2; i <= index; i++) {
        if (i % 1 || i % i || !(i % 2)) {
            result = i
        }
        arrResult.push(result) // ???
    }
    return arrResult
}

console.log(getSequence6(8))
// 1.7) 2, 5, 10, 17, 26, 37, ?

function getSequenceNumber7(index) {
    return index * index + 1
}

console.log(getSequenceNumber7(7))

function getSequence7(length) {
   let result = [];
   for (let i = 1; i <= length; i++) {
       result.push(i * i + 1)
   }
   return result

}

console.log(getSequence7(7))


console.log(seq1); // [2, 5, 10, 17, 26]
console.log(seq2); // [2, 5, 10, 17, 26, 37, 50]

// 1.3) 1, 3, 0, 4, -1, 5, -2, ? 6

function getSequenceNumber3(index) {
    let start = 1;
    for (let i = 2; i <= index; i++) {
        if (i % 2 === 0) {
            start += i
        } else {
            start -= i
        }

    }
    return start
}
console.log(getSequenceNumber3(8))
console.log(getSequenceNumber3(5))
console.log(getSequenceNumber3(2))


function getSequence3(length) {
    let start = 1;
    let arr = [1]
    for (let i = 2; i <= length; i++) {
        if (i % 2 === 0) {
            start += i
        } else {
            start -= i
        }
        arr.push(start)

    }
    return arr
}

console.log(getSequence3(8))
console.log(getSequence3(5))
console.log(getSequence3(2))

//1.8) 1 3 6 8 16 18 36 38 76 78 156 158 ? 316

function getSequenceNumber8(index) {
    let result = 1;
    for (let i = 2; i <= index; i++) {
        if (i % 2 === 0) {
            result += 2
        } else {
            result *= 2
        }
    }
    return result
}
console.log(getSequenceNumber8(13))
console.log(getSequenceNumber8(5))
console.log(getSequenceNumber8(2))

function getSequence8(length) {
    let result = 1;
    let arr = [1]
    for (let i = 2; i <= length; i++) {
        if (i % 2 === 0) {
            result += 2
        } else {
            result *= 2
        }
        arr.push(result)
    }
    return arr
}
console.log(getSequence8(13))
console.log(getSequence8(5))
console.log(getSequence8(2))
