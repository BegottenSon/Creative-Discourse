const buySection = document.getElementById("buy-section");
const dripForm = document.getElementById("drip-ef-117453377");
const dripButton = document.getElementById("drip-button");

buySection.style.visibility = "hidden";

function showBuySection() {
    buySection.style.visibility = "visible";
    dripForm.style.display = "none";
}

dripButton.addEventListener('click', showBuySection);