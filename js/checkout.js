const chats = [5223199044, 1694544498]

const message_template = `
<b>Buyer's name: </b>{name}\n<b>Address: </b>{address}\n<b>Phone number: </b>{phone}\n---------------------------------
`
const order_template = `
<b>Dish: </b>{dish}\n<b>Quantity: </b>{quantity}
`

const send_message = async () => {
    const data = JSON.parse(localStorage.getItem('cart'))

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const name = document.getElementById('name')
    const address = document.getElementById('address')
    const phone = document.getElementById('phone')
    var orders = ''
    data.map((value) => {
        orders += `<b>Dish: </b>${value.name}\n<b>Quantity: </b>${value.quantity}\n`
    })

    const message = message_template.replace('{name}', name.value).replace('{address}', address.value).replace('{phone}', phone.value) + orders
    chats.map((value) => {
        fetch(`https://api.telegram.org/bot6385710698:AAGfov_PAxOGAF1y7k3bzQ4JDRQWLMWVkdU/sendMessage?chat_id=${value}&text=${encodeURIComponent(message)}&parse_mode=html`, requestOptions).then(() => {
        document.getElementById('success-message').classList.remove('hide')
    })
    })
    
}
