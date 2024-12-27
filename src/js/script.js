const arr = [3, 6, 2, -54, 4637, -2334, 0, 22,];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);
