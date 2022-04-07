document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = document.getElementById("income-amount");
  const incomeAmountValue = parseFloat(incomeAmount.value);

  const foodAmount = document.getElementById("food-amount");
  const foodAmountValue = parseFloat(foodAmount.value);
  const rentAmount = document.getElementById("rent-amount");
  const rentAmountValue = parseFloat(rentAmount.value);
  const clothAmount = document.getElementById("clothes-amount");
  const clothAmountValue = parseFloat(clothAmount.value);

  const totalAmount = foodAmountValue + rentAmountValue + clothAmountValue;

  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalAmount;

  if (incomeAmountValue < totalAmount) {
    document.getElementById("error-message").style.display = "block";
  } else {
    const restAmount = document.getElementById("rest-amount");
    const restBalance = incomeAmountValue - totalAmount;
    restAmount.innerText = restBalance;
  }
});
