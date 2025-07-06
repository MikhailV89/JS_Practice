// написать функцію, яка рахує суму чисел від 1 до n у циклі

function sum(n) {
 let result = 0;
 for (let i = 1; i <= n; i++) {
     result += i
 }
 return result
}

console.log(sum(7))

// написать функцію, яка рахує добуток чисел від 1 до n у циклі

function product(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(product(7))
// написать функцію, яка рахує x у степені n (x^n = x * x * ... * x) у циклі

function pow(x, n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
       result *= x
    }
    return result
}

console.log(pow(2, 3))

// написать функцію, яка рахує x у степені n (x^n = x * x * ... * x) рекурсивно

function recursivePow(x, n) {
   if (n === 0) return 1
    return x * recursivePow(x,n - 1)
}

console.log(recursivePow(7, 3))

// реалізувати свою функцію some
function some(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) return true
    }
    return false
}
const array = [1, 2, 3, 4, 5];
const result1 = some(array, (element) => element % 2 === 0)
console.log(result1)

// реалізувати свою функцію findLast

function findLast(arr, predicate) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr)) return arr[i]
    }
}

const arr1 = [1, 3, 56, 78, 98, 4, 3, 5, 23];
const result = findLast(arr1,(element) => element < 5)
console.log(result)

// написать функцію, яка визначає максимальний елемент у масиві чисел у циклі

function max(arr) {
    let element = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (element < arr[i]) {
            element = arr[i]
        }
    }
    return element
}

const arr2 = [1, 2, 54, -9, 7, 0]
const result2 = max(arr2);
console.log(result2)// 54

// написать функцію, яка визначає максимальний елемент у масиві чисел рекурсивно

function recursiveMax(arr) {
 if (arr.length === 0) return -Infinity
    if (arr.length === 1) return arr[0]

    const result1 = arr[0];
    const result2 = recursiveMax(arr.slice(1))

    if (result1 > result2) {
        return result1
    }
    return result2

}

const arr3 = [1, 2, 54, -9, 7, 0]
const result3 = recursiveMax(arr3);
console.log(result3)// 54

// написать функцію, яка визначає мінімальний елемент у масиві чисел рекурсивно

function recursiveMin(arr) {
    if (arr.length === 0) return Infinity
    if (arr.length === 1) return arr[0]

    const result1 = arr[0];
    const result2 = recursiveMin(arr.slice(1))

    if (result1 < result2) return result1
    return result2
}

const arr5 = [1, 2, 54, -9, 7, 0]
const result5 = recursiveMin(arr5);
console.log(result5)// -9


function map(arr, callback) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
           let res1 = callback(arr[i])
            result.push(res1)

        }

        return result
    }

    let arr = [1, 2, 3, 4, 5, 6, 7]
    let newArr = []
for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
}
arr = newArr
console.log(arr)
/* використовуючи тільки реалізовані функції порахувать списки
мінімальних та максимальних елементів масивів
*/

const numbers = [[3, 6, -4, 8], [-10, 5, 8, -11], [-20, 3, 0, 1], [2, 5, 1, 7, 4, 32]]
debugger

 const mins = map(numbers, recursiveMin)
 const maxs = map(numbers, recursiveMax)

    console.log(mins);// [-4, -11, -20, 1]
console.log(maxs);// [8, 8, 3, 32]
