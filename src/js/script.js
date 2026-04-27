
//1) дано список елементів. на сторінці показує один з них і кнопки навігації, які перемикають
//поточний елемент. кнопки працюють зациклено - тобто після останнього має показувати перший,
 //  а перед першим має показувати останній.

const places = [
    {
        id: 1,
        title: 'Mountains',
        image: 'https://picsum.photos/id/29/600/300',
        desc: 'High mountains with snow.'
    },
    {
        id: 2,
        title: 'Forest',
        image: 'https://picsum.photos/id/28/600/300',
        desc: 'Green forest in summer.'
    },
    {
        id: 3,
        title: 'Ocean',
        image: 'https://picsum.photos/id/10/600/300',
        desc: 'Blue ocean and clear sky.'
    },
    {
        id: 4,
        title: 'City',
        image: 'https://picsum.photos/id/1060/600/300',
        desc: 'Modern city with tall buildings.'
    }
];


const div = document.querySelector('.photo')
const img = document.createElement('img')
const btn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

const pointWrap = document.createElement('div')
pointWrap.classList.add('points')

pointWrap.onclick = (e) => {
debugger
    if (e.target.className === 'point') {
        const allPoints = document.querySelectorAll('.point')

        for (let i = 0; i < allPoints.length; i++) {
            allPoints[i].classList.remove('active')
         if (e.target === allPoints[i]) {
             index = i
         }
        }
         e.target.classList.add('active')
        textRender()
    }
}

for (let i = 0; i < places.length; i++) {
    const point = document.createElement('span')
    point.classList.add('point')

    pointWrap.append(point)
}


let index = 0

const title = document.createElement('h2')
const description = document.createElement('p')

function textRender ()  {
    const item = places[index];


    img.src = item.image
    title.textContent = item.title
    description.textContent = item.desc
}



div.append(img, title, description, pointWrap)

const firstSpan = document.querySelectorAll('.point')
firstSpan[0].classList.add('active')


textRender()

btn.onclick = (e) =>{

   sliderNext(index)
}

prevBtn.onclick = (e) => {
sliderPrev(index)
}

function sliderNext (currentIndex) {

    currentIndex++
    if (currentIndex > places.length - 1) {
        currentIndex = 0
    }
    index = currentIndex
  img.src =  places[currentIndex].image

    textRender()

    const allPoints = document.querySelectorAll('.point')

    for (let i = 0; i < allPoints.length; i++) {
        allPoints[i].classList.remove('active')
        if (i === index) {
            allPoints[i].classList.add('active')
        }
    }

    // e.target.classList.add('active')
}

function sliderPrev (currentIndex) {

    if (currentIndex === 0) {
        currentIndex = places.length
    }
    currentIndex--

    index = currentIndex
    img.src =  places[currentIndex].image

    textRender()

    const allPoints = document.querySelectorAll('.point')

    for (let i = 0; i < allPoints.length; i++) {
        allPoints[i].classList.remove('active')
        if (i === index) {
            allPoints[i].classList.add('active')
        }
    }
}

//2) дано список товарів. вивести їх на сторінку разом з кнопками категорій. по натисканню на кнопку-категорію виводяться товари тільки цієї категорії. по натисканню на All виводить всі товари.

    const products = [
    {
        id: 1,
        title: 'Laptop',
        category: 'Tech',
        image: 'https://picsum.photos/id/0/300/200'
    },
    {
        id: 2,
        title: 'Phone',
        category: 'Tech',
        image: 'https://picsum.photos/id/160/300/200'
    },
    {
        id: 3,
        title: 'Tablet',
        category: 'Tech',
        image: 'https://picsum.photos/id/180/300/200'
    },
    {
        id: 4,
        title: 'Headphones',
        category: 'Tech',
        image: 'https://picsum.photos/id/1080/300/200'
    },
    {
        id: 5,
        title: 'Monitor',
        category: 'Tech',
        image: 'https://picsum.photos/id/48/300/200'
    },

    {
        id: 6,
        title: 'Book',
        category: 'Books',
        image: 'https://picsum.photos/id/24/300/200'
    },
    {
        id: 7,
        title: 'Novel',
        category: 'Books',
        image: 'https://picsum.photos/id/20/300/200'
    },
    {
        id: 8,
        title: 'Dictionary',
        category: 'Books',
        image: 'https://picsum.photos/id/169/300/200'
    },
    {
        id: 9,
        title: 'Notebook',
        category: 'Books',
        image: 'https://picsum.photos/id/367/300/200'
    },
    {
        id: 10,
        title: 'Magazine',
        category: 'Books',
        image: 'https://picsum.photos/id/365/300/200'
    },

    {
        id: 11,
        title: 'Coffee Mug',
        category: 'Home',
        image: 'https://picsum.photos/id/30/300/200'
    },
    {
        id: 12,
        title: 'Chair',
        category: 'Home',
        image: 'https://picsum.photos/id/29/300/200'
    },
    {
        id: 13,
        title: 'Lamp',
        category: 'Home',
        image: 'https://picsum.photos/id/28/300/200'
    },
    {
        id: 14,
        title: 'Table',
        category: 'Home',
        image: 'https://picsum.photos/id/27/300/200'
    },
    {
        id: 15,
        title: 'Sofa',
        category: 'Home',
        image: 'https://picsum.photos/id/26/300/200'
    }
];

const button = document.querySelector('.buttons')
const imgWrap = document.getElementById('images')

const wrapper = document.querySelector('.wrap')
const buttonWrap = document.createElement('div')
buttonWrap.onclick = (e) => {      // поменял с button на buttonWrap

    if (e.target.tagName === 'BUTTON') {
         const data = e.target.dataset.category

        const allBtn = document.querySelectorAll('.btn')
        for (let i = 0; i < allBtn.length; i++) {
            allBtn[i].classList.remove('active')
        }
    e.target.classList.add('active')

        imgWrap.textContent = ''
        if (data === 'All') {
            listImg(products)
        } else {
            const filtered = products.filter(item => item.category === data)
            listImg(filtered)
        }
    }
}


buttonWrap.classList.add('buttons')

let categoryName = ['All'];

for (let i = 0; i < products.length; i++) {
    if (!categoryName.includes(products[i].category)) {
        categoryName.push(products[i].category)
    }
}

for (let j = 0; j < categoryName.length; j++) {

    const buttons = document.createElement('button');
    buttons.classList.add('btn')
       buttons.textContent = categoryName[j]
       buttons.dataset.category = categoryName[j]
    buttonWrap.append(buttons)
}
// wrapper.append(buttonWrap) - картинки рендерелись над кнопками , а не под

wrapper.prepend(buttonWrap)


    function listImg(productsList) {
        for (let i = 0; i < productsList.length; i++) {
            const div = document.createElement('div')
            div.classList.add('card')
            const desc = document.createElement('p');

            desc.textContent = `${productsList[i].title}`

            const img = document.createElement('img')
            img.src = `${productsList[i].image}`

            div.append(img, desc)
            imgWrap.append(div)
        }
    }

