function updateAmount(amount) {
  const amountText = document.getElementById(amount);
  const amountValue = parseFloat(amountText.value);
  return amountValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = updateAmount("income-amount");
  const foodAmount = updateAmount("food-amount");
  const rentAmount = updateAmount("rent-amount");
  const clothesAmount = updateAmount("clothes-amount");

  const totalAmount = foodAmount + rentAmount + clothesAmount;

  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalAmount;

  if (incomeAmount < totalAmount) {
    document.getElementById("error-message").style.display = "block";
  } else {
    const restAmount = document.getElementById("rest-amount");
    const restBalance = incomeAmount - totalAmount;
    restAmount.innerText = restBalance;
    document.getElementById("error-message").style.display = "none";
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const saveRate = updateAmount("save-rate");
  const incomeAmount = updateAmount("income-amount");

  const saveAmount = (incomeAmount * saveRate) / 100;
  document.getElementById("save-amount").innerText = saveAmount;

  const balanceAmount = document.getElementById("rest-amount");
  const balanceAmountText = parseFloat(balanceAmount.innerText);
  const remainingBalance = balanceAmountText - saveAmount;
  document.getElementById("remaining-amount").innerText = remainingBalance;
});
