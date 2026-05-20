// Зробить пагінацію, тобто показувать список не повністю, а по частинах.
// У списку показує по 5 елементів. внизу списка є номери сторінок і кнопки вперед/назад по краях,
//які перемикають сторінки теж


const items = [
    {
        id: 1,
        title: 'Mountains',
        description: 'Snowy mountains and blue sky.',
        image: 'https://picsum.photos/id/29/300/200'
    },
    {
        id: 2,
        title: 'Forest',
        description: 'Green forest in summer.',
        image: 'https://picsum.photos/id/28/300/200'
    },
    {
        id: 3,
        title: 'Ocean',
        description: 'Blue ocean and waves.',
        image: 'https://picsum.photos/id/10/300/200'
    },
    {
        id: 4,
        title: 'City',
        description: 'Modern city buildings.',
        image: 'https://picsum.photos/id/1060/300/200'
    },
    {
        id: 5,
        title: 'Desert',
        description: 'Hot desert with sand dunes.',
        image: 'https://picsum.photos/id/1002/300/200'
    },
    {
        id: 6,
        title: 'River',
        description: 'Calm river between trees.',
        image: 'https://picsum.photos/id/1015/300/200'
    },
    {
        id: 7,
        title: 'Bridge',
        description: 'Bridge over the water.',
        image: 'https://picsum.photos/id/1011/300/200'
    },
    {
        id: 8,
        title: 'Road',
        description: 'Long road through nature.',
        image: 'https://picsum.photos/id/1031/300/200'
    },
    {
        id: 9,
        title: 'Lake',
        description: 'Quiet lake near mountains.',
        image: 'https://picsum.photos/id/1016/300/200'
    },
    {
        id: 10,
        title: 'Beach',
        description: 'Sunny beach with clear water.',
        image: 'https://picsum.photos/id/1019/300/200'
    },
    {
        id: 11,
        title: 'Flowers',
        description: 'Colorful flowers in a field.',
        image: 'https://picsum.photos/id/102/300/200'
    },
    {
        id: 12,
        title: 'Dog',
        description: 'Cute dog outside.',
        image: 'https://picsum.photos/id/237/300/200'
    },
    {
        id: 13,
        title: 'House',
        description: 'Small house in the countryside.',
        image: 'https://picsum.photos/id/1040/300/200'
    },
    {
        id: 14,
        title: 'Cafe',
        description: 'Cozy cafe table.',
        image: 'https://picsum.photos/id/1060/300/200'
    },
    {
        id: 15,
        title: 'Books',
        description: 'Books on a shelf.',
        image: 'https://picsum.photos/id/24/300/200'
    },
    {
        id: 16,
        title: 'Laptop',
        description: 'Laptop on a desk.',
        image: 'https://picsum.photos/id/0/300/200'
    },
    {
        id: 17,
        title: 'Camera',
        description: 'Old camera on a table.',
        image: 'https://picsum.photos/id/250/300/200'
    },
    {
        id: 18,
        title: 'Bike',
        description: 'Bicycle near a wall.',
        image: 'https://picsum.photos/id/146/300/200'
    },
    {
        id: 19,
        title: 'Train',
        description: 'Train station view.',
        image: 'https://picsum.photos/id/1033/300/200'
    },
    {
        id: 20,
        title: 'Food',
        description: 'Fresh food on a plate.',
        image: 'https://picsum.photos/id/292/300/200'
    },
    {
        id: 21,
        title: 'Garden',
        description: 'Beautiful green garden.',
        image: 'https://picsum.photos/id/111/300/200'
    },
    {
        id: 22,
        title: 'Sky',
        description: 'Bright sky with clouds.',
        image: 'https://picsum.photos/id/1035/300/200'
    },
    {
        id: 23,
        title: 'Stairs',
        description: 'Old stairs in a building.',
        image: 'https://picsum.photos/id/1076/300/200'
    },
    {
        id: 24,
        title: 'Window',
        description: 'Window with sunlight.',
        image: 'https://picsum.photos/id/106/300/200'
    },
    {
        id: 25,
        title: 'Car',
        description: 'Car on the road.',
        image: 'https://picsum.photos/id/1071/300/200'
    },
    {
        id: 26,
        title: 'Night',
        description: 'Night lights in the city.',
        image: 'https://picsum.photos/id/1012/300/200'
    },
    {
        id: 27,
        title: 'Waterfall',
        description: 'Waterfall in the forest.',
        image: 'https://picsum.photos/id/15/300/200'
    }
];


const div = document.querySelector('.photo')
const btn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const pageNumbers = document.querySelector('.page_numbers')


let index = 0
const sliderCount = 5
const numberPages = Math.ceil(items.length / sliderCount)

for (let i = 1; i <= numberPages; i++) {
    const btn = document.createElement('button')
    btn.textContent = `${i}`
    btn.classList.add('num')

    if (i === 1) {
        btn.classList.add('active')
    }
    pageNumbers.append(btn)
}

pageNumbers.onclick = (e) => {
    if (e.target.classList.contains('num')) {
        const allBtn = document.querySelectorAll('.num')
        for (let i = 0; i < allBtn.length; i++) {
            allBtn[i].classList.remove('active')
            if (e.target === allBtn[i]) {
                index = i * sliderCount
            }
        }
        e.target.classList.add('active')
        textRender()
    }
}


function textRender() {

    div.textContent = ''

    for (let i = index; i < index + sliderCount && i < items.length; i++) {
        const item = items[i]

        const card = document.createElement('div')

        const image = document.createElement('img')
        image.src = item.image

        const title = document.createElement('h2')
        title.textContent = `${item.id}. ${item.title}`

        const description = document.createElement('p')
        description.textContent = item.description


        card.append(image, title, description)

        div.append(card)
    }
}


textRender()

btn.onclick = (e) => {

    sliderNext(index)
}

prevBtn.onclick = (e) => {
    sliderPrev(index)
}

function activeOrNotActive() {
    const allBtn = document.querySelectorAll('.num')
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].classList.remove('active')
        if (i === index / sliderCount) {
            allBtn[i].classList.add('active')
        }
    }
}

function sliderNext(currentIndex) {

    currentIndex += sliderCount

    if (currentIndex >= items.length) {
        return
    }

    index = currentIndex
    activeOrNotActive()

    textRender()
}

//
function sliderPrev(currentIndex) {
    // debugger
    currentIndex -= sliderCount

    if (currentIndex < 0) {
        return
    }
    index = currentIndex
    activeOrNotActive()
    textRender()

}


// <div className="form_wrap">
//     <form>
//         <label htmlFor="username">User Name</label>
//         <input type="text" id="username" name="username"/>
//         <label htmlFor="user-email">Email</label>
//         <input type="email" id="user-email" name="user-email"/>
//         <label htmlFor="chooseRole"></label>
//         <select id="chooseRole" name="chooseRole">
//             <option>Admin</option>
//             <option>Manager</option>
//             <option>User</option>
//         </select>
//         <label htmlFor="isActive">Active</label>
//         <input type="checkbox" id="isActive"/>
//
//     </form>
// </div>

const roles = ['admin', 'manager', 'user']
const wrap = document.querySelector('.form_wrap')

const form = document.createElement('form')

const labelForName = document.createElement('label')
labelForName.htmlFor = 'username'
labelForName.textContent = 'User name'

const inputForName = document.createElement('input')
inputForName.type = 'text'
inputForName.id = 'username'

const labelForEmail = document.createElement('label')
labelForEmail.htmlFor = 'user-email'
labelForEmail.textContent = 'User email'

const inputForEmail = document.createElement('input')
inputForEmail.type = 'email'
inputForEmail.id = 'user-email'

const labelForSelect = document.createElement('label')
labelForSelect.htmlFor = 'chooseRole'
labelForSelect.textContent = 'Choose Role'

const select = document.createElement('select')
select.id = 'chooseRole'

for (let i = 0; i < roles.length; i++) {
    const option = document.createElement('option')
    option.textContent = roles[i]
    select.append(option)
}

const labelActive = document.createElement('label')
labelActive.htmlFor = 'isActive'
labelActive.textContent = 'Active'

const inputForActive = document.createElement('input')
inputForActive.type = 'checkbox'
inputForActive.id = 'isActive'

 form.append(labelForName, inputForName, labelForEmail, inputForEmail, labelForSelect, select, labelActive, inputForActive)
 wrap.append(form)
