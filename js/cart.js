const cart_html = `
    <div class="cart-item" data-index="{index}">
        <div class="plate-cart" style="background-image: url({image});">
            <div class="remove-item" data-index="{index}" onclick="remove_item(this)">x</div>
        </div>

        <div class="price-container">
            <span class="cart-item-title">{name}</span>
            <div class="item-price">
                <span class="cart-price">{price}</span>
                <span class="currency">MAD</span>
                <span class="quantity">x{quantity}</span>
            </div>
        </div>
        <div class="counter-wrapper">

            <div class="counter-cart">
                <span class="navigation" data-index="{index}" onclick="change_price_quantity(this, 1)">
                    +
                </span>
                <span class="navigation s-color" data-index="{index}" onclick="change_price_quantity(this, -1)">
                    -
                </span>
            </div>
        </div>  

    </div>
`

const cart = document.getElementById('cart')
const subtotal = document.getElementById('subtotal')
const promotion = document.getElementById('promotion')
const total = document.getElementById('total')


const display_cart = () => {
    const data = JSON.parse(localStorage.getItem('cart'))
    cart.innerHTML = ''
    data.map((value, index) => {
        cart.innerHTML += cart_html.replace('{image}', value.image).replace('{name}', value.name).replace('{price}', value.price).replace('{quantity}', value.quantity).replace('{index}', index).replace('{index}', index).replace('{index}', index).replace('{index}', index).replace('{index}', index)
    })
}


const calculate_total = () => {
    const items = JSON.parse(localStorage.getItem('cart'))
    let totalCost = 0;
    let discount = 0;

    items.forEach(item => {
        totalCost += parseInt(item.price) * item.quantity;
    });

    discount = totalCost * 0.2;
    let totalAfterDiscount = totalCost - discount;

    subtotal.innerText = totalCost + " "
    promotion.innerText = discount + " "
    total.innerText = totalAfterDiscount + " "
}

const refresh_data = () => {
    display_cart()
    calculate_total()
}

const change_price_quantity = (e, value) => {
    const item_index = parseInt(e.getAttribute('data-index'))
    const items = JSON.parse(localStorage.getItem('cart'))

    items[item_index] = {
        ...items[item_index],
        quantity: items[item_index].quantity + parseInt(value)
    }

    localStorage.setItem('cart', JSON.stringify(items))

    refresh_data()
}


const remove_item = (e) => {
    var data = JSON.parse(localStorage.getItem('cart'))
    const item_index = parseInt(e.getAttribute('data-index'))
    data = data.filter((item, index) => index !== item_index);

    localStorage.setItem('cart', JSON.stringify(data))
    refresh_data()
}

refresh_data()