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
