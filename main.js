var product = document.getElementById("product");
var Listproduct = document.getElementById("Lproduct");
var price = document.getElementById("price");
var button = document.getElementById("button");
var ProfitPercentage = document.getElementById("Profit");
var ProfitPercentageText = document.getElementById("PercentageText");
var ProfitValue = document.getElementById("ProfitValue");
var ProfitList = document.getElementById("Lprofit");
var Profit;
var total = document.getElementById("total");
var totalList = document.getElementById("Ltotal");

Listproduct.innerText = "";
ProfitList.innerText = "";
totalList.innerText = "";

function ProfitCalculator() {
  Profit = (parseFloat(price.value * ProfitPercentage.value) / 100).toFixed(2);
  ProfitValue.innerText = Profit + " $";
}

function TotalCalculator() {
  total.innerText =
    (parseFloat(price.value) + parseFloat(Profit)).toFixed(2) + " $";
}

price.oninput = () => {
  ProfitCalculator();
  TotalCalculator();
};

ProfitPercentage.oninput = () => {
  PercentageText.innerText = ProfitPercentage.value + " %";
  ProfitCalculator();
  TotalCalculator();
};
button.onclick = () => {
  if (product.value === "" || price.value === "") {
    alert("You must give a Price and a Name to your Product");
    return;
  }
  Listproduct.innerHTML += `<ul>${product.value}</ul>`;
  ProfitList.innerHTML += `<ul>${ProfitValue.innerText}</ul>`;
  totalList.innerHTML += `<ul>${total.innerText}</ul>`;

  // putting everything back to 0
  product.value = "";
  price.value = "";
  ProfitPercentage.value = 0;
  PercentageText.innerText = "0 %";
  ProfitValue.innerText = "0.00 $";
  total.innerText = "0.00 $";
};
