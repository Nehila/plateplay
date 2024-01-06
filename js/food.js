const data = JSON.parse(localStorage.getItem('data'))

const header_image = document.getElementById('plate-header').style = `background: url(${data.image}) no-repeat`
const name = document.getElementById('name').innerText = data.name
const description = document.getElementById('description').innerText = data.description


const change_price_quantity = (value) => {
    document.getElementById('price').innerText = `The total price is ${data.price} MAD`
}

change_price_quantity(1)

const counter = document.getElementById('counter-value')
const add_counter = () => {
    counter.innerText = parseInt(counter.innerText) + 1
    change_price_quantity(parseInt(counter.innerText))

}

const minus_counter = () => {
    if (parseInt(counter.innerText) > 1){
        counter.innerText = parseInt(counter.innerText) - 1
        change_price_quantity(parseInt(counter.innerText))
    }
}

const add_to_cart = () => {
    if (localStorage.getItem('cart') == undefined){
        localStorage.setItem('cart', JSON.stringify([]))  
    }

    // a = [1, 3, 4, 6] | b = [2, 5] => a + b 
    // a = [{a: 1, b: 2}, {}....,{a: 1, b: 2}, {}....] => 

    const cart = JSON.parse(localStorage.getItem('cart'))
    localStorage.setItem('cart', JSON.stringify([
        ...cart,
        {
            ...data,
            quantity: parseInt(counter.innerText)
        }
    ]))

    window.location = '/'
}