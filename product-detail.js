// Product Detail Page Script

// Get product data from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Sample product data (in a real app, this would come from an API)
const products = [
    {
        id: '1',
        name: 'Elegant Orchid Dress',
        price: '$129.99',
        description: 'A stunning dress featuring intricate orchid patterns and luxurious silk fabric. Perfect for special occasions.',
        image: 'https://via.placeholder.com/600x600?text=Elegant+Orchid+Dress'
    },
    {
        id: '2',
        name: 'Orchid Perfume',
        price: '$59.99',
        description: 'A captivating fragrance that captures the essence of orchids. Long-lasting and sophisticated.',
        image: 'https://via.placeholder.com/600x600?text=Orchid+Perfume'
    },
    {
        id: '3',
        name: 'Silk Orchid Scarf',
        price: '$39.99',
        description: 'A luxurious silk scarf adorned with delicate orchid embroidery. Perfect for adding a touch of elegance to any outfit.',
        image: 'https://via.placeholder.com/600x600?text=Silk+Orchid+Scarf'
    },
    {
        id: '4',
        name: 'Orchid Home Candle Set',
        price: '$24.99',
        description: 'A beautiful set of candles featuring orchid-inspired designs. Creates a soothing atmosphere in any room.',
        image: 'https://via.placeholder.com/600x600?text=Orchid+Home+Candle+Set'
    }
];

// Find the product by ID
const product = products.find(p => p.id === productId);

// Display product details if found
if (product) {
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
}

// Add to cart functionality
const addToCartBtn = document.getElementById('addToCartBtn');
addToCartBtn.addEventListener('click', function() {
    // In a real app, you would add the product to the cart
    showNotification(`${product.name} added to cart!`);
    
    // Visual feedback
    this.textContent = 'Added!';
    this.style.backgroundColor = 'var(--accent-color)';
    setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.backgroundColor = '';
    }, 1000);
});

// Notification function (same as in main script.js)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--accent-color);
        color: var(--white-color);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1000;
        transform: translateX(150%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}
