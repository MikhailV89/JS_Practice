//замінити масиви з id категорій на масиви з відповідними об'єктами категорій
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

    // твій код

    for (let i = 0; i < products.length; i++) {
       for (let j = 0; j < products[i].categories.length; j++) {
          const id = products[i].categories[j];// 101
          for (let q = 0; q < categories.length; q++) {
             if ( categories[q].categoryId === id) { //true
                 const category = categories[q];// { categoryId: 101, name: 'Electronics', active: true },
                 products[i].categories[j] = categories[q]; // { categoryId: 101, name: 'Electronics', active: true },
             }
          }
       }
    }

    console.log(products)
})();

//згенерувати рядок, який містить назви категорій і їх товарів
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

    for (let i = 0; i < categories.length; i++) {
        const id = categories[i].categoryId;
        message += categories[i].name + ' - ';
        for (let j = 0; j < products.length; j++) {
            for (let q = 0; q < products[j].categories.length; q++) {
                if (products[j].categories[q] === id) {
                    message += products[j].name + ', ';
                }
            }
        }
        message = message.slice(0, message.length - 2);
        if (i === categories.length - 1) {
            message += ';'
        } else {
            message += '; '
        }// проверить что это последняя категория

    }
    // message = message.slice(0, message.length - 1);
     console.log(message); // Має вивести "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"
     console.log(message === "Electronics - Laptop, Phone; Computers - Laptop; Mobiles - Phone; Clothing - Shirt;"); // має вивести true
})();

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

    // твій код // Надо дома доделать было

    for (let i = 0; i < products.length; i++) {
        const name = products[i].name;
        if (!message.includes(name)) {
            message += name + ' - ';
        }
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


//зробити третю категорію активною
(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

    // твій код
    // categories[2].active = true;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].categoryId === 103) categories[i].active = true;
    }
    console.log(categories);
    /*
      має вивести
      [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: true },
        { categoryId: 104, name: 'Clothing', active: true }
      ];
    */
})();


//змінити активність кожної категорії на протилежну
(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

    // твій код

    for (let i = 0; i < categories.length; i++) {
        categories[i].active = !categories[i].active;
    }

    console.log(categories);
    /*
      має вивести
      [
        { categoryId: 101, name: 'Electronics', active: false },
        { categoryId: 102, name: 'Computers', active: false },
        { categoryId: 103, name: 'Mobiles', active: true },
        { categoryId: 104, name: 'Clothing', active: false }
      ];
    */
})();

//додати продукти до категорій згідно з даними в об'єкті updates
(() => {
    const categories = [
        { categoryId: 101, name: 'Electronics', active: true },
        { categoryId: 102, name: 'Computers', active: true },
        { categoryId: 103, name: 'Mobiles', active: false },
        { categoryId: 104, name: 'Clothing', active: true }
    ];

    const updates = [
        {
            id: 104,
            products: [3]
        },
        {
            id: 102,
            products: [1]
        },
        {
            id: 101,
            products: [1, 2]
        },
        {
            id: 103,
            products: [2]
        }
    ]

// твій код
    for (let i = 0; i < updates.length; i++) {
        for (let j = 0; j <categories.length; j++) {
            if (categories[j].categoryId === updates[i].id) {
                categories[j].products = updates[i].products;
            }
        }
    }

    console.log(categories);
    /*
      має вивести
      [
        { categoryId: 101, name: 'Electronics', active: true, products: [1, 2] },
        { categoryId: 102, name: 'Cool Computers', active: true, products: [1] },
        { categoryId: 103, name: 'Mobiles', active: false, products: [2] },
        { categoryId: 104, name: 'Cool Clothing', active: true, products: [3] }
      ];
    */
})();
