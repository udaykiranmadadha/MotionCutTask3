// main.js

// Array to store items in the cart
let cart = [];



// Function to add items to the cart
function addToCart(productId) {
    // Logic to add the selected product to the cart array
    cart.push(productId);
    alert(`Product ${productId} added to cart!`);

    // Save the cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}


// Function to display items in the shopping cart
function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous content
    cartItemsElement.innerHTML = '';

    let total = 0;

    // Iterate through the cart array and display items
    for (const productId of cart) {
        const productName = `Product ${productId}`;
        const productPrice = getProductPrice(productId);

        const listItem = document.createElement('li');
        listItem.className = 'cart-item'; // Add class for styling
        listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        // Update the total price
        total += productPrice;
    }

    // Display the total price
    cartTotalElement.textContent = total.toFixed(2);
}

// Function to get the price of a product based on its ID
function getProductPrice(productId) {
    // Add logic to retrieve the actual prices from your data or backend
    const prices = {
        1: 20.00,
        2: 25.00,
        3: 30.00,
        4: 35.00,
        5: 40.00,
        6: 45.00,
        7: 50.00,
        8: 55.00,
        9: 60.00,
        10: 65.00
    };

    return prices[productId] || 0.00;
}

// Function to handle the checkout process
function checkout() {
    // Add logic for the checkout process (e.g., redirect to a payment page)
    alert('Checkout functionality is not implemented in this example.');
}

// Function to display product details on the right side
function showProductDetails(productId) {
    const productDetailsElement = document.getElementById('product-details');
    const productName = `Product ${productId}`;
    const productDescription = getProductDescription(productId);

    // Update the product details content
    productDetailsElement.innerHTML = `
        <h2>${productName}</h2>
        <p>${productDescription}</p>
    `;
}

// Function to get the description of a product based on its ID
function getProductDescription(productId) {
    // Add logic to retrieve the actual descriptions from your data or backend
    const descriptions = {
        1: 'Detailed description of Product 1.',
        2: 'Detailed description of Product 2.',
        3: 'Detailed description of Product 3.',
        4: 'Detailed description of Product 4.',
        5: 'Detailed description of Product 5.',
        6: 'Detailed description of Product 6.',
        7: 'Detailed description of Product 7.',
        8: 'Detailed description of Product 8.',
        9: 'Detailed description of Product 9.',
        10: 'Detailed description of Product 10.'
    };

    return descriptions[productId] || 'No description available.';
}
