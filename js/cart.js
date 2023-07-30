const addToProduct=() =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = ' ';
    quantityField.value = ' ';


    console.log(product,quantity);
    displayProduct(product,quantity);
    savedProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
        const ul = document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText = `${product}:${quantity}`;
        ul.appendChild(li);
}

// data saved product to localStorage
const getShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
            cart = JSON.parse(storedCart);
    }
    return cart;
}

const savedProductToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}