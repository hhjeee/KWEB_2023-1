const price = {
  apple: 700,
  orange: 800,
  lemon: 900,
};

let totalPrice = 0;
const totalCost = document.getElementById("cost");

function calPrice(event) {
  const item = event.target.parentElement.parentElement.getAttribute("id");
  totalPrice += price[item];
  totalCost.innerText = totalPrice;
}

for (const button of document.getElementsByClassName("add-to-cart")) {
  button.addEventListener("click", calPrice);
}
