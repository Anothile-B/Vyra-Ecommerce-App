const cartCount = document.getElementById("cart-count");
const productList = document.getElementById("product-list");
const categoryFilters = document.getElementById("category-filters");

let currentProducts = [];

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
/* display the products lists*/
function displayProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";

    const price = product.salePrice
      ? `<span class="old-price">R ${product.price}</span>
         <span class="sale-price">R ${product.salePrice}</span>`
      : `<span class="price">R ${product.price}</span>`;

    div.innerHTML = `
      <img src="${product.image}" onclick="openProduct(${product.id})">
      <h3>${product.name}</h3>
      ${price}
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

function filterSection(section) {
  currentProducts = section === "All"
    ? products
    : products.filter(p => p.section === section);

  buildCategoryFilters();
  displayProducts(currentProducts);
}
/* Category filters*/
function buildCategoryFilters() {
  categoryFilters.innerHTML = "";

  const categories = [...new Set(currentProducts.map(p => p.category))];

  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.onclick = () => displayProducts(currentProducts);
  categoryFilters.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => {
      displayProducts(currentProducts.filter(p => p.category === cat));
    };
    categoryFilters.appendChild(btn);
  });
}
/* sale fucntion*/
function filterSale() {
  categoryFilters.innerHTML = "";
  displayProducts(products.filter(p => p.salePrice !== null));
}
/* add product to cart*/
function addToCart(productId) {
  let cart = getCart();
  const product = products.find(p => p.id === productId);

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
/* Update cart count method*/
function updateCartCount() {
  let cart = getCart();
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
}

document.addEventListener("DOMContentLoaded", () => {
  filterSection("All");
  updateCartCount(); 
});