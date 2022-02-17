function calculate(){
    const incomeTotal = document.getElementById('income');
    // console.log(incomeTotal)
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const totalExpense = document.getElementById('totalExpense');
    const totalExpenseNum = parseFloat(totalExpense.innerText)
    const balance = document.getElementById('balance');
    const balanceNum = parseFloat(balance.innerText)

    totalExpense.innerText = parseFloat(food.value + rent.value + clothes.value);







}