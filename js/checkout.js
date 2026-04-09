const summaryDiv = document.getElementById("order-summary");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadSummary() {
  let total = 0;
  summaryDiv.innerHTML = "<h3>Order Summary</h3>";

  if (cart.length === 0) {
    summaryDiv.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.quantity;
    summaryDiv.innerHTML += `
      <p>${item.name} × ${item.quantity} — R ${(item.price * item.quantity).toFixed(2)}</p>
    `;
  });

  summaryDiv.innerHTML += `<h3>Total: R ${total.toFixed(2)}</h3>`;
}

/* Place order function */
function placeOrder(e) {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

loadSummary();