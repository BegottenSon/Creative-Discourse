const buySection = document.getElementById("buy-section");
const dripForm = document.getElementById("drip-ef-117453377");
const dripButton = document.getElementById("drip-button");


function showBuySection() {
    if (window.location.href === "http://127.0.0.1:59751/reservation.html#buy-section") {
        buySection.style.visibility = "visible";
        dripForm.style.display = "none";
    }else {
        buySection.style.visibility = "hidden";
        dripForm.style.display = "block"
    }
}

showBuySection()
