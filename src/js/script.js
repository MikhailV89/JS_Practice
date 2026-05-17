// 1) оновить слайдер, щоб показувало по 2 картинки з підписами. при натисканні на стрілки показує
// наступні/попередні 2 картинки
// 2) оновить слайдер, щоб показувало по 3 картинки з підписами. при натисканні на стрілки показує
// наступні/попередні 3 картинки
// 3) зробить слайдер динамічним, щоб кількість картинок вказувалася в змінній, яка використовується далі в коді
const places = [
    {
        id: 1,
        title: '0 Mountains',
        image: 'https://picsum.photos/id/29/600/300',
        desc: 'High mountains with snow.'
    },
    {
        id: 2,
        title: '1 Forest',
        image: 'https://picsum.photos/id/28/600/300',
        desc: 'Green forest in summer.'
    },
    {
        id: 3,
        title: '2 Ocean',
        image: 'https://picsum.photos/id/10/600/300',
        desc: 'Blue ocean and clear sky.'
    },
    {
        id: 4,
        title: '3 City',
        image: 'https://picsum.photos/id/1060/600/300',
        desc: 'Modern city with tall buildings.'
    },
    {
        id: 5,
        title: '4 TRRR',
        image: 'https://picsum.photos/id/1060/600/300',
        desc: 'TRRRR.'
    }
];


const div = document.querySelector('.photo')
const btn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')


let index = 0
const sliderCount = 4
debugger
    function textRender () {

        div.textContent = ''

        for (let i = index; i < index + sliderCount; i++) {
            let currentIndex = i

            if (i >= places.length) {
            currentIndex = currentIndex - places.length
            }

            const item = places[currentIndex]

            const card = document.createElement('div')

            const image = document.createElement('img')
            image.src = item.image

            const title = document.createElement('h2')
            title.textContent = item.title

            const description = document.createElement('p')
            description.textContent = item.desc


            card.append(image, title, description)

            div.append(card)
        }
    }



textRender()

btn.onclick = (e) =>{

    sliderNext(index)
}

prevBtn.onclick = (e) => {
    sliderPrev(index)
}

function sliderNext (currentIndex) {

       currentIndex += sliderCount

    if (currentIndex >= places.length) {
        currentIndex = currentIndex - places.length
    }

    index = currentIndex

    textRender()
}
//
function sliderPrev (currentIndex) {
debugger
    currentIndex -= sliderCount// -3

    if (currentIndex < 0) {
        currentIndex= currentIndex + places.length

    }
    index = currentIndex
    textRender()

}


// 1)написати функцію яка повертає масив масивів по одному елементу
//     [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2], [4], [1], [6], [5], [9], [7], [0], [3]]

 const arr1 =  [2, 4, 1, 6, 5, 9, 7, 0, 3]

function divArr (arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];
        innerArr.push(arr[i])
        result.push(innerArr)
    }
    return result
}

console.log(divArr(arr1))

// 2) повертає масив масивів по 2 елементи
//     [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2, 4], [1, 6], [5, 9], [7, 0], [3]]
//
//     ['sg', '7tr', 23] -> [['sg', '7tr'], [23]]

function divArr2 (arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];

        while (innerArr.length < 2) {
            innerArr.push(arr[i])
            i++
        }
        result.push(innerArr)
    }
    return result
}

console.log(divArr2(arr1))

// 3) повертає масив масивів по 3 елементи
//     [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2, 4, 1], [6, 5, 9], [7, 0, 3]]
//
//     ['sg', '7tr', 23] -> [['sg', '7tr', 23]]

// 4) повертає масив масивів по n елементів
// n=2, [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2, 4], [1, 6], [5, 9], [7, 0], [3]]
//
// n=1, [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2], [4], [1], [6], [5], [9], [7], [0], [3]]

function divArr4 (arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i+= n) {
        result.push(arr.slice(i, i + n))
    }
    return result
}

console.log(divArr4(arr1, 3))


// дз (схоже на попереднє):
// дано масив елементів. написати функції, які повертають масив масивів з цих елементів, але останній підмасив має
// дозаповнюватися першими елементами
//
// 1) повертає масив масивів по одному елементу
//     [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2], [4], [1], [6], [5], [9], [7], [0], [3]]
//
//     ['sg', '7tr', 23] -> [['sg'], ['7tr'], [23]]

function divArr7 (arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];
        innerArr.push(arr[i])
        result.push(innerArr)

    }
    result.push([arr[0]])
    return result
}

console.log(divArr7(arr1))
//
// 2) повертає масив масивів по 2 елементи
//     [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2, 4], [1, 6], [5, 9], [7, 0], [3, 2]]
//
//     ['sg', '7tr', 23] -> [['sg', '7tr'], [23, 'sg']]

function divArr8 (arr) {
    let result = []

    for (let i = 0; i < arr.length;) {
        let innerArr = [];
        // innerArr.push(arr[i])
        // result.push(innerArr)
        while (innerArr.length < 2) {
            if (i === arr.length){
                innerArr.push(arr[0])
                break
            }
            innerArr.push(arr[i])
            i++
        }
        result.push(innerArr)
    }
    return result
}

console.log(divArr8(arr1))

// 3) повертає масив масивів по 3 елементи
//     [2, 4, 1, 6, 5, 9, 7] -> [[2, 4, 1], [6, 5, 9], [7, 2, 4]]
//
//     ['sg', '7tr', 23, true] -> [['sg', '7tr', 23], [true, 'sg', '7tr']]

// function divArr9 (arr) {
//     let result = []
//
//     for (let i = 0; i < arr.length;) {
//         let innerArr = [];
//
//         while (innerArr.length < 3) {
//             if (i === arr.length){
//                 i = 0
//             }
//             innerArr.push(arr[i])
//             i++
//         }
//         result.push(innerArr)
//     }
//     return result
// }
//
// const arr2 = [2, 4, 1, 6, 5, 9, 7]
// console.log(divArr9(arr2))


//
// 4) повертає масив масивів по 5 елементів
//     [2, 4, 1, 6, 5, 9] -> [[2, 4, 1, 6, 5], [9, 2, 4, 1, 6]]
//
//     ['sg', '7tr', 23, true, {}, 2] -> [['sg', '7tr', 23, true, {}], [2, 'sg', '7tr', 23, true]]
//
// 5) повертає масив масивів по n елементів
// n=2, [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2, 4], [1, 6], [5, 9], [7, 0], [3, 2]]
//
// n=1, [2, 4, 1, 6, 5, 9, 7, 0, 3] -> [[2], [4], [1], [6], [5], [9], [7], [0], [3]]
//
// n=3, ['sg', '7tr', 23, 1] -> [['sg', '7tr', 23], [1, 'sg', '7tr']]
//
// n=5, [2, 4, 1, 6, 5, 9] -> [[2, 4, 1, 6, 5], [9, 2, 4, 1, 6]]

function divArr11 (arr, n) {

    let result = []
    let count = 0
    for (let i = count; count < arr.length;) {
        let innerArr = []

        while (innerArr.length < n) {
            if (i >= arr.length) {
                i = 0
            } else {
                count++
            }
            innerArr.push(arr[i])
            i++

        }
        result.push(innerArr)
    }
    return result
}

const arr3 = [2, 4, 1, 6, 5, 9, 7, 0, 3, 10, 20]
console.log(divArr11(arr3, 3))

