//згенерувати рядок, який містить назви товарів і їх категорій
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

    let message = '';

    // твій код

    for (let i = 0; i < products.length; i++) {
        const name = products[i].name;
        message += name + ' - ';

        for (let j = 0; j < products[i].categories.length; j++) {
            for (let q = 0; q < categories.length; q++) {
                const id = categories[q].categoryId;
                if (products[i].categories[j] === id) {
                    message += categories[q].name + ', '
                }
            }
        }
        message = message.slice(0, message.length - 2);
        if (i === products.length - 1) {
            message += ';'
        } else {
            message += '; '
        }
    }
    console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"
    console.log(message === "Laptop - Electronics, Computers; Phone - Electronics, Mobiles; Shirt - Clothing;"); // має вивести true
})();

////
  // 1) згенерувати рядок, який містить назви тільки активних категорій і їх товарів
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

    let message = '';

    // твій код

    for (let i = 0; i < categories.length; i++) {
        const id = categories[i].categoryId;
        if (categories[i].active) {
            message += categories[i].name + ' - ';
            for (let j = 0; j < products.length; j++) {
                for (let q = 0; q < products[j].categories.length; q ++) {
                    if (products[j].categories[q] === id) {
                        message += products[j].name + ', ';
                    }
                }
            }
            message = message.slice(0, message.length - 2);
            message += '; '


            // if (i === categories.length - 1) {
            //     message += ';'
            // } else {
            //     message += '; '
            // }
        }

    }
    message = message.slice(0, message.length - 1);
     console.log(message); // Має вивести "Electronics - Laptop, Phone; Computers - Laptop; Clothing - Shirt;"
     console.log(message === "Electronics - Laptop, Phone; Computers - Laptop; Clothing - Shirt;"); // має вивести true
})();


//  2) згенерувати рядок, який містить назви товарів і їх тільки активних категорій

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

    let message = '';

    // твій код
    for (let i = 0; i < products.length; i++) {
        message += products[i].name + ' - ';
        for (let j = 0; j < products[i].categories.length; j++) {
            for (let q = 0; q < categories.length; q++) {
                const id = categories[q].categoryId;
                if (products[i].categories[j] === id && categories[q].active) {
                    message += categories[q].name + ', ';
                }
            }
        }
        message = message.slice(0, message.length - 2);
        if (i === products.length - 1) {
            message += ';'
        } else {
            message += '; '
        }
    }
    console.log(message); // Має вивести "Laptop - Electronics, Computers; Phone - Electronics; Shirt - Clothing;"
    console.log(message === "Laptop - Electronics, Computers; Phone - Electronics; Shirt - Clothing;"); // має вивести true
})();

//

 (() => {
//     // замінити іф на тернарний оператор і прибрати копіпаст (зараз `Shop is ` повторюється)
     const isOpen = false;

    const message = 'Shop is '+ (isOpen ? 'open' : 'closed');
     console.log(message);

//     // замінити тернарний оператор на іф
//   const isActive = true;
//   if (isActive) {
//       alert('Active')
//   } else {
//       console.log('Sleeping');
//   }
 })();

 const isActive = false;
// isActive ? alert('Active') : alert('Sleeping');

// let res = ''
// if (isActive) {
//    res = 'Active'
// } else {
//    res = 'Sleeping'
// }
// alert(res)

// const res = getStatus('Active');
// alert(res)


function getStatus (isActive, str1, str2) {
    return isActive ? str1 : str2
}

const res = getStatus(isActive, 'Active', 'Sleeping');
alert(res)

