var PUBLISHABLE_KEY = "pk_live_4R3JOqXyoZRkzPv5tIcr8XEr";
var DOMAIN = new URL('https://begotten.live');
var PRICE_ID = "price_1HCF4E4KI0G6StnQkk5tWHAZ";
var MIN_PHOTOS = 1;
var MAX_PHOTOS = 8;
var stripe = Stripe(PUBLISHABLE_KEY);
var buyButton = document.getElementById("buyButton");

document
  .getElementById("quantity-input")
  .addEventListener("change", function(evt) {
    if (evt.target.value < MIN_PHOTOS) {
      evt.target.value = MIN_PHOTOS;
    }
    if (evt.target.value > MAX_PHOTOS) {
      evt.target.value = MAX_PHOTOS;
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
  document.getElementById("total").textContent = quantity * 30;

  // Disable the button if the customers hits the max or min
  if (quantity === MIN_PHOTOS) {
    document.getElementById("subtract").disabled = true;
  }
  if (quantity === MAX_PHOTOS) {
    document.getElementById("add").disabled = true;
  }
};

Array.from(document.getElementsByClassName("increment-btn")).forEach(
  element => {
    element.addEventListener("click", updateQuantity);
  }
);

// Handle any errors from Checkout
var handleResult = function(result) {
  if (result.error) {
    var displayError = document.getElementById("error-message");
    displayError.textContent = result.error.message;
  }
};

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