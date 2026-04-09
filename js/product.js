const container = document.getElementById("product-details");
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedSize = null;

const product = products.find(p => p.id === id);

if (product) {
  container.innerHTML = `
    <img src="${product.image}">
    <div>
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <h2>R ${product.salePrice ?? product.price}</h2>
      <button onclick="add()">Add to Cart</button>
    </div>
  `;

  if (product.sizes) {
    renderSizes(product);
  }
}

/* Sizes functions */
function renderSizes(product) {
  const sizeDiv = document.getElementById("size-options");
  sizeDiv.innerHTML = "";

  Object.entries(product.sizes).forEach(([size, stock]) => {
    const btn = document.createElement("button");

    // Show size and stock
    btn.textContent = `${size} (${stock})`;

    if (stock === 0) {
      btn.disabled = true;
      btn.classList.add("out"); 
    } else {
      btn.onclick = () => selectSize(size, btn);
    }

    sizeDiv.appendChild(btn);
  });
}

function selectSize(size, button) {
  selectedSize = size;

  document.querySelectorAll("#size-options button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

/* add cart function */
function add() {
  if (product.sizes && !selectedSize) {
    alert("Please select a size!");
    return;
  }

  const existing = cart.find(i => i.id === product.id && i.size === selectedSize);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, size: selectedSize, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added size ${selectedSize} to cart!`);
}