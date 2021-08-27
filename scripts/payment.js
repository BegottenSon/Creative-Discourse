var PUBLISHABLE_KEY = "pk_live_4R3JOqXyoZRkzPv5tIcr8XEr";
var DOMAIN = new URL('https://begotten.live');
var PRICE_ID = "price_1He6Pa4KI0G6StnQzyvZKoaG";
var MinRESERVATION = 1;
var MaxRESERVATION = 10;
var reservationCounter = 10;
var stripe = Stripe(PUBLISHABLE_KEY);
var buyButton = document.getElementById("buyButton");

document
  .getElementById("quantity-input")
  .addEventListener("change", function(evt) {
    if (evt.target.value < MinRESERVATION) {
      evt.target.value = MinRESERVATION;
    }
    if (evt.target.value > MaxRESERVATION) {
      evt.target.value = MaxRESERVATION;
    }
  });

var updateQuantity = function(evt) {
  if (evt && evt.type === "keypress" && evt.keyCode !== 13) {
    return;
  }

  var isAdding = evt.target.id === "add";
  var inputEl = document.getElementById("quantity-input");
  var currentQuantity = parseInt(inputEl.value);

  document.getElementById("add").disabled = false;
  document.getElementById("subtract").disabled = false;

  var quantity = isAdding ? currentQuantity + 1 : currentQuantity - 1;

  inputEl.value = quantity;
  document.getElementById("total").textContent = quantity * 40;

  // Disable the button if the customers hits the max or min
  if (quantity === MinRESERVATION) {
    document.getElementById("subtract").disabled = true;
  }
  if (quantity === MaxRESERVATION) {
    document.getElementById("add").disabled = true;
  }
};

Array.from(document.getElementsByClassName("increment-btn")).forEach(
  element => {
    element.addEventListener("click", updateQuantity);
  }
);

// Handle any errors from Checkout and Update Reservation Counter
var handleResult = function(result) {
  if (result.error) {
    var displayError = document.getElementById("error-message");
    displayError.textContent = result.error.message;
  }
    reservationCounter -= 1;
};

//Handle Buy Button
buyButton.addEventListener("click", function() {
  var quantity = parseInt(
    document.getElementById("quantity-input").value
  );

  stripe
    .redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: PRICE_ID, quantity: quantity }],
      successUrl:
        DOMAIN + "success.html?session_id={CHECKOUT_SESSION_ID}",
      cancelUrl: DOMAIN + "reservation.html"
    })
    .then(handleResult);
});