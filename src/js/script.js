
// (() => {
//     const categories = [
//         { categoryId: 101, name: 'Electronics', active: true },
//         { categoryId: 102, name: 'Computers', active: true },
//         { categoryId: 103, name: 'Mobiles', active: false },
//         { categoryId: 104, name: 'Clothing', active: true }
//     ];
//
//     function findCategoryByName(name, categories, startFrom) {
//         // if (startFrom !== undefined) {
//         //     for (let i = startFrom; i < categories.length; i++) {
//         //         if (categories[i].name === name) {
//         //             return categories[i];
//         //         }
//         //     }
//         // }
//         // else {
//         //     for (let i = 0; i < categories.length; i++) {
//         //         if (categories[i].name === name) {
//         //             return categories[i];
//         //         }
//         //     }
//         // }
//         let result = startFrom === undefined ? 0 : startFrom;
//         for (let i = result; i < categories.length; i++) {
//             if (categories[i].name === name) {
//                              return categories[i];
//                         }
//         }
//
//         return null;
//     }
//
//     const c1 = findCategoryByName('ololo', categories);
//     console.log(c1); // null
//     const c2 = findCategoryByName('ololo', categories, 2);
//     console.log(c2); // null
//     const c3 = findCategoryByName('Computers', categories);
//     console.log(c3); // { categoryId: 102, name: 'Computers', active: true }
//     const c4 = findCategoryByName('Computers', categories, 1);
//     console.log(c4); // { categoryId: 102, name: 'Computers', active: true }
//     const c5 = findCategoryByName('Computers', categories, 2);
//     console.log(c5); // null
//     const c6 = findCategoryByName('Mobiles', categories, 3);
//     console.log(c6); // null
// })();
//
// (() => {
//     const categories = [
//         { categoryId: 101, name: 'Electronics', active: true },
//         { categoryId: 102, name: 'Computers', active: true },
//         { categoryId: 103, name: 'Mobiles', active: false },
//         { categoryId: 104, name: 'Clothing', active: true }
//     ];
//
//     function findCategoryByName(name, categories, startFrom, endWith) {
//
//         // if (startFrom !== undefined) {
//         //     if (endWith !== undefined) {
//         //         for (let i = startFrom; i <= endWith; i++) {
//         //             if (categories[i].name === name) {
//         //                 return categories[i];
//         //             }
//         //         }
//         //     }
//         //     else {
//         //         for (let i = startFrom; i < categories.length; i++) {
//         //             if (categories[i].name === name) {
//         //                 return categories[i];
//         //             }
//         //         }
//         //     }
//         // }
//         // else {
//         //     if (endWith !== undefined) {
//         //         for (let i = 0; i <= endWith; i++) {
//         //             if (categories[i].name === name) {
//         //                 return categories[i];
//         //             }
//         //         }
//         //     }
//         //     else {
//         //         for (let i = 0; i < categories.length; i++) {
//         //             if (categories[i].name === name) {
//         //                 return categories[i];
//         //             }
//         //         }
//         //     }
//         // }
//         let start = startFrom !== undefined ? startFrom : 0;
//         let end = endWith !== undefined ? endWith : categories.length - 1;
//
//                 for (let i = start; i <= end; i++) {
//                     if (categories[i].name === name) {
//                         return categories[i];
//                     }
//                 }
//         return null;
//         }
//
//
//
//     const c1 = findCategoryByName('ololo', categories);
//     console.log(c1); // null
//     const c2 = findCategoryByName('Computers', categories, 1);
//     console.log(c2); // { categoryId: 102, name: 'Computers', active: true }
//     const c3 = findCategoryByName('Mobiles', categories, 0, 1);
//     console.log(c3); // null
//     const c4 = findCategoryByName('Clothing', categories);
//     console.log(c4); // { categoryId: 104, name: 'Clothing', active: true }
//     const c5 = findCategoryByName('Clothing', categories, 2, 3);
//     console.log(c5); // { categoryId: 104, name: 'Clothing', active: true }
//     const c6 = findCategoryByName('Clothing', categories, undefined, 2);
//     console.log(c6); // null
//     const c7 = findCategoryByName('Clothing', categories, undefined, 3);
//     console.log(c7); // { categoryId: 104, name: 'Clothing', active: true }
// })();
//
// (() => {
//     const categories = [
//         { categoryId: 101, name: 'Electronics', active: true },
//         { categoryId: 102, name: 'Computers', active: true },
//         { categoryId: 103, name: 'Mobiles', active: false },
//         { categoryId: 104, name: 'Clothing', active: true }
//     ];
//
//     function findCategoryByName(name, categories, onlyActive) {
//             for (let i = 0; i < categories.length; i++) {
//                     if (categories[i].name === name && ( categories[i].active || !onlyActive)) {
//                         return categories[i];
// // 2 * 3 + 2 * 5 === 16
//                         // 2 * (3 + 5) === 16
//                 }
//
//             }
//
//         return null;
//     }
//
//     const c1 = findCategoryByName('ololo', categories);
//     console.log(c1); // null
//     const c2 = findCategoryByName('ololo', categories, true);
//     console.log(c2); // null
//     const c3 = findCategoryByName('Computers', categories);
//     console.log(c3); // { categoryId: 102, name: 'Computers', active: true }
//     const c4 = findCategoryByName('Computers', categories, true);
//     console.log(c4); // { categoryId: 102, name: 'Computers', active: true }
//     const c5 = findCategoryByName('Mobiles', categories);
//     console.log(c5); // { categoryId: 103, name: 'Mobiles', active: false }
//     const c6 = findCategoryByName('Mobiles', categories, true);
//     console.log(c6); // null
// })();
//
// // 4) реалізувати функцію, яка повертає масив тільки додатних чисел
//
// (() => {
//     function filterPositive(array) {
//             let positiveNumbersArray = [];
//             for (let i = 0; i < array.length; i++) {
//                 if (array[i] > 0) positiveNumbersArray.push(array[i])
//             }
//             return positiveNumbersArray
//     }
//
//     const arr1 = [2,5,8,33,-13,0,-8];
//     const result1 = filterPositive(arr1);
//     console.log(result1); // [2, 5, 8, 33]
//
//     const arr2 = [4,8,-2,0,6];
//     const result2 = filterPositive(arr2);
//     console.log(result2); // [4, 8, 6]
//
//     const arr3 = [-8,-3, 0, -1];
//     const result3 = filterPositive(arr3);
//     console.log(result3); // []
// })();
//
// // 5) реалізувати функцію, яка повертає масив тільки від'ємних чисел
//
// (() => {
//     function filterNegative(array) {
//             let negativeNumbersArray = [];
//             for (let i = 0; i < array.length; i++) {
//                 if ( array[i] < 0) negativeNumbersArray.push(array[i])
//             }
//             return negativeNumbersArray
//     }
//
//     const arr1 = [2,5,8,33,-13,0,-8];
//     const result1 = filterNegative(arr1);
//     console.log(result1); // [-13, -8]
//
//     const arr2 = [4,8,-2,0,6];
//     const result2 = filterNegative(arr2);
//     console.log(result2); // [-2]
//
//     const arr3 = [8,3, 0, 1];
//     const result3 = filterNegative(arr3);
//     console.log(result3); // []
// })();
//
// // // 6) реалізувати функцію, яка повертає масив тільки чисел, кратних 2
//
// (() => {
//     function filterEven(array) {
//             let arr = [];
//             for (let i = 0; i < array.length; i++) {
//                 if (array[i] % 2 === 0) {
//                     arr.push(array[i])
//                 }
//             }
//             return arr
//     }
//
//     const arr1 = [2,5,8,33,-13,0,-8];
//     const result1 = filterEven(arr1);
//     console.log(result1); // [2, 8, 0, -8]
//
//     const arr2 = [4,8,-2,0,6];
//     const result2 = filterEven(arr2);
//     console.log(result2); // [4,8,-2,0,6]
//
//     const arr3 = [9, 3, -7, 1];
//     const result3 = filterEven(arr3);
//     console.log(result3); // []
// })();
//
// // // 7) реалізувати функцію, яка повертає масив тільки тих чисел, для яких вказана функція вертає тру
//
// (() => {
//     function filter(array, callback) {
//             let result = [];
//             for (let i = 0; i < array.length; i++) {
//                 if (callback(array[i], i, array)) {
//                     result.push(array[i]);
//                 }
//             }
//             return result
//     }
//
//     const arr = [2,5,8,33,-13,0,-8, -3];
//     const result1 = filter(arr, (item, i) => item > 0 && i > 1);
//     console.log(result1); // [8, 33]
//     const result2 = filter(arr, (item, i, arr) => item < 0 && i > 0 && arr[i - 1] > item);
//     console.log(result2); // [-13, -8]
//     const result3 = filter(arr, (item, i) => item % 2 === 0 && i % 2 === 0);
//     console.log(result3); // [2, 8, -8]
// })();



// реалізувать функцію flat, яка повертає новий масив, у якому всі елементи, і масиви замінені на їх елементи
(() => {
    function flat(arr, d) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
               // debugger

            if (Array.isArray(arr[i])) {
                for (let j = 0; j < arr[i].length; j++) {
                    result.push(arr[i][j])
                }
        } else {
                result.push(arr[i])
            }
        }
         debugger
        for (let q = 0; q < result.length; q++) {
            if (Array.isArray(result[q])) {
                for (let y = 0; y < result[q].length; q++) {
                    result.push(result[q][y])
                }
            } else {
                result.push(result[q])
            }
        }


        return result
    }


    // const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
    // const result1 = flat(arr1);
    // console.log(result1); // [2,5,8,33,-13,0,-8, -3]

    const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
    const result2 = flat(arr2);
    console.log(result2); // [2,5,8,[33,-13],0,-8, [-3]]

    // const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
    // const result3 = flat(arr3, 1);
    // console.log(result3); // [2,5,8,[33,[-13]],0,-8, [-3]]






    // if (Array.isArray(arr[i])) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (Array.isArray(arr[i][j])) {
    //             for (let q = 0; q < arr[i][j].length; q++) {
    //                 if (Array.isArray(arr[i][j][q])) {
    //                     for (let y = 0; y < arr[i][j][q].length; y++) {
    //                         result.push(arr[i][j][q][y])
    //                     }
    //                 } else {
    //                     result.push(arr[i][j][q])
    //                 }
    //
    //             }
    //         } else {
    //             result.push(arr[i][j])
    //         }
    //     }
    // } else {
    //     result.push(arr[i])
    // }
})();


// прибрать копіпаст, пофіксить, щоб виводило як в коментарі
// (() => {
//     const categories = [
//         { categoryId: 101, name: 'Electronics', active: true },
//         { categoryId: 102, name: 'Computers', active: true },
//         { categoryId: 103, name: 'Mobiles', active: false },
//         { categoryId: 104, name: 'Clothing', active: true }
//     ];
//
//     function findCategoryByName(name, categories, startFrom) {
//         let startI = startFrom !== undefined ? startFrom : 0;
//         if (startI > 2) {
//             startI = 2
//         }
//         for (let i = startI; i < categories.length; i++) {
//             if (i === 1) continue
//             if (categories[i].name === name) {
//                 return categories[i];
//             }
//         }
//
//
//         return null;
//     }
//
//
//     // function findCategoryByName(name, categories, startFrom) {
//     //     debugger
//     //     const startI = startFrom !== undefined ? startFrom : 0;
//     //     for (let i = startI; i < 1; i++) {
//     //         if (categories[i].name === name) {
//     //             return categories[i];
//     //         }
//     //     }
//     //
//     //     for (let i = 2; i < categories.length; i++) {
//     //         if (categories[i].name === name) {
//     //             return categories[i];
//     //         }
//     //     }
//     //
//     //     return null;
//     // }
//
//
//     const c1 = findCategoryByName('ololo', categories);
//     console.log(c1); // null
//     const c2 = findCategoryByName('ololo', categories, 2);
//     console.log(c2); // null
//     const c3 = findCategoryByName('Computers', categories);
//     console.log(c3); // null
//     const c4 = findCategoryByName('Computers', categories, 1);
//     console.log(c4); // null
//     const c5 = findCategoryByName('Computers', categories, 2);
//     console.log(c5); // null
//     const c6 = findCategoryByName('Mobiles', categories, 3);
//     console.log(c6); // null
// })();
