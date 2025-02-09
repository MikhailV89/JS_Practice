//1
const str = "JavaScript";
let reverseStr = '';

for (let i = str.length - 1; i >= 0; i-- ) {
    reverseStr += str[i];
}

console.log(reverseStr);

//2

const a = 5.91833;
let operation = (a * 100) + 0.5;
let result = 0;

while (result <= operation - 0.5) {
    result ++;
 }
 console.log(result / 100);

//3
const num = 3;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
           isPrime = false;
           break
        }
    }
}

if (isPrime) {
    console.log('Num is prime');
} else {
    console.log('Num is not prime');
}
