import {categories, products, optionData} from "./data.js";
import {chooseQuantity, renderQuantity, createInput, createOptions, updateCartCount, showError, removeError, updateWishCount} from './fumctions.js';
import {eventsData, renderEvents} from './events.js'
// Header
// Рендер Хедера
//______________________________

const header = document.querySelector('.header');
 const rawData = localStorage.getItem('cart');
const cartArrData = rawData ? JSON.parse(rawData) : [];
let wishListArrData = JSON.parse(localStorage.getItem('wishlist')) || []


const cartWindow = document.querySelector('.modal')

function headerRender() {
    const logo = document.createElement('h1')
    logo.textContent = 'ShopStore';

    const search = document.createElement('div');
    search.classList.add('search')

    const input = document.createElement('input');
    input.classList.add('search-value')
    input.placeholder = 'Search products...';
    input.dataset.event = 'Search products'


    search.append(input)

    const loop = document.createElement('span');
    loop.classList.add('search-icon');
    loop.textContent = '🔍';
    loop.dataset.event = 'search-icon'

    search.append(loop);

    const searchClearBtn = document.createElement('button')
    searchClearBtn.textContent = 'clear field'
    searchClearBtn.classList.add('clear-btn','not-active-btn')
    searchClearBtn.dataset.event = 'clear field'


    const menu = document.createElement('div');
    menu.classList.add('header-menu');

    const account = document.createElement('span');
    account.classList.add('header-item', 'account');
    account.textContent = '👤 Account'
    account.dataset.event = 'account'

    const wishList = document.createElement('span');
    wishList.classList.add('header-item');
    wishList.id = 'wish-list'
    wishList.textContent = '♡ Wishlist'
    wishList.dataset.event = 'Wishlist'

    const wishCount = document.createElement('span')
    wishCount.classList.add('wish-count')
    debugger
    // wishCount.textContent = updateWishCount(wishListArrData)

    wishList.append(wishCount)

    const cart = document.createElement('div');
    cart.classList.add('cart');
    cart.dataset.event = 'Cart'

    const icon = document.createElement('span');
    icon.textContent = '🛒';

    const text = document.createElement('span');
    text.textContent = 'Cart';

    const count = document.createElement('span');
    count.classList.add('cart-count');

    cart.append(icon, text, count);
    menu.append(searchClearBtn,account, wishList, cart);

    header.append(logo, search, menu);
    updateCartCount(cartArrData)
    updateWishCount(wishListArrData)
}

headerRender()


// Title + text

const titleWrap = document.querySelector('.title')

const title = document.createElement('h2')
const par = document.createElement('p')
const subTitle = document.createElement('p')

title.textContent = 'Categories'
par.textContent = 'Browse our product categories'
subTitle.textContent = 'All Categories'

titleWrap.append(title, par, subTitle)


const appList = document.querySelector('.appList')
const navigation = document.querySelector('.navigation')

const filteredArr = categories.filter(item => item.parentId === null)


// Рендер заглавной страницы
//______________________________
function mainCategoriesRender(categories, filtered, products) {

    appList.classList.remove('products');
    for (let i = 0; i < filtered.length; i++) {
        let count = 0
        const div = document.createElement('div')
        div.classList.add('item_wrap')
        div.dataset.id = filtered[i].id;
        div.dataset.event = filtered[i].title
        const header = document.createElement('div');
        header.classList.add('item_header');

        const title = document.createElement('h2');
        title.textContent = filtered[i].title;
        title.dataset.id = filtered[i].id;
        title.classList.add('category-title');

        const showMore = document.createElement('span');
        showMore.classList.add('arrow');
        showMore.textContent = '›'

        header.append(title, showMore);

        const ul = document.createElement('ul')
        ul.classList.add('data-list')
        const span = document.createElement('span')
        for (let j = 0; j < categories.length; j++) {
            if (filtered[i].id === categories[j].parentId) {
                count++
                const li = document.createElement('li')
                li.textContent = categories[j].title
                li.dataset.id = categories[j].id
                li.classList.add('category-item');
                li.dataset.event = categories[j].title
                ul.append(li)
            }
        }
        if (count < 1) {
            let productCount = 0
            for (let k = 0; k < products.length; k++) {
                if (products[k].categoryId === filtered[i].id) {
                    productCount++
                }
            }
            span.textContent = `${productCount} products`
        } else {
            span.textContent = `${count} subcategories`
        }
        div.append(header, span, ul)
        appList.append(div)
    }

}

mainCategoriesRender(categories, filteredArr, products)

// Событие на appList
//______________________________
appList.onclick = (e) => {
    if (chooseQuantity(e)) return;
    if (addToCart(e)) return;
    if (addToWishList(e)) return;

    const card = e.target.closest('.item_wrap')
    if (!card) return
    const id = card.dataset.id

    if (e.target.classList.contains('category-item')) {
        const categoryItem = e.target.closest('.category-item')
        if (!categoryItem) return

        const idElement = categoryItem.dataset.id

        const elements = categories.filter(item => item.parentId === idElement)

        if (elements.length > 0) {
            appList.innerHTML = '';
            mainCategoriesRender(categories, elements, products)
        } else {
            const currentProducts = products.filter(
                    item => item.categoryId === idElement
                );

                renderProducts(currentProducts);
        }


        const names = categories.filter(item => item.id === id)
        const span = document.createElement('span')
        span.classList.add('nav_item')
        span.dataset.id = `${names[0].id}`
        span.textContent = `${names[0].title} > `


        const elementName = document.createElement('span')
        elementName.classList.add('nav_item')
         elementName.dataset.id = categoryItem.dataset.id
        elementName.textContent = `${categoryItem.textContent} > `
        navigation.append(span, elementName)

        return;
    }


    // по карточке
    const children = categories.filter(
        item => item.parentId === id
    );

    if (children.length > 0) {
        appList.innerHTML = '';
        mainCategoriesRender(categories, children, products);
    } else {
        const currentProducts = products.filter(
            item => item.categoryId === id);
        renderProducts(currentProducts);
    }


    const name = categories.filter(item => item.id === id)
    const span = document.createElement('span')
    span.classList.add('nav_item')
    span.dataset.id = `${name[0].id}`
    span.textContent = `${name[0].title} > `
    navigation.append(span)

}

// Добавление в корзину
//______________________________
function addToCart(e) {
    const btn = e.target.closest('.add-cart');
    const cart = document.querySelector('.cart-count')

    if (!btn) return false;
    const id = btn.dataset.id;
    const parent = e.target.parentElement
    const child = parent.firstChild
    const value = child.querySelector('.value')


 const count = Number(value.textContent)


    const cartProduct = products.find(item => item.id === id)

    const existingProduct = cartArrData.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += count;
    } else {
        cartArrData.push({
            ...cartProduct,
            quantity: count
        });
    }

    localStorage.setItem('cart', JSON.stringify(cartArrData));
    updateCartCount(cartArrData);
}

//Функция добавления в виш лист


function addToWishList (e) {
    const wish = e.target.closest('.wish')

    if (!wish) return false

    const card = wish.closest('.product_card');
    const id = card.dataset.id;

    const findProductInArr = wishListArrData.find(item => item.id === id)

    if (findProductInArr) {
        const index = wishListArrData.findIndex(item => item.id === id)
        wishListArrData.splice(index, 1);
        wish.textContent = '🤍';
    } else {
        const product = products.find(item => item.id === id);
        wishListArrData.push( {...product, quantity: 1});
        wish.textContent = '❤️';
    }
    localStorage.setItem('wishlist', JSON.stringify(wishListArrData))

    updateWishCount(wishListArrData);

    return true;
}

// Рендер содержимого корзины
//______________________________
function cartRender(arr) {
    cartWindow.innerHTML = '';
    const modal = document.createElement('div');
    modal.classList.add('cart-modal');

    cartWindow.append(modal);

    const cart = document.querySelector('.cart-count')
    const cartHeader = document.createElement('div')
    cartHeader.classList.add('cart-header')

    const title = document.createElement('h2')
    title.textContent = `Your Cart (${cart.textContent})`
    title.classList.add('count')

    const close = document.createElement('span')
    close.textContent = '❌'
    close.classList.add('close-cart')
    close.dataset.event = 'close-cart'

    cartHeader.append(title, close)
    modal.append(cartHeader)

    const cartBody = document.createElement('div')
    cartBody.classList.add('cart-body');

    const cartFooter = document.createElement('div')
    cartFooter.classList.add('cart-footer');

    let finalPrice = 0;

    for (let i = 0; i < arr.length; i++) {

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.dataset.id = arr[i].id;

        const img = document.createElement('img');
        img.src = arr[i].image;
        img.classList.add('cart-img');

        const info = document.createElement('div');
        info.classList.add('cart-info');

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = arr[i].title;

        const price = document.createElement('p');
        price.textContent = `$${arr[i].price}`;

        const quantity = renderQuantity(arr[i].quantity)

        const cartPrice = document.createElement('p')
        cartPrice.classList.add('cart-price')
        cartPrice.textContent = `$${arr[i].price * arr[i].quantity}`;

        const removeCart = document.createElement('span')
        removeCart.classList.add('cart-remove')
        removeCart.textContent = '❌'
        removeCart.dataset.event = 'cart-remove'

        info.append(itemTitle, price);
        cartItem.append(img, info, quantity, cartPrice, removeCart);


        cartBody.append(cartItem);

        finalPrice += arr[i].price * arr[i].quantity;
    }
    const cartTotal = document.createElement('div')
    cartTotal.classList.add('cart-total')
    const total = document.createElement('span')
    total.textContent = 'Total'

    const totalPrices = document.createElement('span')
    totalPrices.textContent = `$ ${finalPrice}`
    totalPrices.classList.add('final-prices')

    const cartBtn = document.createElement('div')
    cartBtn.classList.add('cart-buttons')

    const continueBtn = document.createElement('button')
    continueBtn.classList.add('continue-btn')
    continueBtn.textContent = 'Continue Shopping'
    continueBtn.dataset.event = 'Continue Shopping'

    const checkoutBtn = document.createElement('button')
    checkoutBtn.classList.add('checkout-btn')
    checkoutBtn.textContent = 'Checkout'
    checkoutBtn.dataset.event = 'Checkout'

    cartBtn.append(continueBtn, checkoutBtn)

    cartTotal.append(total, totalPrices)
    cartFooter.append(cartTotal, cartBtn)

    modal.append(cartBody, cartFooter);
}



// Рендер Продуктов
//______________________________
function renderProducts(arr) {
    appList.innerHTML = '';
    appList.classList.add('products');
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div')
        div.classList.add('product_card');
        div.dataset.id = arr[i].id;

        const img = document.createElement('img')
        img.src = arr[i].image
        img.alt = 'product photo'
        img.classList.add('product_img');

        const photoInfo = document.createElement('div')
        photoInfo.classList.add('product_info');

        const title = document.createElement('h2')
        title.textContent = arr[i].title
        title.classList.add('product_title');

        const findElement = wishListArrData.find(item => item.id === arr[i].id)
         const addToWishList = document.createElement('span')

        if (findElement) {
            addToWishList.textContent = '❤️'
        } else {
            addToWishList.textContent = '🤍'
        }
        addToWishList.classList.add('wish')
        addToWishList.dataset.event = 'Add to wish'


        const price = document.createElement('p')
        price.textContent = `$${arr[i].price}`;
        price.classList.add('product_price');

        const btnWrap = document.createElement('div');
        btnWrap.classList.add('products-btn')

        const quantity = renderQuantity(1)

        const addBtn = document.createElement('button');
        addBtn.classList.add('add-cart')
        addBtn.textContent = '🛒 Add to Cart';
        addBtn.dataset.id = arr[i].id;
        addBtn.dataset.event = 'Add to Cart'

        btnWrap.append(quantity, addBtn)

        photoInfo.append(title, addToWishList, price, btnWrap)
        div.append(img, photoInfo)
        appList.append(div)
    }
}

// Рендер Навигации
//______________________________
function navigationRender() {
    navigation.innerHTML = '';
    const home = document.createElement('span')
    home.textContent = 'Home'
    home.classList.add('home_page')

    const separator = document.createElement('span')
    separator.textContent = ' > '

    navigation.append(home, separator)
}

navigationRender()

// Функция модального окна регистрации
//-------------------------------------------

const modalForm = document.querySelector('.checkout-modal')

function formWindowRender() {
    const checkoutWrap = document.createElement('div')
    checkoutWrap.classList.add('checkout-form')

    const headerWrap = document.createElement('div')
    headerWrap.classList.add('checkout-header')

    const header = document.createElement('h2')
    header.textContent = 'Checkout'

    const closeCheckout = document.createElement('span')
    closeCheckout.textContent = '❌'
    closeCheckout.classList.add('close-checkout')

    headerWrap.append(header, closeCheckout)

    const form = document.createElement('form')
    form.classList.add('user-form');

    const firstName = createInput('First Name', 'first-name', 'text')
    const lastName = createInput('Last Name', 'last-name', 'text')
    const email = createInput('Email', 'user-email', 'email')
    const phone = createInput('Phone', 'user-phone', 'tel')

    const selectType = createOptions( 'Delivery method', 'delivery', optionData)

    const userAddress = document.createElement('div')
    userAddress.classList.add('user-address')

    const city = createInput('City', 'city', 'text')
    const street = createInput('Street', 'street', 'text')
    const house = createInput('House', 'house', 'text')
    const flat = createInput('Flat', 'flat', 'text')

    userAddress.append(city, street, house, flat)
    const deliverySelect = selectType.querySelector('select')

    if (deliverySelect.value === 'delivery') {
        userAddress.classList.add('active')
    }

    deliverySelect.onchange = (e) => {
        if (e.target.value === 'delivery') {
            userAddress.classList.add('active')
        } else {
            userAddress.classList.remove('active')
        }
    }

    const btnWrap = document.createElement('div')
    btnWrap.classList.add('btn-wrap')

    const btn = document.createElement('button')
    btn.type = 'submit'
     btn.classList.add('checkout-submit')
    btn.textContent = 'Place Order'
    btn.dataset.event = 'Place Order'

    btnWrap.append(btn)

    form.append(firstName, lastName, email, phone, selectType, userAddress, btnWrap)
    checkoutWrap.append(headerWrap, form)
    modalForm.append(checkoutWrap)

}
 formWindowRender()

//Рендер содержимого вишлиста
//-------------------------------------------------
const wishListWindow = document.querySelector('.wishlist-modal')


function wishListRender (arr) {
    wishListWindow.innerHTML = '';

    const modal = document.createElement('div')
    modal.classList.add('wishlist-window')

    const wishHeader = document.createElement('div')
    wishHeader.classList.add('wish-header')

    const title = document.createElement('h2')
    title.textContent = `Wishlist (${arr.length})`;

    const close = document.createElement('span')
    close.textContent = '❌'
    close.classList.add('close-wishlist')

    wishHeader.append(title, close)
    modal.append(wishHeader)

    const wishBody = document.createElement('div')
    wishBody.classList.add('wishlist-body')

    for (let i = 0; i < arr.length; i++) {
        const wishItem = document.createElement('div')
        wishItem.classList.add('wishlist-item');
        wishItem.dataset.id = arr[i].id;

        const img = document.createElement('img');
        img.src = arr[i].image;
        img.classList.add('wishlist-img');

        const info = document.createElement('div');
            info.classList.add('wish-info');

            const wishTitle = document.createElement('h3');
            wishTitle.textContent = arr[i].title;

            const wishPrice = document.createElement('p');
            wishPrice.textContent = `$${arr[i].price}`;

            const quantityWish = renderQuantity(arr[i].quantity)

            const addWishCart = document.createElement('button')
            addWishCart.classList.add('wish-add-cart')
            addWishCart.textContent = '🛒 Add to Cart'
            addWishCart.dataset.id = arr[i].id
            addWishCart.dataset.event = 'Add to Cart from wish'

            const cartPrice = document.createElement('p')
            cartPrice.classList.add('cart-price')
            cartPrice.textContent = `$${arr[i].price * arr[i].quantity}`;

            const removeWish = document.createElement('span')
            removeWish.classList.add('wish-remove')
            removeWish.textContent = '❌'

            info.append(wishTitle, wishPrice);
            wishItem.append(img, info, quantityWish, cartPrice, addWishCart, removeWish);

            wishBody.append(wishItem)
    }
    modal.append(wishBody)
    wishListWindow.append(modal)
}

// Рендер содержимого Аккаунта
//__________________________________________

const accountModal = document.querySelector('.account-modal')

function accountRender () {
    accountModal.innerHTML = ''

    const modal = document.createElement('div')
    modal.classList.add('account-window')

    const header = document.createElement('div')
    header.classList.add('account-header')

    const title = document.createElement('h2')
    title.textContent = 'My Account'

    const close = document.createElement('span')
    close.classList.add('close-account')
    close.dataset.event = 'close-account'
    close.textContent = '❌'

    header.append(title, close)


    const statistics = document.createElement('button')
    statistics.classList.add('statistics-btn')
    statistics.textContent = 'My statistics >'
    statistics.dataset.event = 'My statistics'

    modal.append(header, statistics)

    accountModal.append(modal)
}

function chooseWishQuantity(e) {
    const card = e.target.closest('.wishlist-item')
    const id = card.dataset.id

    const product = wishListArrData.find(item => item.id === id)

    if (e.target.classList.contains('btn-plus')) {
        product.quantity++;
    }

    if (e.target.classList.contains('btn-minus') && product.quantity > 1) {
        product.quantity--;
    }

    wishListRender(wishListArrData)

    return true
}

wishListWindow.onclick = (e) =>{
    if (e.target.closest('.close-wishlist')) {
        wishListWindow.classList.remove('active')
    }

    if (addFromWishToCart(e)) return;

    if (e.target.closest('.wish-remove')) {
        debugger
        const product = document.querySelectorAll('.product_card')

        const wishItem = e.target.closest('.wishlist-item');
        const id = wishItem.dataset.id;

        const index = wishListArrData.findIndex(item => item.id === id);

        for (let i = 0; i < product.length; i++) {
            if (id === product[i].dataset.id) {
                const wish = product[i].querySelector('.wish')
                wish.textContent = '🤍'
            }
        }

        wishListArrData.splice(index, 1);

        localStorage.setItem('wishlist', JSON.stringify(wishListArrData))
        updateWishCount(wishListArrData)
        wishListRender(wishListArrData)
        return;
    }
    if (chooseWishQuantity(e)) return
}

function addFromWishToCart(e) {
    const btn = e.target.closest('.wish-add-cart')

    if (!btn) return false

    const id = btn.dataset.id;

    const cartProduct = wishListArrData.find(item => item.id === id)

    const existingProduct = cartArrData.find(item => item.id === id);

    if (!existingProduct) {
        cartArrData.push({...cartProduct})
    }
    const index = wishListArrData.findIndex(item => item.id === id);
    wishListArrData.splice(index, 1);


    localStorage.setItem('cart', JSON.stringify(cartArrData));
    updateWishCount(wishListArrData)
    wishListRender(wishListArrData)
    updateCartCount(cartArrData);

    return true
}

// Клик по навигации
//______________________________
navigation.onclick = (e) => {

    const card = e.target.closest('.nav_item')

    if ((e.target.classList.contains('home_page'))) {
        appList.innerHTML = '';
        navigationRender();
        mainCategoriesRender(categories, filteredArr, products);
        return;
    }
    if (!card) return
    const id = card.dataset.id

    const children = categories.filter(
        item => item.parentId === id
    );

    if (children.length > 0) {
        while (card.nextElementSibling) {
            card.nextElementSibling.remove();
        }
        appList.innerHTML = '';
        mainCategoriesRender(categories, children, products);
    }
}

// Клик по Хедеру
//---------------------------
const search = document.querySelector('.search-value')
const btn = document.querySelector('.clear-btn')

header.onclick = (e) => {
    if (e.target.closest('.search-value')) {
        search.placeholder = ''
    }
    if (e.target.closest('.cart')) {
        cartWindow.classList.add('active');
        cartRender(cartArrData)
    }
    if (e.target.closest('#wish-list')) {
        wishListWindow.classList.add('active');
        wishListRender(wishListArrData);
    }

    if (e.target.closest('.account')) {
        accountModal.classList.add('active')
        accountRender()
    }

    if (e.target.closest('.clear-btn')) {
        search.value = ''
        search.placeholder = 'Search products...';
        appList.innerHTML = '';
         mainCategoriesRender(categories, filteredArr, products)
        navigationRender()
    }
}

// Клики в аккаунте
//-----------------------------------

accountModal.onclick = (e) => {
    if (e.target.closest('.close-account')) {
        accountModal.classList.remove('active')
        return
    }

    if (e.target.closest('.statistics-btn')) {
        const modal = e.target.closest('.account-window')
        const accountList = document.querySelector('.events-list')
        const btn = document.querySelector('.statistics-btn')

        if (accountList) {
            accountList.remove()
            btn.textContent = 'My statistics >'
        } else {
            modal.append(renderEvents(eventsData))
            btn.textContent = 'My statistics V'
        }
        return
    }
}

// Клик по поиску
//-----------------------------------
search.oninput = (e) => {
    const value = e.target.value.toLowerCase()

    if (value === '') {
        appList.innerHTML = '';
        mainCategoriesRender(categories, filteredArr, products);

        btn.classList.remove('active-btn');
        btn.classList.add('not-active-btn');
       navigationRender()

        return;
    }

    const filtProducts = products.filter(item => item.title.toLowerCase().includes(value));

    renderProducts(filtProducts);

    btn.classList.remove('not-active-btn');
    btn.classList.add('active-btn');

}

// Клик по корзине
cartWindow.onclick = (e) => {
    if (e.target.matches('.btn-plus, .btn-minus')) {

        const cartItem = e.target.closest('.cart-item');
        const id = cartItem.dataset.id;

        const product = cartArrData.find(item => item.id === id);

        if (e.target.classList.contains('btn-plus')) {
            product.quantity++;
        }

        if (e.target.classList.contains('btn-minus') && product.quantity > 1) {
            product.quantity--;
        }
        localStorage.setItem('cart',JSON.stringify(cartArrData))
        updateCartCount(cartArrData);
        cartRender(cartArrData);

        return;
    }

    if (e.target.closest('.close-cart') || e.target.closest('.continue-btn')) {
        cartWindow.classList.remove('active');
        return;
    }

    // для открытия окна регистрации
     if ( e.target.closest('.checkout-btn')) {
         if (cartArrData.length === 0) {
             return
         }
         modalForm.classList.add('active')
         cartWindow.classList.remove('active');
         return;
     }

    if (e.target.closest('.cart-remove')) {

        const cartItem = e.target.closest('.cart-item');
        const id = cartItem.dataset.id;

        const index = cartArrData.findIndex(item => item.id === id);

        cartArrData.splice(index, 1);

        localStorage.setItem('cart', JSON.stringify(cartArrData));

        updateCartCount(cartArrData);
        cartRender(cartArrData);

        return;
    }

};

// Закрытие окна формы
modalForm.onclick = (e) => {
    if (e.target.closest('.close-checkout')) {
        modalForm.classList.remove('active')
        return
    }
}



// Ивент на форме

modalForm.onsubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
        return
    }
    const inputs = document.querySelectorAll('input, select')
    const arr = []

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== '') {
            arr.push({
                name: inputs[i].name,
                value: inputs[i].value
            })
        }

    }

    console.log(arr)
}


// Проверка инпутов
function validateForm()  {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const phoneRegex = /^(?:0\d{9}|\+380\d{9})$/;

    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#user-email');
    const phone = document.querySelector('#user-phone');
    const delivery = document.querySelector('#delivery');

    const firstNameValue = document.querySelector('#first-name').value.trim()
    const lastNameValue = document.querySelector('#last-name').value.trim()
    const emailValue = document.querySelector('#user-email').value.trim()
    const phoneValue = document.querySelector('#user-phone').value.trim()


    const deliverySelect = document.querySelector('#delivery')

    let isValidOrNot = true

    removeError(firstName)
    removeError(lastName)
    removeError(email)
    removeError(phone)
    removeError(delivery)

    if (!firstNameValue) {
        showError(firstName, 'First name is required')
        isValidOrNot = false
    }

    if (!lastNameValue) {
        showError(lastName, 'Last name is required')
        isValidOrNot = false
    }

    if (!emailRegex.test(emailValue)) {
        showError(email, 'Invalid email')
        isValidOrNot = false
    }

    if (!phoneRegex.test(phoneValue)) {
        showError(phone, 'Invalid phone')
        isValidOrNot = false
    }

    if (deliverySelect.value === 'delivery')  {
        const city = document.querySelector('#city')
        const street = document.querySelector('#street')
        const house = document.querySelector('#house')
        const flat = document.querySelector('#flat')

        const cityValue = document.querySelector('#city').value.trim()
        const streetValue = document.querySelector('#street').value.trim()
        const houseValue = document.querySelector('#house').value.trim()
        const flatValue = document.querySelector('#flat').value.trim()

        removeError(city)
        removeError(street)
        removeError(house)
        removeError(flat)

       if (!cityValue) {
           showError(city, 'Invalid City')
           isValidOrNot = false
       }
        if (!streetValue) {
            showError(street, 'Invalid Street')
            isValidOrNot = false
        }
        if (!houseValue) {
            showError(house, 'Invalid House')
            isValidOrNot = false
        }
        if (!flatValue) {
            showError(flat, 'Invalid Flat')
            isValidOrNot = false
        }
    }
    return isValidOrNot
}


//-------------------

const user1 = {
    name: 'Oleg',
    surname: 'Petrovich',
    getFullName
}

const user2 = {
    name: 'John',
    surname: 'Snow',
    getFullName
}

function getFullName () {
   return `Full name: ${this.name} ${this.surname}`

}

// const fullName1 = `${user1.name} ${user1.surname}`
// const fullName2 = `${user2.name} ${user2.surname}`

console.log(user1.getFullName())
console.log(user2.getFullName())


function createUser (name, surname) {
    return {
        name: name,
        surname: surname,
        getFullName
    }
}

const user3 = createUser('Lena', 'Userovna')
console.log(user3.getFullName())
