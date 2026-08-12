
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
