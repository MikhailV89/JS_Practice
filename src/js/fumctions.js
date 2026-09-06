
export function chooseQuantity (event) {
    if (event.target.matches('.btn-plus, .btn-minus')) {
        const quantity = event.target.closest('.quantity');
        const value = quantity.querySelector('.value');
        let count = Number(value.textContent);

        if (event.target.classList.contains('btn-plus')) {
            count++
        } else if (event.target.classList.contains('btn-minus') && count > 1) {
            count--
        }
        value.textContent = `${count}`
    }
}

export function renderQuantity (quantityValue) {
    const quantity = document.createElement('div');
    quantity.classList.add('quantity');

    const minus = document.createElement('button')
    minus.textContent = '-';
    minus.classList.add('btn-minus')

    const count = document.createElement('span')
    count.textContent = quantityValue;
    count.classList.add('value')

    const plus = document.createElement('button')
    plus.textContent = '+'
    plus.classList.add('btn-plus')

    quantity.append(minus, count, plus)
    return quantity
}

// Создание инпутов
export function createInput (labelText, inputId, type) {
    const div = document.createElement('div');
    div.classList.add('form-field')

    const label = document.createElement('label')
    label.textContent = labelText
    label.htmlFor = inputId

    const input = document.createElement('input')
    input.id = inputId
    input.name = inputId
    input.type = type

    div.append(label, input)

    return div
}

// Создание options
export function createOptions (labelText, selectId, options) {
    const div = document.createElement('div');
    div.classList.add('form-field')

    const label = document.createElement('label')
    label.textContent = labelText
    label.htmlFor = selectId

    const select = document.createElement('select');
    select.id = selectId;
    select.name = selectId;

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');

        option.value = options[i].value
        option.textContent = options[i].text;

        select.append(option)
    }

    div.append(label, select);

    return div;
}

// Обновить счетчик корзины
export function updateCartCount(arr) {
    const cart = document.querySelector('.cart-count')

    let totalCount = 0


    for (let i = 0; i < arr.length; i++) {
        totalCount += arr[i].quantity
    }

  cart.textContent = totalCount
}

export function showError (input, text) {
    const parent = input.parentElement
    input.classList.add('input-error')

    const span = document.createElement('span')
    span.classList.add('error-text')
    span.textContent = text

    parent.append(span)
}

export function removeError (input) {

    input.classList.remove('input-error')
    const text = input.parentElement.querySelector('.error-text')

    if (text) {
        text.remove()
    }
}
