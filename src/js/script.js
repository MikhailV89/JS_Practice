'use strict';

//1
const currentHour = new Date();
const time = currentHour.getHours();
if (time >= 6 && time < 12) {
    console.log("Доброго ранку!");
} else if (time >= 12 && time <= 18) {
    console.log("Доброго дня!");
} else {
    console.log("Доброго вечора!");
}

//2

const numFromUser = +prompt('Please write some number');

if (isNaN(numFromUser)) {
    console.log('Має бути число');
} else if (numFromUser > 0) {
    console.log(`${numFromUser} це позитивне число`);
} else if (numFromUser < 0) {
    console.log(`${numFromUser} це негативне число`);
}  else if (numFromUser === 0) {
    console.log(`${numFromUser} це 0`);
}

//3

function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

const array = [1, 2, 3, 4];
sumArray(array);
