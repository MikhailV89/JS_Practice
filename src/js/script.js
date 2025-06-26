// реалізувать функцію concat
// (() => {
//     function concat(arr, ...newElements) {
//            let result = [];
//            for (let i = 0; i < arr.length; i++) {
//                result.push(arr[i])
//            }
//            for (let j = 0; j < newElements.length; j++) {
//              if (Array.isArray(newElements[j])) {
//                  for (let k = 0; k < newElements[j].length; k++) {
//                      result.push(newElements[j][k])
//                  }
//              } else {
//                  result.push(newElements[j])
//              }
//            }
//
//            return result
//     }
//
//
//     const arr1 = [2,5,8,33,-13,0,-8, -3];
//     const result1 = concat(arr1, [1, 2]);
//     console.log(result1); // [2,5,8,33,-13,0,-8, -3, 1,2]
//
//     const arr2 = [2,5,8,33,-13,0,-8, -3];
//     const result2 = concat(arr2, 1, 2, 3);
//     console.log(result2); // [2,5,8,33,-13,0,-8, -3, 1,2,3]
//
//     const arr3 = [2,5,8,33,-13,0,-8, -3];
//     const result3 = concat(arr3, [1, 2], 3, [4, 5]);
//     console.log(result3); // [2,5,8,33,-13,0,-8, -3, 1,2,3,4,5]
// })();
//
// // реалізувать функцію map
// (() => {
//     function map(arr, callback) {
//         let result = [];
//         for (let i = 0; i < arr.length; i++) {
//            let res1 = callback(arr[i])
//             result.push(res1)
//
//         }
//
//         return result
//     }
//
//     const arr1 = [2,5,8,33,-13,0,-8, -3];
//     const result1 = map(arr1, (item) => {
//         return item * 2;
//     });
//     console.log(result1); // [4,10,16,66,-26,0,-16, -6]
//
// //     // --------------------
//
//     const categories = [
//         { categoryId: 101, name: 'Electronics', active: true },
//         { categoryId: 102, name: 'Computers', active: true },
//         { categoryId: 103, name: 'Mobiles', active: false },
//         { categoryId: 104, name: 'Clothing', active: true }
//     ];
//
//     const products = [
//         {
//             id: 1,
//             name: 'Laptop',
//             categories: [101, 102]
//         },
//         {
//             id: 2,
//             name: 'Phone',
//             categories: [101, 103]
//         },
//         {
//             id: 3,
//             name: 'Shirt',
//             categories: [104]
//         }
//     ];
//
//     for (let i = 0; i < products.length; i++) {
//         products[i].categories = map(products[i].categories, id => {
//             for (let j = 0; j < categories.length; j++) {
//                 if (id === categories[j].categoryId) {
//                     return categories[j];
//                 }
//             }
//         });
//     }
//
//     console.log(products);
    /*
    [
      {
          "id": 1,
          "name": "Laptop",
          "categories": [
              "Electronics",
              "Computers"
          ]
      },
      {
          "id": 2,
          "name": "Phone",
          "categories": [
              "Electronics",
              "Mobiles"
          ]
      },
      {
          "id": 3,
          "name": "Shirt",
          "categories": [
              "Clothing"
          ]
      }
    ]
    */
 // })();

/*

4) порахувать суму від 1 до n рекурсивно


5) порахувать добуток від 1 до n рекурсивно

6) задачка з *. зробить flat рекурсивно
 */

// function sum (n) {
//     debugger
//     if (n === 1) return 1
//
//     return n + sum(n - 1)
// }
//
// console.log(sum(5))
// (1 + 2 + 3 + 4) + 5
// (1 + 2 + 3) + 4
// (1 + 2 + 3 ... + n - 1) + n

// function rest(n) {
//     if (n === 1) return 1
//
//     return n * rest(n - 1)
// }
//
// console.log(rest(3))
// // 3 * 2 * 1
//
//
// (() => {
//     function flat3(arr, depth = 1) {
//
//         let result = arr;
//         for (let a = 0; a < depth; a++) {
//             let result2 = []
//             for (let i = 0; i < result.length; i++) {
//                 if (Array.isArray(result[i])) {
//                     for (let j = 0; j < result[i].length; j++) {
//                         result2.push(result[i][j])
//                     }
//                 } else {
//                     result2.push(result[i]);
//                 }
//             }
//             result = result2
//         }
//
//         return result
//     }
//
//     const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
//     const result1 = flat3(arr1);
//     console.log(result1); // [2,5,8,33,-13,0,-8, -3]
//
//     const arr2 = [2,5,[8,[33,-13],0],-8, [[-3]]];
//     const result2 = flat3(arr2, 1);
//     console.log(result2); // [2,5,8,[33,-13],0,-8, [-3]]
//
//     const arr3 = [2,5,[8,[33,[-13]],0],-8, [[-3]]];
//     const result3 = flat3(arr3, 3);
//     console.log(result3); // [2,5,8,33,-13,0,-8, -3]
// })();

function minElement(arr) {
    let element = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (element > arr[i]) {
            element = arr[i]
        }
    }
    return element
    // let min = arr[0]
    //
    // if (min > arr[1]) {
    //     min = arr[1]
    // }
    // return min
}

const arr1 = [1, 2, 54, -9, 7, 0]
const result = minElement(arr1);
console.log(result)// -9
