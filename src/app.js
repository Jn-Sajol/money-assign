function calculate(){
    const incomeTotal = document.getElementById('income');
    const incomeTotalNum = parseFloat(incomeTotal.value)
    // console.log(incomeTotal)
    const food = document.getElementById('food');
    const foodNum = parseFloat(food.value)
    // console.log(typeof (foodNum))
    const rent = document.getElementById('rent');
    const rentNum = parseFloat(rent.value)
    const clothes = document.getElementById('clothes');
    const clothesNum = parseFloat(clothes.value)
    const totalExpense = document.getElementById('totalExpense');
    // const totalExpenseNum = parseFloat(totalExpense.innerText)
    const balance = document.getElementById('balance');
    // const balanceNum = parseFloat(balance.innerText)


    // calculate section
    var newTotal =  foodNum + rentNum + clothesNum;
    var newBalance = incomeTotalNum - newTotal;

    //error handaling
    if(incomeTotalNum<newTotal){
        alert("Hello\nBalance Error!");
    }
    
    else if((food.value || rent.value || clothes.value ||incomeTotal.value) < 0){
        alert("Hello\nit's a Minus bro");
    }
    else if(isNaN(food.value||rent.value||clothes.value || incomeTotal.value)){
        alert("Hello\nit's not a number bro");
    }
    else{
        totalExpense.innerText = newTotal;
        balance.innerText = newBalance;
    }

}

function savingsButton(){
    const saveInput = document.getElementById('savings');
    const saveInputNum = parseFloat(saveInput.value);
    
    const savingAmount = document.getElementById('savingsAmount');
    const remaingBalance = document.getElementById('remaingBalance');
     const balance = document.getElementById('balance');
     const balanceInt = parseFloat(balance.innerText);

    const savingsTotal =  (balanceInt /100) * saveInputNum;
    const remaingBalanceTotal = balanceInt - savingsTotal;
    // console.log(savingsTotal)

    //error handaling
    if(savingsTotal > balanceInt){
        alert("Hello\nBalance Error!");
    }
    
    else if( saveInput.value < 0){
        alert("Hello\nit's a Minus bro");
    }
    else if(isNaN(saveInput.value)){
        alert("Hello\nit's not a number bro");
    }
    else{
        savingAmount.innerText = savingsTotal;
        remaingBalance.innerText = remaingBalanceTotal;
    }
    
}