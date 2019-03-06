javascript: (function () {
  var prices = document.querySelector(".wishlist-item-list--container")
  if (prices) {
    prices = prices.querySelectorAll(".info-price--current");
  } else {
    prices = document.querySelector(".wishlist-item-tile--container").querySelectorAll(".wishlist-item-tile-front-details-price");
  }
  var total = 0;
  prices.forEach((price) => {
    total += parseFloat(price.firstElementChild.nextSibling.innerText.slice(0, -2).replace(",", "."));
  });
  alert(total);
})();
