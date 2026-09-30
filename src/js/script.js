
// дз: Переписати код в ООП стилі, зберігши поведінку програми

// 1) банківський рахунок.
//     Після рефакторингу повинна бути можливість одночасно створити кілька
//     незалежних рахунків

// let owner = 'John';
// let balance = 1000;
//
// function deposit(amount) {
//     balance += amount;
// }
//
// function withdraw(amount) {
//     if (amount > balance) {
//         console.log('Not enough money');
//         return;
//     }
//
//     balance -= amount;
// }
//
// function printBalance() {
//     console.log(`${owner}: $${balance}`);
// }
//
// deposit(500);
// withdraw(200);
// printBalance();
//
// owner = 'Kate';
// balance = 2000;
//
// deposit(300);
// withdraw(500);
// // printBalance();


// Функция конструктор
function User (owner, balance) {
    this.owner = owner;
    this.balance = balance
}

User.prototype.deposit = function (amount) {
    this.balance += amount;
}

User.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        console.log('Not enough money');
        return;
    }

    this.balance -= amount;
}

User.prototype.printBalance = function () {
    console.log(`${this.owner}: $${this.balance}`);
}

const user1 = new User('John', 1000);
const user2 = new User('Kate', 2000);
user1.deposit(500)
user1.withdraw(200)
user1.printBalance()

user2.deposit(300)
user2.withdraw(500)
user2.printBalance()

console.log(user1)


// 2) Товари інтернет-магазину
//
const productsData = [
    {
        title: 'Laptop',
        price: 1200,
        discount: 10,
        quantity: 3
    },
    {
        title: 'Phone',
        price: 800,
        discount: 0,
        quantity: 0
    }
];
//
// function getFinalPrice(product) {
//     return product.price - product.price * product.discount / 100;
// }
//
// function isAvailable(product) {
//     return product.quantity > 0;
// }
//
// function sell(product, quantity) {
//     if (quantity > product.quantity) {
//         console.log('Not enough products');
//         return;
//     }
//
//     product.quantity -= quantity;
// }
//
// function printProduct(product) {
//     console.log(
//         `${product.title}: $${getFinalPrice(product)}, available: ${isAvailable(product)}`
//     );
// }
//
// printProduct(products[0]);
// sell(products[0], 2);
// printProduct(products[0]);
//
// printProduct(products[1]);

// const products = []
//
// function Product (title, price, discount, quantity) {
//     this.title = title;
//     this.price = price;
//     this.discount = discount;
//     this.quantity = quantity;
// }
//
// Product.prototype.getFinalPrice = function () {
//     return this.price - this.price * this.discount / 100;
// }
//
// Product.prototype.isAvailable = function () {
//     return this.quantity > 0;
// }
//
// Product.prototype.sell = function (quantity){
//     if (quantity > this.quantity) {
//         console.log('Not enough products');
//         return;
//     }
//     this.quantity -= quantity;
// }
//
// Product.prototype.printProduct = function (){
//     console.log(
//         `${this.title}: $${this.getFinalPrice()}, available: ${this.isAvailable()}`
//     );
// }
//
// for (let i = 0; i < productsData.length; i++) {
//     products.push(new Product(productsData[i].title, productsData[i].price, productsData[i].discount, productsData[i].quantity))
// }
//
// products[0].printProduct()
// products[0].sell(2)
// products[0].printProduct()
//
// products[1].printProduct()


// 3) Студенти та оцінки
// кожен студент має створюватися за допомогою ключового слова new
//
// const student1 = {
//     name: 'Anna',
//     grades: [10, 8, 9]
// };
//
// const student2 = {
//     name: 'Max',
//     grades: [6, 7, 5]
// };
//
// function addGrade(student, grade) {
//     student.grades.push(grade);
// }
//
// function getAverage(student) {
//     const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
//
//     return sum / student.grades.length;
// }
//
// function hasPassed(student) {
//     return getAverage(student) >= 7;
// }
//
// function printStudent(student) {
//     console.log(
//         `${student.name}: ${getAverage(student)}, passed: ${hasPassed(student)}`
//     );
// }
//
// addGrade(student1, 7);
// printStudent(student1);
//
// addGrade(student2, 10);
// printStudent(student2);

function Student (name, grades) {
    this.name = name;
    this.grades = grades
}

Student.prototype.addGrade = function (grade) {
    this.grades.push(grade);
}

Student.prototype.getAverage = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);

    return sum / this.grades.length;

}

Student.prototype.hasPassed = function () {
    return this.getAverage() >= 7;
}

Student.prototype.printStudent = function () {
    console.log(
        `${this.name}: ${this.getAverage()}, passed: ${this.hasPassed()}`
    );
}

const student1 = new  Student('Anna', [10, 8, 9]);
const student2 = new  Student('Max', [6, 7, 5]);

student1.addGrade(7)
student1.printStudent()

student2.addGrade(10)
student2.printStudent()

// 4) Корзина інтернет-магазину

// const cart = [];
//
const product1 = {
    id: 'fivh',
    title: 'Laptop',
    price: 1200,
    discount: 10,
    quantity: 3
};

const product2 = {
    id: '3jf7',
    title: 'Phone',
    price: 800,
    discount: 0,
    quantity: 0
}

class Product {
    #price
    constructor(id, title, price, discount, quantity) {
        this.id = id
        this.title = title
        this.#price = price
        this.discount = discount
        this.quantity = quantity
    }

   get finalPrice() {
        return this.price * (1 - this.discount / 100)
    }

    get price (){
        return this.#price
    }

    set price(price){
       if (price > 0) {
           this.#price = price
       }
    }
}

const myProduct1 = new Product(product1.id, product1.title, product1.price, product1.discount, product1.quantity)
const myProduct2 = new Product(product2.id, product2.title, product2.price, product2.discount, product2.quantity)

myProduct1.price = -432
console.log(myProduct1)
//
// function addToCart(product) {
//     const item = cart.find(item => item.product.id === product.id);
//
//     if (item) {
//         item.quantity++;
//     } else {
//         cart.push({
//             product,
//             quantity: 1
//         });
//     }
// }

// function removeFromCart(productId) {
//     const index = cart.findIndex(item => item.product.id === productId);
//
//     if (index !== -1) {
//         cart.splice(index, 1);
//     }
// }
//
// function changeQuantity(productId, quantity) {
//     const item = cart.find(item => item.product.id === productId);
//
//     if (item) {
//         item.quantity = quantity;
//     }
// }
//
// function getTotal() {
//     return cart.reduce(
//         (total, item) => total + item.product.price * item.quantity,
//         0
//     );
// }
//
// function clearCart() {
//     cart.length = 0;
// }

class Cart {
    constructor() {
        this.cart = []
    }
    add(product) {
        const item = this.cart.find(item => item.product.id === product.id);

        if (item) {
            item.quantity++;
        } else {
            this.cart.push({
                product,
                quantity: 1
            });
        }
    }

    remove(productId) {
    const index = this.cart.findIndex(item => item.product.id === productId);

    if (index !== -1) {
        this.cart.splice(index, 1);
    }
  }

    changeQuantity(productId, quantity) {
    const item = this.cart.find(item => item.product.id === productId);

    if (item) {
        item.quantity = quantity;
    }
  }

    getTotal() {
    return this.cart.reduce(
        (total, item) => total + item.product.finalPrice * item.quantity,
        0
    );
  }

     clear() {
         this.cart.length = 0;
     }
}

// Код використання після рефакторингу повинен виглядати так:

const cart = new Cart();

cart.add(myProduct1);
cart.add(myProduct2);
cart.add(myProduct1);

console.log(cart.getTotal());//3200

cart.remove(myProduct2.id);
console.log(cart.getTotal());//2400
cart.clear();
console.log(cart.getTotal());//0
