
const arr = [5, 8, -1, -6, 11];
let result = true

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        result = false;
    }
}

console.log(`${result}`);
//---------------------------------------------------------
const arr2 = [5, 8, -1, -6, 11];
let positive = 0;
let negative = 0;

for (let i = 0; i < arr2.length; i++) {
    if (arr[i] > 0) {
        positive += 1;
    } else {
        negative += 1;
    }
}

const result2 = positive > negative ? 'Додатних більше ніж від\'ємних' : 'Від\'ємних більше ніж додатних';
console.log(result2);

//---------------------------------------------------------

const num1 = prompt('write first num');
const num2 = prompt('write second num');
const num3 = prompt('write third num');

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1.trim() === '' || num2.trim() === '' || num3.trim() === '' ) {
    alert('Error! Incorrect value');
} else {
   const firstSide = +num1;
    const secondSide = +num2;
    const thirdSide = +num3;
    if (firstSide > 0 && secondSide > 0 && thirdSide > 0 && firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide) {
        console.log('Трикутник може існувати');
    } else {
        console.log('Трикутник не може існувати');
    }
}
//---------------------------------------------------------

const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    const num = +numbers[i];
    if (!isNaN(num)) {
        sum += num
    }
}

alert('Sum is ' + sum)

//1 Оголосили numbers який приймає массив
//2 Оголосили змінну sum і присвоЇти їй значення 0
//3 Робимо цикл for
//4 У циклі оголошуємо змінну і зі значенням 0
//5 Перевіряємо що і менше за довжину маасиву
//6 Перша итерация sum = 0 + 5
//7 друга итерация sum = 5 + 8
//8 Третя итерация sum = 13 + (-1)
//9 Четверта итерация sum = 12 + ('-6'). З цього моменту буде не коректно рахувати.Конкатенація із за знака + та строки
//10 Подальші ітераціЇ будуть виконувати конкатенацію елементів масиву
//---------------------------------------------------------

const numbers2 = [5, 8, 1, 6, 11];
let min = numbers2[0];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] < min) {
        min = numbers2[i];
    }
}

alert('Min number is ' + min);

//1 Оголосили numbers який приймає массив
//2 Оголосили змінну min і присвоЇти їй значення 0
//3 Робимо цикл for
//4 У циклі оголошуємо змінну і зі значенням 0
//5 Перевіряємо що і менше за довжину маасиву
//6 У кожній ітерації перевіряється, чи є numbers[i] меншим за min. Якщо так, змінна min оновлюється:
// Помилка у тому, що змінна  min = 0, тому єлементи масиву порівнюються з 0.
// Фінальний результат після всіх ітерацій буде 0
