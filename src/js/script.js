//1 написати регулярку, яка перевіряє, що рядок містить
// тільки цифри і не є порожнім.

    const regex = /^[0-9]+$/;

console.log(regex.test('12345'));   // true
console.log(regex.test('007'));     // true

console.log(regex.test('12a45'));   // false
console.log(regex.test('123 45'));  // false
console.log(regex.test(''));        // false

//2 перевіряє, що рядок складається рівно з 5 цифр.

    const regex1 = /^\d{5}$/;

console.log(regex1.test('12345'));   // true
console.log(regex1.test('00001'));   // true

console.log(regex1.test('1234'));    // false
console.log(regex1.test('123456'));  // false
console.log(regex1.test('12a45'));   // false

//3 перевіряє, що рядок містить тільки латинські літери

const regex2 = /^[a-zA-Z]+$/;

console.log(regex2.test('hello'));      // true
console.log(regex2.test('HelloWorld')); // true

console.log(regex2.test('hello123'));   // false
console.log(regex2.test('hello world'));// false
console.log(regex2.test('привіт'));     // false


//4 перевіряє, що рядок:
  //  - починається з великої латинської літери;
//- після неї тільки маленькі латинські літери.

    const regex3 = /^[A-Z][a-z]+$/;

console.log(regex3.test('Maria'));  // true
console.log(regex3.test('John'));   // true

console.log(regex3.test('maria'));  // false
console.log(regex3.test('MARIA'));  // false
console.log(regex3.test('Maria1')); // false

// 5 Формат коду "ABC-123":
// - 3 великі латинські літери
// - дефіс
// - 3 цифри

const regex4 = /^[A-Z]{3}-[0-9]{3}$/;

console.log(regex4.test('ABC-123')); // true
console.log(regex4.test('XYZ-007')); // true

console.log(regex4.test('abc-123')); // false
console.log(regex4.test('AB-123'));  // false
console.log(regex4.test('ABC123'));  // false
console.log(regex4.test('ABC-12A')); // false


// 6 Username повинен:
//     - починатися з латинської літери
// - містити тільки латинські літери, цифри та _
// - мати довжину від 4 до 10 символів

const regex5 = /^[a-z][a-z0-9_]{3,9}$/;

console.log(regex5.test('maria'));     // true
console.log(regex5.test('john_12'));   // true
console.log(regex5.test('a123'));      // true

console.log(regex5.test('12maria'));   // false
console.log(regex5.test('abc'));       // false
console.log(regex5.test('john-smith'));// false
console.log(regex5.test('verylongname')); // false


// 7 номер телефону:
//     - починається з +380
// - після цього 9 цифр

const regex6 = /^\+380[0-9]{9}$/;

console.log(regex6.test('+380501234567')); // true
console.log(regex6.test('+380671112233')); // true

console.log(regex6.test('380501234567'));  // false
console.log(regex6.test('+38050123456'));  // false
console.log(regex6.test('+38050abc4567')); // false

// 8 Час у форматі HH:MM (без перевірки реального діапазону годин)

const regex7 = /^[0-9]{2}:[0-9]{2}$/;

console.log(regex7.test('12:30')); // true
console.log(regex7.test('09:05')); // true

console.log(regex7.test('9:05'));  // false
console.log(regex7.test('09-05')); // false
console.log(regex7.test('09:5'));  // false

// 9 Пароль повинен:
//     - мати від 6 до 12 символів;
// - містити тільки латинські літери та цифри;
// - обов'язково містити хоча б одну цифру.

const regex8 = /^(?=.*[0-9])[A-Za-z0-9]{6,12}$/;

console.log(regex8.test('hello1'));    // true
console.log(regex8.test('abc123'));    // true
console.log(regex8.test('password9')); // true

console.log(regex8.test('hello'));     // false
console.log(regex8.test('12345'));     // false
console.log(regex8.test('hello_1'));   // false
console.log(regex8.test('verylongpassword1')); // false
console.log(regex8.test('#9hellohello'));    // true

// 10  Простий email (не правильний email за всіма RFC, а навчальний варіант).
// Рядок повинен мати формат:
//     name@domain.com
// - name - латинські літери, цифри, ".", "_"
// - @
// - domain - латинські літери
// - .
// - в кінці від 2 до 4 латинських літер

const regex9 = /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;

console.log(regex9.test('maria@gmail.com'));     // true
console.log(regex9.test('john_12@test.org'));    // true
console.log(regex9.test('user.name@mail.info')); // true

console.log(regex9.test('maria@gmail'));         // false
console.log(regex9.test('maria@.com'));          // false
console.log(regex9.test('@gmail.com'));          // false
console.log(regex9.test('maria gmail.com'));     // false

//------------------------------------------


// Що виведе кожен console.log?

//1
const regex10 = /^\d+$/;

console.log(regex10.test('123'));//true
console.log(regex10.test('123a'));//false
console.log(regex10.test('5'));//true
console.log(regex10.test('12 34'));
console.log(regex10.test(''));

//2
const regex11 = /^[a-z]+$/;

console.log(regex11.test('hello'));//true
console.log(regex11.test('Hello'));//false
console.log(regex11.test('abc123'));//false
console.log(regex11.test('world'));//true
console.log(regex11.test('hello world'));//false

//3
const regex12 = /^[A-Z][a-z]+$/;

console.log(regex12.test('Maria'));//true
console.log(regex12.test('maria'));//false
console.log(regex12.test('MARIA'));//false
console.log(regex12.test('John'));//true
console.log(regex12.test('A'));//false
console.log(regex12.test('John2'));//false
//
// //4
const regex13 = /^\d{3}$/;

console.log(regex13.test('123'));//true
console.log(regex13.test('12'));//false
console.log(regex13.test('1234'));//false
console.log(regex13.test('007'));//true
console.log(regex13.test('1a3'));//false


// //5
const regex14 = /^[A-Z]{2}\d{3}$/;

console.log(regex14.test('AB123'));//true
console.log(regex14.test('ABC123'));//false
console.log(regex14.test('ab123'));//false
console.log(regex14.test('XY007'));//true
console.log(regex14.test('X123'));//false
console.log(regex14.test('AB12A'));//false

// //6
const regex15 = /^[a-z0-9_]{4,8}$/;

console.log(regex15.test('john'));//false ------ ошибся ---true
console.log(regex15.test('john_12'));//true
console.log(regex15.test('abc'));//false
console.log(regex15.test('John'));//false
console.log(regex15.test('user1234'));//true
console.log(regex15.test('user-12'));//false

// //7
const regex16 = /^cat\d*$/;

console.log(regex16.test('cat'));//true
console.log(regex16.test('cat1'));//true
console.log(regex16.test('cat123'));//true
console.log(regex16.test('catABC'));//false
console.log(regex16.test('mycat'));//false
console.log(regex16.test('cat12a'));//false

// //8
const regex17 = /^\+?\d{5}$/;

console.log(regex17.test('12345'));//true
console.log(regex17.test('+12345'));//true
console.log(regex17.test('1234'));//false
console.log(regex17.test('123456'));//false
console.log(regex17.test('-12345'));//false
console.log(regex17.test('12+345'));//false

// //9
const regex18 = /^[A-Z]{2}-\d{2,4}$/;

console.log(regex18.test('AB-12'));//true
console.log(regex18.test('AB-123'));//true
console.log(regex18.test('AB-1234'));//true
console.log(regex18.test('AB-1'));//false
console.log(regex18.test('ABC-123'));//false
console.log(regex18.test('ab-123'));//false
console.log(regex18.test('AB123'));//false

// //10
const regex19 = /^[a-z]+\.[a-z]{2,3}$/;

console.log(regex19.test('test.com'));//true
console.log(regex19.test('hello.io'));//true
console.log(regex19.test('site.info'));//false
console.log(regex19.test('my-site.com'));//false
console.log(regex19.test('testcom'));//false
console.log(regex19.test('Test.com'));//false

// //11
const regex20 = /^(cat|dog)\d{2}$/;

console.log(regex20.test('cat12'));//true
console.log(regex20.test('dog99'));//true
console.log(regex20.test('bird12'));//false
console.log(regex20.test('cat1'));//false
console.log(regex20.test('Cat12'));//false
console.log(regex20.test('dog123'));//false

// //12
const regex21 = /^[A-Z][a-z]+_[0-9]{2,4}$/;

console.log(regex21.test('Maria_12'));//true
console.log(regex21.test('John_2025'));//true
console.log(regex21.test('john_12'));//false
console.log(regex21.test('John12'));//false
console.log(regex21.test('John_1'));//false
console.log(regex21.test('John_12345'));//false
console.log(regex21.test('J_123'));//false

// //13
const regex22 = /\d+/;

console.log(regex22.test('123'));//true
console.log(regex22.test('abc123'));//true
console.log(regex22.test('123abc'));//true
console.log(regex22.test('abc123def'));//true
console.log(regex22.test('abc'));//false

// //14
const regex23 = /^\d+/;

console.log(regex23.test('123'));//true
console.log(regex23.test('123abc'));//true
console.log(regex23.test('abc123'));//false
console.log(regex23.test('12 abc'));//true
console.log(regex23.test('abc'));//false

// //15
const regex24 = /\d+$/;

console.log(regex24.test('123'));//true
console.log(regex24.test('abc123'));//true
console.log(regex24.test('123abc'));//false
console.log(regex24.test('abc 45'));//true
console.log(regex24.test('45 abc'));//false

// //16
const regex25 = /cat/;

console.log(regex25.test('cat'));//true
console.log(regex25.test('my cat'));//true
console.log(regex25.test('category'));//true
console.log(regex25.test('Cat'));//false
console.log(regex25.test('dog'));//false

// //17
const regex26 = /^cat/;

console.log(regex26.test('cat'));//true
console.log(regex26.test('category'));//true
console.log(regex26.test('cat123'));//true
console.log(regex26.test('my cat'));//false
console.log(regex26.test('a cat'));//false

// //18
const regex27 = /cat$/;

console.log(regex27.test('cat'));//true
console.log(regex27.test('my cat'));//true
console.log(regex27.test('copycat'));//true
console.log(regex27.test('category'));//false
console.log(regex27.test('cat dog'));//false

// //19
const regex28 = /[A-Z]{2}\d{2}/;

console.log(regex28.test('AB12'));//true
console.log(regex28.test('xxAB12yy'));//true
console.log(regex28.test('AB123'));//true
console.log(regex28.test('1AB12'));//true
console.log(regex28.test('ab12'));//false
console.log(regex28.test('ABcd12'));//true----ошибся---false

// //20
const regex29 = /^[A-Z]{2}\d{2}/;

console.log(regex29.test('AB12'));//true
console.log(regex29.test('AB12hello'));//true
console.log(regex29.test('AB123'));//true
console.log(regex29.test('xxAB12'));//false
console.log(regex29.test('ABcd12'));//false

// //21
const regex30 = /[A-Z]{2}\d{2}$/;

console.log(regex30.test('AB12'));//true
console.log(regex30.test('helloAB12'));//true
console.log(regex30.test('1AB12'));//true
console.log(regex30.test('AB123'));//false
console.log(regex30.test('AB12hello'));//false

// //22
const regex31 = /hello|world/;

console.log(regex31.test('hello'));//true
console.log(regex31.test('world'));//true
console.log(regex31.test('hello everyone'));//true
console.log(regex31.test('myworld123'));//true
console.log(regex31.test('Hello'));//false
console.log(regex31.test('goodbye'));//false

// //23
const regex32 = /^hello|world$/;

console.log(regex32.test('hello'));//true
console.log(regex32.test('hello123'));//true
console.log(regex32.test('world'));//true
console.log(regex32.test('helloworld'));//true
console.log(regex32.test('my world'));//true
console.log(regex32.test('my world!'));//false
console.log(regex32.test('123hello'));//false
console.log(regex32.test('hellworld'));//true
console.log(regex32.test('helloorld'));//true

// //24
const regex33 = /^(hello|world)$/;

console.log(regex33.test('hello'));//true
console.log(regex33.test('world'));//true
console.log(regex33.test('hello123'));//false
console.log(regex33.test('myworld'));//false
console.log(regex33.test('hello world'));//false
console.log(regex33.test('helloworld'));//false
console.log(regex33.test('hellworld'));//false
console.log(regex33.test('helloorld'));//false

// пояснити, чим відрізняються 23 і 24
