// // 1) написати функцію, яка виводить алертом привітання по імені. наприклад "Hello John!"
//
// (() => {
//     function sayHello(strName) {
//         let str = `Hello ${strName}!`
//          alert(str)
//     }
//
//     sayHello('Mike'); // має вивести "Hello Mike!"
// })();
//
// // 2) написати функцію, яка повертає рядок - привітання по імені. наприклад "Hello John!"
//
// (() => {
//     function getHelloMessage(strName) {
//         return `Hello ${strName}!`;
//     }
//
//     const message = getHelloMessage('Mike');
//     console.log(message); // Має вивести "Hello Mike!"
//     console.log(message === "Hello Mike!"); // true
//     const message2 = getHelloMessage('John');
//     console.log(message2); // Має вивести "Hello John!"
//     console.log(message2 === "Hello John!"); // true
// })();
//
// // 3) написати функцію, яка повертає рядок - формальне або неформальне (hi або hello) привітання по імені. наприклад "Hello John!", "Hi Mike!"
//
// (() => {
//     function getHelloMessage(userName, isFormal) {
//         return !isFormal ? `Hi ${userName}!` : `Hello ${userName}!`;
//     }
//
//     const message = getHelloMessage('Mike', false);
//     console.log(message); // Має вивести "Hi Mike!"
//     console.log(message === "Hi Mike!"); // true
//
//     const message2 = getHelloMessage('John', true);
//     console.log(message2); // Має вивести "Hello John!"
//     console.log(message2 === "Hello John!"); // true
// })();
//
// // 4) написати функцію, яка виводить у консоль повідомлення про вік. наприклад "I am 25 years old"
//
// (() => {
//     function sayAge(age) {
//         let result = `I am ${age} years old`;
//         console.log(result);
//     }
//
//     sayAge(25);
// // Має вивести: I am 25 years old
// })();
//
//
// // 5) написати функцію, яка повертає рядок "My name is [name] and I am [age] years old"
//
// (() => {
//     function getPersonInfo(name, age) {
//         return `My name is ${name} and I am ${age} years old`
//     }
//
//     const info = getPersonInfo('Anna', 30);
//     console.log(info); // Має вивести "My name is Anna and I am 30 years old"
//     console.log(info === "My name is Anna and I am 30 years old"); // true
// })();
//
// // // 6) написати функцію, яка повертає рядок привітання по імені залежно від вказаної мови. наприклад "Hi John!", "привіт, Mike!".
//
// (() => {
//     function getHelloMessage(name, language) {
//         // ?
//         let result = ''
//         if (language === 'ua') {
//             result = `Привіт, ${name}!`
//         } else if (language === 'en') {
//             result = `Hi ${name}!`
//         }
//         return result
//     }
//
//     const message = getHelloMessage('Mike', 'ua');
//     console.log(message); // Має вивести "Привіт, Mike!"
//     console.log(message === "Привіт, Mike!"); // true
//
//     const message2 = getHelloMessage('John', 'en');
//     console.log(message2); // Має вивести "Hi John!"
//     console.log(message2 === "Hi John!"); // true
// })();


//згенерувати рядок, який містить назви товарів і їх категорій




// (() => {
//
//     function getMessage(categories, products) {
//     let message = '';
//         for (let i = 0; i < products.length; i++) {
//             const name = products[i].name;
//             message += name + ' - ';
//
//             for (let j = 0; j < products[i].categories.length; j++) {
//                 for (let q = 0; q < categories.length; q++) {
//                     const id = categories[q].categoryId;
//                     if (products[i].categories[j] === id) {
//                         message += categories[q].name + ', '
//                     }
//                 }
//             }
//             message = message.slice(0, message.length - 2);
//             if (i === products.length - 1) {
//                 message += ';'
//             } else {
//                 message += '; '
//             }
//         }
//         return message
//         // console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
//         //
//         // console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
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
//   const message =  getMessage(categories, products);
//
//
//      console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
//     //
//      console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
// })();


(() => {

    function getMessage(categories, products) {
        let message = '';
        debugger
        for (let i = 0; i < products.length; i++) {
            const name = products[i].name;
            message += name + ' - ';
            getProductCategoriesString(products[i], categories)
            message = message.slice(0, message.length - 2);
            if (i === products.length - 1) {
                message += ';'
            } else {
                message += '; '
            }
        }
        return message
    }

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
    const message =  getMessage(categories, products);
    function getProductCategoriesString (product, categories) {
        let strProduct = '';
        for (let i = 0; i < product.categories.length; i++) {
            for (let j = 0; j < categories.length; j++) {
                const id = categories[j].categoryId;

                if (product.categories[i] === id) {
                    strProduct += categories[j].name + ', '
                }
            }
        }
        strProduct = strProduct.slice(0, strProduct.length - 2);
        return strProduct;
    }
    // const msg = getProductCategoriesString(products[2], categories); // "Clothing"
     const msg = getProductCategoriesString({
     id: 2,
     name: 'Phone',
    categories: [101, 103]
 }, categories); // "Electronics, Mobiles"
    console.log(msg);

    // console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
    // //
    // console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
})();

// const msg = getProductCategoriesString({
//     id: 2,
//     name: 'Phone',
//     categories: [101, 103]
// }, categories); // "Electronics, Mobiles"

// const msg = getProductCategoriesString(products[2], categories); // "Clothing"
