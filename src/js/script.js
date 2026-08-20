import {categories, products} from "./data.js";
import {chooseQuantity, renderQuantity} from './fumctions.js';
// є список категорій товарів. в кожній є список підкатегорій, в кожній з яких є свій список підкатегорій. і в
// кожній категорії на найнижчому рівні є товари.
//
// вивести на сторінку основні категорії у вигляді списку. по натисканню на категорію, виводиться список
// її підкатегорій. по натисканню на підкатегорію, виводиться список її підкатегорій. по натисканню на підкатегорію,
// виводиться список її товарів у вигляді карток.
//
//зверху показує "адресу", де юзер зараз знаходиться, у вигляді ланцюжка вибраних категорій. по натисканню на
// категорію з ланцюжка, виводиться список її підкатегорій або товарів. по натисканню на Categories виводить
// список кореневих категорій




// Header
// Рендер Хедера
//______________________________

const header = document.querySelector('.header');
const cartArrData = []
const cartWindow = document.querySelector('.modal')

function headerRender() {
    const logo = document.createElement('h1')
    logo.textContent = 'ShopStore';

    const search = document.createElement('div');
    search.classList.add('search')

    const input = document.createElement('input');
    input.classList.add('search-value')
    input.placeholder = 'Search products...';


    search.append(input)

    const loop = document.createElement('span');
    loop.classList.add('search-icon');
    loop.textContent = '🔍';

    search.append(loop);

    const searchClearBtn = document.createElement('button')
    searchClearBtn.textContent = 'clear field'
    searchClearBtn.classList.add('clear-btn','not-active-btn')



    const menu = document.createElement('div');
    menu.classList.add('header-menu');

    const account = document.createElement('span');
    account.classList.add('header-item');
    account.textContent = '👤 Account'

    const wishList = document.createElement('span');
    wishList.classList.add('header-item');
    wishList.textContent = '♡ Wishlist'

    const cart = document.createElement('div');
    cart.classList.add('cart');

    const icon = document.createElement('span');
    icon.textContent = '🛒';

    const text = document.createElement('span');
    text.textContent = 'Cart';

    const count = document.createElement('span');
    count.classList.add('cart-count');
    count.textContent = '0';

    cart.append(icon, text, count);
    menu.append(searchClearBtn,account, wishList, cart);

    header.append(logo, search, menu);
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

    const card = e.target.closest('.item_wrap')
    if (!card) return
    const id = card.dataset.id
    // debugger
    if (e.target.classList.contains('category-item')) {
        const categoryItem = e.target.closest('.category-item')
        if (!categoryItem) return

        const idElement = categoryItem.dataset.id

        const elements = categories.filter(item => item.parentId === idElement)

            // пофиксить этот кусок
        if (elements.length > 0) {
            appList.innerHTML = '';
            mainCategoriesRender(categories, elements, products)
        } else {
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
    const num = Number(cart.textContent)
    const result = num + count
    cart.textContent = `${result}`

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
}

// Рендер содержимого корзины
//(заняло несколько часов создание) структура/ css/ порядок какой
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

    const checkoutBtn = document.createElement('button')
    checkoutBtn.classList.add('checkout-btn')
    checkoutBtn.textContent = 'Checkout'

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

        const img = document.createElement('img')
        img.src = arr[i].image
        img.alt = 'product photo'
        img.classList.add('product_img');

        const photoInfo = document.createElement('div')
        photoInfo.classList.add('product_info');

        const title = document.createElement('h2')
        title.textContent = arr[i].title
        title.classList.add('product_title');


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

        btnWrap.append(quantity, addBtn)

        photoInfo.append(title, price, btnWrap)
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

    if (e.target.closest('.clear-btn')) {
        search.value = ''
        search.placeholder = 'Search products...';
        appList.innerHTML = '';
         mainCategoriesRender(categories, filteredArr, products)
        navigationRender()

    }
}

// Клик по поиску

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

// Клик по открытой корзине
//---------------------------
// cartWindow.onclick = (e) => {
//     if (e.target.matches('.btn-plus, .btn-minus')) {
//
//         const cartItem = e.target.closest('.cart-item');
//         const id = cartItem.dataset.id;
//         const price = document.querySelector('.final-prices')
//
//         const product = cartArrData.find(item => item.id === id);
//
//         if (e.target.classList.contains('btn-plus')) {
//             product.quantity++;
//             price.textContent = `${product.quantity}`
//         } else if (e.target.classList.contains('btn-minus') && product.quantity > 1) {
//             product.quantity--;
//             price.textContent = `${product.quantity}`
//         }
//
//         cartRender(cartArrData);
//         return;
//     }
//
//     const parent = e.target.parentElement
//
//     if (e.target.closest('.close-cart') || e.target.closest('.continue-btn' )||
//         e.target.closest('.checkout-btn')) {
//         cartWindow.classList.remove('active');
//     }
//     const price = document.querySelector('.final-prices')
//     const cartItem = e.target.closest('.cart-item');
//     if (e.target.closest('.cart-remove')) {
//         if (parent.closest('.cart-modal'))
//         parent.remove()
//     }
//
//
//
// }
cartWindow.onclick = (e) => {

    if (e.target.matches('.btn-plus, .btn-minus')) {

        const cartItem = e.target.closest('.cart-item');
        const id = cartItem.dataset.id;

        const product = cartArrData.find(item => item.id === id);

        if (e.target.classList.contains('btn-plus')) {
            product.quantity++;
        }

        if (
            e.target.classList.contains('btn-minus') &&
            product.quantity > 1
        ) {
            product.quantity--;
        }

        cartRender(cartArrData);

        return;
    }

    if (
        e.target.closest('.close-cart') ||
        e.target.closest('.continue-btn') ||
        e.target.closest('.checkout-btn')
    ) {
        cartWindow.classList.remove('active');

        return;
    }

    if (e.target.closest('.cart-remove')) {

        const cartItem = e.target.closest('.cart-item');
        const id = cartItem.dataset.id;

        const index = cartArrData.findIndex(item => item.id === id);

            cartArrData.splice(index, 1);


        let totalCount = 0;

        for (let i = 0; i < cartArrData.length; i++) {
            totalCount += cartArrData[i].quantity;
        }

        const cart = document.querySelector('.cart-count');
        cart.textContent = `${totalCount}`;

        cartRender(cartArrData);

        return;
    }
};
