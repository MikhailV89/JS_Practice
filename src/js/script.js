// const button = document.querySelector('.activate-btn');
//
// button.onclick = (e)=> {
//     if (e.target.className === 'activate-btn') {
//         but(e)
//     }
//
// }

// const but = (e) => {
//     const father = document.body.firstElementChild
//     const lastEl = father.lastElementChild
//     const prevEl = lastEl.previousElementSibling
//     const status = prevEl.lastElementChild
//
//    if ( status.textContent === 'inactive') {
//        status.textContent = 'active'
//    } else {
//        status.textContent = 'inactive'
//    }
// }

// const but = () => {
//     const father = document.body.firstElementChild
//     const lastEl = father.children[1]
//     const lastChild = lastEl.lastElementChild
//     const status = lastChild.lastElementChild
//
//    status.textContent = 'active'
//
//
// }


// const button1 = document.querySelector('.change-email-btn');
//
// button1.onclick = (e) =>{
//     if (e.target.className === 'change-email-btn') {
//         changeEmail(e)
//     }
// }

// const changeEmail = ()=> {
//     const father = document.body.firstElementChild;
//     const lastEl = father.lastElementChild// кнопка
//     const prvEl = lastEl.previousElementSibling//div info
//
//     const user = prvEl.lastElementChild//div user
//     const email = user.lastElementChild
//     const emailText = email.lastElementChild
//
//     emailText.textContent = 'new@mail.com'
// }
// const changeEmail = () => {
//     const father = document.body.firstElementChild;
//     const lastEl = father.lastElementChild
//     const prvEl = lastEl.previousElementSibling
//
//     const user = prvEl.lastElementChild
//     const email = user.lastElementChild
//     const emailText = email.lastElementChild
//
//     emailText.textContent = 'new@mail.com'
// }

// const changeEmail = () => {
//     const father = document.body.firstElementChild
//     const lastEl = father.lastElementChild
//     const prvEl = lastEl.previousElementSibling
//
//     const user = prvEl.lastElementChild
//     const email = user.lastElementChild
//     const emailText = email.lastElementChild
//
//     emailText.textContent = 'new@mail.com'
// }


// const buttonAdmin = document.querySelector('.make-admin-btn');
//
// buttonAdmin.onclick = (e) => {
//     if (e.target.className === 'make-admin-btn') {
//         changeOnAdmin(e)
//     }
// }
//
// const changeOnAdmin = () => {
//     const father = document.body.firstElementChild
//     const body = father.children[1]
//     const right = body.lastElementChild
//     const lastEl = right.lastElementChild
//
//     const admin = lastEl.lastElementChild
//
//     admin.textContent = 'admin'
// }

const button3 = document.querySelector('.discount-btn');

button3.onclick = (e) => {
    if (e.target.className === 'discount-btn') {
        discount(e)
    }
}

const discount = () => {
    const father = document.body.firstElementChild
    const content = father.children[1]
    const main = content.firstElementChild

    const lastEl = main.lastElementChild
    const price = lastEl.lastElementChild

    price.textContent = '$800'
}
