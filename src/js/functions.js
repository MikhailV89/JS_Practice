export function reduce(arr, callback, initialValue) {

    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr)

    }

    return result
}

export function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let res1 = callback(arr[i], i, arr)
        result.push(res1)

    }

    return result
}

export function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result
}

export function some(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) return true
    }
    return false
}

export function findLast(arr, predicate) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr)) return arr[i]
    }
}

export function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

export function reverse (arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j] = result[j]
    }
    return arr
}

export function every(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i, arr)) return false
    }

    return true
}
