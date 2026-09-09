1 написати регулярку, яка перевіряє, що рядок містить тільки цифри і не є порожнім.

const regex = /.../;

console.log(regex.test('12345'));   // true
console.log(regex.test('007'));     // true

console.log(regex.test('12a45'));   // false
console.log(regex.test('123 45'));  // false
console.log(regex.test(''));        // false

2 перевіряє, що рядок складається рівно з 5 цифр.

const regex = /.../;

console.log(regex.test('12345'));   // true
console.log(regex.test('00001'));   // true

console.log(regex.test('1234'));    // false
console.log(regex.test('123456'));  // false
console.log(regex.test('12a45'));   // false

3 перевіряє, що рядок містить тільки латинські літери

const regex = /.../;

console.log(regex.test('hello'));      // true
console.log(regex.test('HelloWorld')); // true

console.log(regex.test('hello123'));   // false
console.log(regex.test('hello world'));// false
console.log(regex.test('привіт'));     // false

4 перевіряє, що рядок:
- починається з великої латинської літери;
- після неї тільки маленькі латинські літери.

const regex = /.../;

console.log(regex.test('Maria'));  // true
console.log(regex.test('John'));   // true

console.log(regex.test('maria'));  // false
console.log(regex.test('MARIA'));  // false
console.log(regex.test('Maria1')); // false

5 Формат коду "ABC-123":
- 3 великі латинські літери
- дефіс
- 3 цифри

const regex = /.../;

console.log(regex.test('ABC-123')); // true
console.log(regex.test('XYZ-007')); // true

console.log(regex.test('abc-123')); // false
console.log(regex.test('AB-123'));  // false
console.log(regex.test('ABC123'));  // false
console.log(regex.test('ABC-12A')); // false

6 Username повинен:
- починатися з латинської літери
- містити тільки латинські літери, цифри та _
- мати довжину від 4 до 10 символів

const regex = /.../;

console.log(regex.test('maria'));     // true
console.log(regex.test('john_12'));   // true
console.log(regex.test('a123'));      // true

console.log(regex.test('12maria'));   // false
console.log(regex.test('abc'));       // false
console.log(regex.test('john-smith'));// false
console.log(regex.test('verylongname')); // false

7 номер телефону:
- починається з +380
- після цього 9 цифр

const regex = /.../;

console.log(regex.test('+380501234567')); // true
console.log(regex.test('+380671112233')); // true

console.log(regex.test('380501234567'));  // false
console.log(regex.test('+38050123456'));  // false
console.log(regex.test('+38050abc4567')); // false

8 Час у форматі HH:MM (без перевірки реального діапазону годин)

const regex = /.../;

console.log(regex.test('12:30')); // true
console.log(regex.test('09:05')); // true

console.log(regex.test('9:05'));  // false
console.log(regex.test('09-05')); // false
console.log(regex.test('09:5'));  // false

9 Пароль повинен:
- мати від 6 до 12 символів;
- містити тільки латинські літери та цифри;
- обов'язково містити хоча б одну цифру.

const regex = /.../;

console.log(regex.test('hello1'));    // true
console.log(regex.test('abc123'));    // true
console.log(regex.test('password9')); // true

console.log(regex.test('hello'));     // false
console.log(regex.test('12345'));     // false
console.log(regex.test('hello_1'));   // false
console.log(regex.test('verylongpassword1')); // false

10  Простий email (не правильний email за всіма RFC, а навчальний варіант). Рядок повинен мати формат:
name@domain.com
- name - латинські літери, цифри, ".", "_"
- @
- domain - латинські літери
- .
- в кінці від 2 до 4 латинських літер

const regex = /.../;

console.log(regex.test('maria@gmail.com'));     // true
console.log(regex.test('john_12@test.org'));    // true
console.log(regex.test('user.name@mail.info')); // true

console.log(regex.test('maria@gmail'));         // false
console.log(regex.test('maria@.com'));          // false
console.log(regex.test('@gmail.com'));          // false
console.log(regex.test('maria gmail.com'));     // false
