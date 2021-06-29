const buySection = document.getElementById("buy-section");
const dripForm = document.getElementById("drip-ef-117453377");
const dripButton = document.getElementById("drip-button");


function showBuySection() {
    if (window.location.href === "https://begotten.live/reservation") {
        buySection.style.visibility = "hidden";
        dripForm.style.display = "block";
    }else {
        buySection.style.visibility = "visible";
        dripForm.style.display = "none"; 
    }
}

showBuySection()
