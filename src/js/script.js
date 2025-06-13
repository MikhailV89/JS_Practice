 // реалізувать функцію flat. функція прибирає один рівень - вже є
// (() => {
//     function flat1(arr) {
//         let result = [];
//         for (let i = 0; i < arr.length; i++) {
//              if (Array.isArray(arr[i])) {
//                  for (let j = 0; j < arr[i].length; j++) {
//                      result.push(arr[i][j])
//                  }
//              } else {
//                 result.push(arr[i])
//              }
//          }
//         return result
//     }
//
//     const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
//     const result1 = flat1(arr1);
//     console.log(result1); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
//     const result2 = flat1(arr2);
//     console.log(result2); // [2,5,8,[33,-13],0,-8, [-3]]
//
//     const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
//     const result3 = flat1(arr3);
//     console.log(result3); // [2,5,8,[33,[-13]],0,-8, [-3]];
// })();

// // реалізувать функцію flat. функція прибирає два рівні - ідея в тому, щоб застосувать ту саму логіку ще раз
// (() => {
//     function flat2(arr) {
//         const result = [];
//          for (let i = 0; i < arr.length; i++) {
//              if (Array.isArray(arr[i])) {
//                  for (let j = 0; j < arr[i].length; j++) {
//                      result.push(arr[i][j])
//                  }
//              } else {
//                 result.push(arr[i])
//              }
//          }
//         const newResult = []
//          for (let q = 0; q < result.length; q++) {
//
//              if (Array.isArray(result[q])) {
//                  for (let k = 0; k < result[q].length; k++) {
//                      newResult.push(result[q][k])
//                  }
//              } else {
//                  newResult.push(result[q])
//              }
//          }
//         return newResult
//     }
//
//     const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
//     const result1 = flat2(arr1);
//     console.log(result1); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
//     const result2 = flat2(arr2);
//     console.log(result2); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
//     const result3 = flat2(arr3);
//     console.log(result3); // [2,5,8,33,[-13],0,-8, -3]
// })();
//
// // реалізувать функцію flat. функція прибирає три рівні - ідея в тому, щоб застосувать ту саму логіку ще раз
// (() => {
//     function flat3(arr) {
//         const result = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 for (let j = 0; j < arr[i].length; j++) {
//                     result.push(arr[i][j])
//                 }
//             } else {
//                 result.push(arr[i])
//             }
//         }
//         const newResult = []
//         for (let q = 0; q < result.length; q++) {
//
//             if (Array.isArray(result[q])) {
//                 for (let k = 0; k < result[q].length; k++) {
//                     newResult.push(result[q][k])
//                 }
//             } else {
//                 newResult.push(result[q])
//             }
//         }
//         // return newResult
//         // debugger
//        const realNewResult = [];
//         for (let i = 0; i < newResult.length; i++) {
//             if (Array.isArray(newResult[i])) {
//                 for (let j = 0; j < newResult[i].length; j++) {
//                     realNewResult.push(newResult[i][j])
//                 }
//             } else {
//                 realNewResult.push(newResult[i])
//             }
//         }
//         return realNewResult
//     }
//
//     const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
//     const result1 = flat3(arr1);
//     console.log(result1); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
//     const result2 = flat3(arr2);
//     console.log(result2); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
//     const result3 = flat3(arr3);
//     console.log(result3); // [2,5,8,33,-13,0,-8, -3]
// })();
//
// // реалізувать функцію flat, де кількість рівнів для прибирання задається. ідея в тому, щоб узагальнить попередні рішення
(() => {
    function flat3(arr, depth = 1) {

            let result = [];
            for (let a = 0; a < depth; a++) {
                for (let i = 0; i < arr.length; i++) {
                    if (Array.isArray(arr[i])) {
                       for (let j = 0; j < arr[i].length; j++) {
                           result.push(arr[i][j])
                       }
                    } else {
                        result.push(arr[i]);
                    }
                }
            }

            return result
    }

    const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
    const result1 = flat3(arr1);
    console.log(result1); // [2,5,8,33,-13,0,-8, -3]

    const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
    const result2 = flat3(arr2, 1);
    console.log(result2); // [2,5,8,[33,-13],0,-8, [-3]]

    const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
    const result3 = flat3(arr3, 3);
    console.log(result3); // [2,5,8,33,-13,0,-8, -3]
})();


// реалізувать функцію includes, яка перевіряє, чи є заданий елемент в масиві чи ні. використовувати інші методи масиву не можна
// (() => {
    // function includes(arr, b) {
    //     let result = false
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] === b) {
    //                 result = true;
    //                 break
    //             }
    //         }
    //         return result
    // }

//     function includes(arr, b, fromWhatIndex) {
//         let start = fromWhatIndex !== undefined ? fromWhatIndex : 0;
//
//             for (let i = start; i < arr.length; i++) {
//                 if (arr[i] === b) return true
//             }
//         return false
//     }
//
//     const arr1 = [-3, '123', '', null, true];
//     const result1 = includes(arr1, null);
//     console.log(result1); // true
//
//     const arr2 = [-3, '123', '', null, true, false];
//     const result2 = includes(arr2, false);
//     console.log(result2); // true
//
//     const arr3 = [-3, '123', '', null, true];
//     const result3 = includes(arr3, 0);
//     console.log(result3); // false
//
//     const arr4 = [-3, '123', '', null, true];
//     const result4 = includes(arr4, -3, 1 );
//     console.log(result4); // false
// })();
//
// // реалізувать функцію slice, яка повертає частину або копію всього масиву. використовувати інші методи масиву не можна
// (() => {
//     function slice(arr, startIndex, endIndex) {
//
//         let result = [];
//         let start = startIndex !== undefined ? startIndex : 0;
//         let end = endIndex !== undefined ? endIndex : arr.length
//         // debugger
//         if (endIndex < 0) {
//              end = arr.length + endIndex
//         }
//         for (let j = start; j < end; j++) {
//             result.push(arr[j])
//         }
//         return result;
//     }
//
//
//     const arr1 = [-3, '123', '', null, true];
//     const result1 = slice(arr1);
//     console.log(result1); // [-3, '123', '', null, true];
//     console.log(arr1 === result1); // false
//
//     const arr2 = [-3, '123', '', null, true, false];
//     const result2 = slice(arr2, 1);
//     console.log(result2); // ['123', '', null, true, false];
//
//     const arr3 = [-3, '123', '', null, true];
//     const result3 = slice(arr3, 1, 3);
//     console.log(result3); // ['123', ''];
//
//     const arr4 = [-3, '123', '', null, true];
//     const result4 = slice(arr4, 1, -1);
//     console.log(result4); // ['123', '', null];
// })();
