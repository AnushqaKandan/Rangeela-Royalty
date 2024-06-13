document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
// Initialize checkoutItems and update counter on page load
let checkoutItems = JSON.parse(localStorage.getItem("checkout")) || [];

window.onload = () => {
    updateCartCounter();
};

// Function to update the counter badge
function updateCartCounter() {
    const totalQuantity = checkoutItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector("[counter]").textContent = totalQuantity || 0;
}
