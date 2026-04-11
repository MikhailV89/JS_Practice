//№1
const wrap = document.querySelector('.wrap')
// const button = document.querySelector('.activate-btn');
//

wrap.onclick = (e)=> {

    if (e.target.classList.contains('activate-btn')) {
        but(e)
    }

    if (e.target.classList.contains('Task2')) {
        butTask2(e)
    }
    if (e.target.classList.contains('change-email-btn')) {
        changeEmail(e)
    }

    if (e.target.className === 'make-admin-btn') {
         changeOnAdmin(e)
    }

    if (e.target.className === 'discount-btn') {
         discount(e)
     }
}

const but = (e) => {
   const prevEl = e.target.previousElementSibling
    const status = prevEl.lastElementChild

    status.textContent = 'active'
}

// //№2

const butTask2 = (e) => {

    const prevFatherEl = e.target.previousElementSibling
    const lastUserChild = prevFatherEl.lastElementChild
    const status = lastUserChild.lastElementChild


    status.textContent = 'active'
}


const changeEmail = (e)=> {
    const divInfo = e.target.previousElementSibling;
    const contacts = divInfo.lastElementChild;
    const lastUser = contacts.lastElementChild
    const emailText = lastUser.lastElementChild

     emailText.textContent = 'new@mail.com'
}


// const buttonAdmin = document.querySelector('.make-admin-btn');

const changeOnAdmin = (e) => {
    const footer = e.target.parentElement;
    const body = footer.previousElementSibling

    const right = body.lastElementChild
    const user = right.lastElementChild
    const admin = user.lastElementChild

     admin.textContent = 'admin'
}

// const button3 = document.querySelector('.discount-btn');

const discount = (e) => {
 const actions = e.target.parentElement;
 const mainInfo = actions.previousElementSibling
    const lastRow = mainInfo.lastElementChild

    const price = lastRow.lastElementChild
     price.textContent = '$800'
}


// задача 1 и 2 вызывал их на 1 клике.
// Пытался что б работали кнопки так, что б не надо было коментировать предыдущие таски
// с помощью гугла дошел до обертки на которую навесил обработчик
// таска 4 все ок
// таска 5 все ок

// на задачу ушло несколько часов


//4) дано розмітка, по натисканню на кнопку має видалитися вся лішка. використовувати делегування,
// тобто додаєть обробник кліка тільки для ul

const ul = document.querySelector('ul')

 ul.onclick = (e) => {
    removeItem(e)
}

const removeItem = (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.closest('li').remove()
    }
}
