 const productList = document.getElementById('product-list');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartElement = document.querySelector('.cart');
  let cart = [];
  let cartVisible = false;

  const cartToggle = document.createElement('button');
  cartToggle.className = 'cart-toggle';
  cartToggle.innerHTML = '🛒';
  document.body.appendChild(cartToggle);

  const cartBadge = document.createElement('span');
  cartBadge.className = 'badge';
  cartBadge.textContent = '0';
  cartToggle.appendChild(cartBadge);

  const cartClose = document.createElement('button');
  cartClose.className = 'cart-close';
  cartClose.innerHTML = '&times;';
  cartElement.insertBefore(cartClose, cartElement.firstChild);

  const emptyCart = document.createElement('div');
  emptyCart.className = 'cart-empty';
  emptyCart.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/>
      <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/>
    </svg>
    <p>Your cart is empty</p>
  `;
  cartItems.appendChild(emptyCart);

  const checkoutBtn = document.createElement('button');
  checkoutBtn.className = 'checkout-btn';
  checkoutBtn.textContent = 'Checkout';
  cartElement.appendChild(checkoutBtn);

  async function fetchProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      displayProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    }
  }
  function displayProducts(products) {
    productList.innerHTML = '';
    
    products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.style.setProperty('--order', index);
      
      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}" data-price="${product.price}">Add to Cart</button>
      `;
      
      productList.appendChild(productCard);
    });
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', addToCart);
    });
  }
  function addToCart(e) {
    const button = e.target;
    const id = parseInt(button.getAttribute('data-id'));
    const price = parseFloat(button.getAttribute('data-price'));
    const title = button.parentElement.querySelector('h4').textContent;
    const image = button.parentElement.querySelector('img').src;

    // Animation feedback
    button.classList.add('added');
    setTimeout(() => button.classList.remove('added'), 500);

    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id,
        title,
        price,
        image,
        quantity: 1
      });
    }

    updateCart();
    showCart();
  }
  function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    if (cart.length === 0) {
      emptyCart.style.display = 'block';
      checkoutBtn.style.display = 'none';
    } else {
      emptyCart.style.display = 'none';
      checkoutBtn.style.display = 'block';
    }
    cartItems.innerHTML = '';
    if (cart.length > 0) {
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${item.image}" alt="${item.title}" width="40" height="40" style="border-radius: 4px;">
            <div>
              <p style="margin: 0; font-weight: 500;">${item.title}</p>
              <div class="quantity-control">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
            </div>
          </div>
          <div style="margin-left: auto; display: flex; align-items: center;">
            <span style="font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-item" data-id="${item.id}">&times;</button>
          </div>
        `;
        cartItems.appendChild(cartItem);
      });
      document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
      });
      document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
      });
    } else {
      cartItems.appendChild(emptyCart);
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
  }
  function updateQuantity(e) {
    const button = e.target;
    const id = parseInt(button.getAttribute('data-id'));
    const item = cart.find(item => item.id === id);
    
    if (button.classList.contains('plus')) {
      item.quantity++;
    } else if (button.classList.contains('minus')) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        removeItem(e);
        return;
      }
    }
    
    updateCart();
  }

  function removeItem(e) {
    const button = e.target;
    const id = parseInt(button.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === id);
    
    const cartItem = button.closest('.cart-item');
    cartItem.classList.add('item-remove');
    
    setTimeout(() => {
      cart.splice(itemIndex, 1);
      updateCart();
    }, 300);
  }

  function toggleCart() {
    cartVisible = !cartVisible;
    
    if (cartVisible) {
      cartElement.classList.add('active');
    } else {
      cartElement.classList.remove('active');
    }
  }
  function showCart() {
    if (!cartVisible) {
      cartVisible = true;
      cartElement.classList.add('active');
    }
  }
  function checkout() {
    if (cart.length === 0) return;
    
    checkoutBtn.classList.add('success-animation');
    checkoutBtn.textContent = 'Processing...';
    
    setTimeout(() => {
      alert(`Order placed! Total: $${cartTotal.textContent}`);
      cart = [];
      updateCart();
      checkoutBtn.classList.remove('success-animation');
      checkoutBtn.textContent = 'Checkout';
      toggleCart();
    }, 1500);
  }
  cartToggle.addEventListener('click', toggleCart);
  cartClose.addEventListener('click', toggleCart);
  checkoutBtn.addEventListener('click', checkout);
  fetchProducts();