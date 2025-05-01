// (() => {
//
//     function getMessage(categories, products) {
//         let message = '';
//         // debugger
//         for (let i = 0; i < products.length; i++) {
//             const name = products[i].name;
//             message += name + ' - ';
//            message += getProductCategoriesString(products[i], categories);
//             if (i === products.length - 1) {
//                 message += ';'
//             } else {
//                 message += '; '
//             }
//         }
//         return message
//     }
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
//     const message =  getMessage(categories, products);
//     console.log(message);
//     function getProductCategoriesString (product, categories) {
//         let strProduct = '';
//         for (let i = 0; i < product.categories.length; i++) {
//             for (let j = 0; j < categories.length; j++) {
//                 const id = categories[j].categoryId;
//
//                 if (product.categories[i] === id) {
//                     strProduct += categories[j].name + ', '
//                 }
//             }
//         }
//         strProduct = strProduct.slice(0, strProduct.length - 2);
//         return strProduct;
//     }
//     // const msg = getProductCategoriesString(products[2], categories); // "Clothing"
//     const msg = getProductCategoriesString({
//         id: 2,
//         name: 'Phone',
//         categories: [101, 103]
//     }, categories); // "Electronics, Mobiles"
//     console.log(msg);
//
//     console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
//     //
//     console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
// })();

//  згенерувати рядок, який містить назви категорій і їх товарів. має бути дві функції - одна повертає весь рядок, друга тільки список товарів однієї категорії через кому і використовується всередині першої (по аналогії з завданням з уроку):

(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

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

    function getCategoryProductsString(products, category) {
        let strProduct = '';
       // for (let i = 0; i < products[i].categories.length; i++) {
       //     for (let j = 0; j < category.length; j++) {
       //         const id = category[j].categoryId;
       //         if (id === products.categories[i]) {
       //             strProduct += products[i].name
       //         }
       //     }
       // }
       //  debugger
        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < products[i].categories.length; j++) {
                if (products[i].categories[j] === category.categoryId) {
                    strProduct += products[i].name + ', ';
                }
            }
        }
        strProduct = strProduct.slice(0, strProduct.length - 2);
        return strProduct;
    }
    function getMessage(products, categories) {
        let message = '';
        // debugger
        for (let i = 0; i < categories.length; i++) {
            const name = categories[i].name;
            message += name + ' - ';
           message += getCategoryProductsString(products, categories[i]);
            if (i === categories.length - 1) {
                message += ';'
            } else {
                message += '; '
            }
        }
        return message

    }


     const message = getMessage(products, categories);



     console.log(message); // Має вивести "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"
     console.log(message === "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"); // має вивести true
})();
//
// // написати функцію, яка об'єднує список рядків комою з пробілом:
//
(() => {
    function getAsString(arr) {
            let resultStr = '';
            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    resultStr += arr[i];
                } else {
                    resultStr += arr[i] + ', '
                }

            }
             return resultStr
    }

    const message1 = getAsString(['a', 'b']);
    console.log(message1); // Має вивести "a, b"
    console.log(message1 === "a, b"); // має вивести true

    const message2 = getAsString(['Laptop', 'Phone']);
    console.log(message2); // Має вивести "Laptop, Phone"
    console.log(message2 === "Laptop, Phone"); // має вивести true

    const message3 = getAsString(['Clothing']);
    console.log(message3); // Має вивести "Clothing"
    console.log(message3 === "Clothing"); // має вивести true

})();
//
// //  написати функцію, яка повертає список назв категорій для вказаного продукту
//
(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

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

    function getProductCategoriesNames(product, category) {
            let categoryArr = [];
            for (let i = 0; i < product.categories.length; i++) {
                for (let j = 0; j < category.length; j++) {
                    const id = category[j].categoryId;
                    if (id === product.categories[i]) {
                        categoryArr.push(category[j].name);
                    }
                }
            }
            return categoryArr
    }

    const names1 = getProductCategoriesNames(products[2], categories);
    console.log(names1); // Має вивести масив ['Clothing']

    const names2 = getProductCategoriesNames({
        id: 2,
        name: 'Phone',
        categories: [101, 103]
    }, categories);
    console.log(names2); // Має вивести масив ['Electronics', 'Mobiles'];
    //
    const names3 = getProductCategoriesNames({
        id: 5,
        name: 'Ololo',
        categories: [102, 103, 105]
    }, categories);
    console.log(names3); // Має вивести масив ['Computers', 'Mobiles'];

})();
//
// //  написати функцію, яка повертає список категорій для вказаного продукту
//
(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

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

    function getProductCategories(product, category) {
             let categoryList = [];
             for (let i = 0; i < product.categories.length; i++) {
                 for (let j = 0; j < category.length; j++) {
                     const id = category[j].categoryId;
                     if (id === product.categories[i]) {
                         categoryList.push(category[j])
                     }
                 }
             }
             return categoryList;
    }

    const categories1 = getProductCategories(products[2], categories);
    console.log(categories1); // Має вивести масив [{ categoryId: 104, name: 'Clothing', active: true }]

    const categories2 = getProductCategories({
        id: 2,
        name: 'Phone',
        categories: [101, 103]
    }, categories);
    console.log(categories2); // Має вивести масив [{ categoryId: 101, name: 'Electronics', active: true }, { categoryId: 103, name: 'Mobiles', active: false }];

    const categories3 = getProductCategories({
        id: 5,
        name: 'Ololo',
        categories: [102, 103, 105]
    }, categories);
    console.log(categories3); // Має вивести масив [{ categoryId: 102, name: 'Computers', active: true }, { categoryId: 103, name: 'Mobiles', active: false }];

})();
