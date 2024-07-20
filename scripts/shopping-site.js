let cart = [];
const cartNotification = document.getElementById('cart-notification');
const cartElement = document.getElementById('cart');
const cartCountElement = document.getElementById('cart-count');

// Add item to cart
function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = productElement.querySelector('h2').innerText;
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    cart.push({ id: productId, name: productName, price: productPrice });
    updateCartDisplay();
    showCartNotification();
}

// Update cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    totalPriceElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
}

// Show cart notification
function showCartNotification() {
    cartNotification.classList.add('show');
    setTimeout(() => {
        cartNotification.classList.remove('show');
    }, 3000); // Notification disappears after 3 seconds
}

// Toggle cart visibility
function toggleCart() {
    if (cartElement.style.display === 'block') {
        cartElement.style.display = 'none';
    } else {
        cartElement.style.display = 'block';
    }
}

// Handle checkout
function checkout() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = []; // Empty the cart
        updateCartDisplay();
    } else {
        alert('Your cart is empty.');
    }
}
