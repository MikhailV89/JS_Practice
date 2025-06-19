// // реалізувать функцію flat, де кількість рівнів для прибирання задається. ідея в тому, щоб узагальнить попередні рішення
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
//


// реалізувать функцію reduce
(() => {
    function reduce(arr, callback, initialValue) {

        let result = initialValue;
        for (let i = 0; i < arr.length; i++) {
           result = callback(result, arr[i], i, arr)

        }

        return result
    }

    const arr2 = [2,5,8,33,-13,0,-8, -3];
    const result2 = reduce(arr2, (prev, item) => {
        return prev + item
    }, 0);
    console.log(result2); // 24
    /*
    prev = 0; item = 2
    Вертає 2
     prev = 2; item = 5
    Вертає 7
    prev = 7; item = 8
    Вертає 15
        prev = 15; item = 33
    Вертає 48
      prev = 48; item = -13
    Вертає 35
       prev = 35; item = 0
    Вертає 35
        prev = 35; item = -8
    Вертає 27
         prev = 27; item = -3
    Вертає 24



     */

    /*
    reduce : prev = []; item = 2
    Вертає [2]
    prev = [2]; item = 5
    Вертає [2, 5]
        prev = [2, 5]; item = [8,33,-13,0]
        Вертає [2, 5, 8,33,-13,0]
          prev = [2, 5, 8,33,-13,0]; item = -8
             Вертає [2, 5, 8,33,-13,0, -8]
              prev = [2, 5, 8,33,-13,0, -8]; item = -3
               Вертає [2, 5, 8,33,-13,0, -8, -3]
               reduce = [2, 5, 8,33,-13,0, -8, -3]
     */

    const arr1 = [2,5,[8,33,-13,0],-8, [-3]];
    const result1 = reduce(arr1, (prev, item) => {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                prev.push(item[i]);
            }
        }
        else {
            prev.push(item);
        }

        return prev
    }, []);
    console.log(result1); // [2,5,8,33,-13,0,-8, -3]
//
    // --------------------

    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];
//
    const products = [
        {
            id: 1,
            name: 'Laptop',
            categories: [101, 102]
        },
        {
            id: 2,
            name: 'Phone',
            categories: [101, 103]
        },
        {
            id: 3,
            name: 'Shirt',
            categories: [104]
        }
    ];

    const categoriesIdMap = reduce(categories, (prev, item) => {
        prev[item.categoryId] = item.name;
        return prev;
    }, {});
    console.log(categoriesIdMap); // {101: 'Electronics', 102: 'Computers', 103: 'Mobiles', 104: 'Clothing'}

    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
            const categoryId = products[i].categories[j];
            products[i].categories[j] = categoriesIdMap[categoryId];
        }
    }

    console.log(products);
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

 })();


