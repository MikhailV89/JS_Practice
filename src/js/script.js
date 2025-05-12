/*
  згенерувати рядок, який містить назви товарів і їх категорій.
  використати функції з попередніх дз - getProductCategoriesNames (вертає список назв категорій для одного продукту),
  getAsString (вертає список рядків одним рядком, об'єднуючи комами):
*/

// (() => {
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
//
//      function getProductCategoriesNames(product, category) {
//             let categoryArr = [];
//             for (let i = 0; i < product.categories.length; i++) {
//                 for (let j = 0; j < category.length; j++) {
//                     const id = category[j].categoryId;
//                     if (id === product.categories[i]) {
//                         categoryArr.push(category[j].name);
//                     }
//                 }
//             }
//             return categoryArr
//     }
//
//      function getAsString(arr) {
//             let resultStr = '';
//             for (let i = 0; i < arr.length; i++) {
//                 if (i === arr.length - 1) {
//                     resultStr += arr[i];
//                 } else {
//                     resultStr += arr[i] + ', '
//                 }
//
//             }
//              return resultStr
//     }
//
//      function getMessage(products, categories) {
//          let productList = '';
//          for (let i = 0; i < products.length; i++) {
//             const productItem = products[i];
//             const names = getProductCategoriesNames(productItem, categories);
//             const str = getAsString(names);
//
//             productList += `${productItem.name} - ${str}; `
//          }
//          productList = productList.slice(0, productList.length - 1)
//          return productList
//     }
//
//
//
//      const message = getMessage(products, categories);
//
//
//     // tests:
//
//     const names1 = getProductCategoriesNames(products[2], categories);
//     console.log(names1); // Має вивести масив ['Clothing']
//
//     const names2 = getProductCategoriesNames({
//         id: 2,
//         name: 'Phone',
//         categories: [101, 103]
//     }, categories);
//     console.log(names2); // Має вивести масив ['Electronics', 'Mobiles'];
//
//     const names3 = getProductCategoriesNames({
//         id: 5,
//         name: 'Ololo',
//         categories: [102, 103, 105]
//     }, categories);
//     console.log(names3); // Має вивести масив ['Computers', 'Mobiles'];
//
//     const message1 = getAsString(['a', 'b', 'c']);
//     console.log(message1); // Має вивести "a, b, c"
//     console.log(message1 === "a, b, c"); // має вивести true
//
//     const message2 = getAsString(['Laptop', 'Phone']);
//     console.log(message2); // Має вивести "Laptop, Phone"
//     console.log(message2 === "Laptop, Phone"); // має вивести true
//
//     const message3 = getAsString(['Clothing']);
//     console.log(message3); // Має вивести "Clothing"
//     console.log(message3 === "Clothing"); // має вивести true
//
//     console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
//     console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
// })();
//
// /*
//   згенерувати рядок, який містить назви категорій і їх товарів.
//   написати функцію getCategoryProductsNames, яка вертає список назв продуктів для однієї категорії (по аналогії з getProductCategoriesNames)
//   використати функції з попередніх дз - getAsString (вертає список рядків одним рядком, об'єднуючи комами):
// */
//
// (() => {
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
//
//
//     function getCategoryProductsNames(product, categories) {
//         let arrProduct = [];
//
//         for (let i = 0; i < product.length; i++) {
//             for (let j = 0; j < product[i].categories.length; j++) {
//                 if (product[i].categories[j] === categories.categoryId) {
//                      arrProduct.push(product[i].name);
//                 }
//             }
//         }
//
//         return arrProduct;
//     }
//     function getAsString(arr) {
//         let resultStr = '';
//         for (let i = 0; i < arr.length; i++) {
//             if (i === arr.length - 1) {
//                 resultStr += arr[i];
//             } else {
//                 resultStr += arr[i] + ', '
//             }
//
//         }
//         return resultStr
//     }
//
//     function getMessage(categories, products) {
//         let categoryList = '';
//         for (let i = 0; i < categories.length; i++) {
//             const categoryName = categories[i];
//             const names = getCategoryProductsNames(products, categoryName);
//             const str = getAsString(names)
//             categoryList += `${categoryName.name} - ${str}; `
//         }
//         categoryList = categoryList.slice(0, categoryList.length - 1)
//         return categoryList
//     }
//
//     const message = getMessage(categories, products);
//
//
//     // tests:
//
//     const names1 = getCategoryProductsNames(products, categories[2]);
//     console.log(names1); // Має вивести масив ['Phone']
//
//     const names2 = getCategoryProductsNames(products,{
//         categoryId: 101,
//         name: 'Топ Електроніка',
//         active: true
//     }, products);
//     console.log(names2); // Має вивести масив ['Laptop', 'Phone'];
//
//
//     const message1 = getAsString(['a', 'b', 'c']);
//     console.log(message1); // Має вивести "a, b, c"
//     console.log(message1 === "a, b, c"); // має вивести true
//
//     const message2 = getAsString(['Laptop', 'Phone']);
//     console.log(message2); // Має вивести "Laptop, Phone"
//     console.log(message2 === "Laptop, Phone"); // має вивести true
//
//     const message3 = getAsString(['Clothing']);
//     console.log(message3); // Має вивести "Clothing"
//     console.log(message3 === "Clothing"); // має вивести true
//
//     console.log(message); // Має вивести "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"
//     console.log(message === "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"); // має вивести true
// })();

// function getAsString(arr, symbol) {
//          let resultStr = '';
//          for (let i = 0; i < arr.length; i++) {
//             if (i === arr.length - 1) {
//                 resultStr += arr[i];
//             } else {
//                 resultStr += arr[i] + symbol;
//             }
//
//         }
//         return resultStr
//     }
//
//     const arr = ['d', 'ccccc', 'adsfsddg']
//     const result = getAsString(arr, '))) ')
// console.log(result)
// console.log(result === 'd/ ccccc/ adsfsddg');


// function includes(arr, findElement) {
// let result = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (findElement === arr[i]) {
//             result = true
//         }
//     }
//     return result
// }

//  function includes(arr, findElement) {
//     for (let i = 0; i < arr.length; i++) {
//         if (findElement === arr[i]) {
//             return true
//         }
//     }
//     return false
// }
//
// let a = [1, 2, 3, 1, 2, 3];
// const result = includes(a, 5);
// console.log(result)
//
// function indexOf(arr, findElement) {
//  for (let i = 0; i < arr.length; i++) {
//      if (findElement === arr[i]) {
//          return i
//      }
//  }
//  return -1
// }
//
// const findElement = indexOf(a, 2);
// console.log(findElement);
//
// function lastInexOf(arr, findElement) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (findElement === arr[i]) {
//             return i
//         }
//     }
//     return -1
// }
//
// const result1 = lastInexOf(a, 2);
// console.log(result1);

//

(() => {
    // function indexOf(arr, findElement, fromWhatElement) {
    //     if (fromWhatElement) {
    //         for (let i = fromWhatElement; i < arr.length; i++) {
    //             if (findElement === arr[i]) {
    //                 return i
    //             }
    //         }
    //     }
    //     for (let i = 0; i < arr.length; i++) {
    //         if (findElement === arr[i]) {
    //             return i
    //         }
    //     }
    //     return -1
    // }
    //
    //
    const array = [1, 23, 4, 1, 23, 4, 1, 23, 4];
    // const result = indexOf(array, 4, 3);// 5
    // const result2 = indexOf(array, 4, 6);// 8
    // const result3 = indexOf(array, 4, 0);// 2
    // const result4 = indexOf(array, 4);// 2
    // console.log(result);
    // console.log(result2);
    // console.log(result3);
    // console.log(result4);

    function lastInexOf(arr, findElement, fromWhatElement) {
        // let result;

            // if (fromWhatElement === undefined ) {
            //      result = arr.length - 1;
            // } else {
            //      result = fromWhatElement;
            // }
        let result = fromWhatElement === undefined ? arr.length - 1 :  fromWhatElement;
            for (let i = result; i >= 0; i--) {
                if (findElement === arr[i]) {
                    return i
                }
            }

    return -1
}

    const result5 = lastInexOf(array, 4, 3);
    const result6 = lastInexOf(array, 4, 6);
    const result7 = lastInexOf(array, 4, 0);
    const result8 = lastInexOf(array, 4, 9);
    const result9 = lastInexOf(array, 4);
    console.log(result5);// 2
    console.log(result6);// 5
    console.log(result7);// -1
    console.log(result8);// 8
    console.log(result9);// 8

})();



