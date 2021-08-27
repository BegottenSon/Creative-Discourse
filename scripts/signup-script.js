const buySection = document.getElementById("buy-section");
const dripForm = document.getElementById("drip-ef-117453377");
const dripButton = document.getElementById("drip-button");
const buyButton = document.getElementById("buyButton");
const addButton = document.getElementById("add");
const quantityInput = document.getElementById("quantity-input");

function handleForm(e) {
    e.preventDefault();
}

function showBuySection() {
    buySection.classList.remove("disabled-section");
    buyButton.disabled = false;
    addButton.disabled = false;
    quantityInput.disabled = false;
}

dripForm.addEventListener('submit', handleForm);
dripButton.addEventListener('click', showBuySection);
