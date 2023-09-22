// Initialize the cart from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.name} - $${item.price}`;
        cartElement.appendChild(itemElement);
        total += item.price;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `$${total}`;

    // Update the cart button count
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    // Store the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to show the cart
function showCart() {
    const cartItems = cart.map(item => `${item.name} - $${item.price}`).join('\n');
    alert(`Cart Items:\n${cartItems}`);
}

// Function to proceed to checkout
function checkout() {
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}
