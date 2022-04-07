function updateAmount(amount) {
  const amountText = document.getElementById(amount);
  const amountValue = parseFloat(amountText.value);
  return amountValue;
}
// Incomes and Expenses Calculation section
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
// Saving Calculation section
document.getElementById("save-btn").addEventListener("click", function () {
  const saveRate = document.getElementById("save-rate").value;
  const incomeAmount = document.getElementById("income-amount").value;

  const balanceAmount = document.getElementById("rest-amount");
  const balanceAmountText = parseFloat(balanceAmount.innerText);
  const saveAmount = (incomeAmount * saveRate) / 100;
  if (balanceAmountText < saveAmount) {
    document.getElementById("error-items").style.display = "block";
    return;
  }
  document.getElementById("save-amount").innerText = saveAmount;
  const remainingBalance = balanceAmountText - saveAmount;
  document.getElementById("remaining-amount").innerText = remainingBalance;
  document.getElementById("error-items").style.display = "none";
});
