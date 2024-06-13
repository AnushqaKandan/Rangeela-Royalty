document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

let checkoutItems = JSON.parse(localStorage.getItem("checkout")) || [];

function displayCheckoutItems() {
    const checkoutTableBody = document.getElementById("checkoutTableBody");
    checkoutTableBody.innerHTML = "";
    let total = 0;

    checkoutItems.forEach((item, index) => {
        const row = document.createElement("tr");
        const itemTotalPrice = item.price * (item.quantity || 1); // Multiply price by quantity
        row.innerHTML = `
            <td>${item.productName}</td>
            <td>${item.category}</td>
            <td><img src="${item.img_url}" alt="${item.productName}" width="100"></td>
            <td>${item.description}</td>
            <td>
                <input type="number" min="1" value="${item.quantity || 1}" onchange="updateQuantity(${index}, this.value)">
            </td> 
            <td>R${itemTotalPrice.toFixed(2)}</td>
            <td><button class="btn remove-btn btn-danger" onclick="removeItem(${index})">Remove</button></td>
        `;
        checkoutTableBody.appendChild(row);
        total += itemTotalPrice; // Add total price of items
    });

    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");
    totalRow.innerHTML = `
        <td colspan="7">Total: R ${total.toFixed(2)}</td>
    `;
    checkoutTableBody.appendChild(totalRow);
    
}

function addItemToCart(product) {
    const existingItemIndex = checkoutItems.findIndex(item => item.productName === product.productName);
    if (existingItemIndex !== -1) {
        // Product already exists in cart, update quantity
        checkoutItems[existingItemIndex].quantity += 1;
    } else {
        // Product doesn't exist in cart, add it
        checkoutItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    displayCheckoutItems();
}

function removeItem(index) {
    checkoutItems.splice(index, 1);
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    displayCheckoutItems();
}

function updateQuantity(index, quantity) {
    checkoutItems[index].quantity = parseInt(quantity); // Update quantity in checkoutItems array
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    displayCheckoutItems();
}

displayCheckoutItems();

//  Function to handle payment
function payNow() {
    // Implement payment logic here
    alert("Thank you for your Order!");
    // Optionally, you can clear the checkout items after successful payment
    checkoutItems = [];
    localStorage.setItem('checkout', JSON.stringify(checkoutItems));
    updateCheckoutTable();
}

function clearCart(){
    checkoutItems = [];
    localStorage.setItem('checkout', JSON.stringify(checkoutItems));
    displayCheckoutItems();
}

// Update counter on page load
window.onload = () => {
    updateCartCounter();
  };
  
  // Function to update the counter badge
  function updateCartCounter() {
    const totalQuantity = checkoutItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector("[counter]").textContent = totalQuantity || 0;
  }