// Load products when page loads
document.addEventListener("DOMContentLoaded", async function () {
  
  // Get the products from JSON file
  const response = await fetch('product.json');
  const products = await response.json();

  // Check if we're on home page or products page
  const productGrid = document.querySelector('.product-grid');
  
  if (productGrid) {
    productGrid.innerHTML = ''; // Clear everything
    
    // Are we on home page? (only show featured)
    const isHomePage = document.querySelector('.feat-prod');
    
    if (isHomePage) {
      // Home page - only featured products
      products.filter(p => p.featured).forEach(product => {
        productGrid.innerHTML += makeProductHTML(product);
      });
    } else {
      // Products page - all products
      products.forEach(product => {
        productGrid.innerHTML += makeProductHTML(product);
      });
    }
    
    // Now make cart buttons work
    setupCartButtons();
  }
});

// Make the HTML for one product
function makeProductHTML(product) {
  return `
    <div class="products">
      <h2 class="prod-title">${product.name}</h2>
      <img class="prod-img" src="${product.photo}" alt="${product.name}">
      <p class="prod-desc">${product.description}</p>
      <p class="prod-price">$${product.price}</p>
      <button class="prod-btn" type="button">Add to cart</button>
    </div>
  `;
}

// Make cart buttons work
function setupCartButtons() {
  let cartCount = 0;
  let cartCountElement = document.querySelector(".cart-count");
  let buttons = document.querySelectorAll(".prod-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      this.textContent = "ITEM ADDED!";
      
      setTimeout(() => {
        this.textContent = "Add to cart";
      }, 2000);

      cartCount++;
      
      if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = "block";
      }
    });
  });
}