//Check the added salary with js

//Global Call
let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let savingsTarget = 0;
let groceriesExpense = 0;
let transportExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;
let totalExpenses = 0;
let remainingBudget = 0;
let actualSavingsPossible = 0;

function addSalary(){
    let salaryInput = document.getElementById('salaryInput');
    let salary = Number(salaryInput.value);
    console.log(salary);
    console.log(typeof(salary));

    if(salary>0){
        console.log("Good");
        totalIncome = salary;
        updateSummary();
    }
}

function addRent(){
    let rentInput = document.getElementById('rentInput');
    let amount = Number(rentInput.value);
    console.log(amount);
    if(amount > 0){
        rentExpense = amount;
        updateSummary();
    }
} 

function addUtilities(){
    let input = document.getElementById('utilitiesInput');
    let amount = Number(input.value);
    console.log(amount);
    if(amount>0){
        utilitiesExpense = amount;
        updateSummary();
    }
}

function addGroceries(){
    let input = document.getElementById('groceriesInput');
    let amount = Number(input.value);
    console.log(amount);
    if(amount>0){
        groceriesExpense = amount;
        console.log(groceriesExpense);
        updateSummary();
    }
}

function addTransport(){
    let input = document.getElementById('transportInput');
    let amount = Number(input.value);
    console.log(amount);
    if(amount>0){
        transportExpense = amount;
        console.log(transportExpense);
        updateSummary();
    }
}

function calculateHousingExpenses(){
    let result = rentExpense + utilitiesExpense;
    console.log(result);
    return result;
}

function setSavingsGoal(){
    let savingsInput= document.getElementById('savingsInput');
    let amount = Number(savingsInput.value);
    if(amount>0){
        savingsTarget = amount;
        updateSummary();
    }
}

function calculateLivingExpenses(){
    return groceriesExpense + transportExpense;
}

function addEntertainment(){
    let entertainmentInput = document.getElementById('entertainmentInput');
    let amount = Number(entertainmentInput.value);
    if(amount>0){
        entertainmentExpense = amount;
        console.log(entertainmentExpense);
        updateSummary();
    }
}

function addMisc(){
    let miscInput = document.getElementById('miscInput');
    let amount = Number(miscInput.value);
    if(amount>0){
        miscExpense = amount;
        console.log(miscExpense);
        updateSummary();
    }
}

function calculateOtherExpenses(){
    return entertainmentExpense + miscExpense;
}

function calculateRemainingBudget(){
    remainingBudget = totalIncome - totalExpenses;
    return remainingBudget;
}

function calculateTotalExpense(){
    totalExpenses = calculateHousingExpenses() + calculateLivingExpenses() + calculateOtherExpenses();
    return totalExpenses;
}

function updateSummary(){
    totalMonthlyExpenses = calculateTotalExpense();
    remainingBudget = totalIncome - totalMonthlyExpenses;
    actualSavingsPossible = remainingBudget > savingsTarget ? savingsTarget : remainingBudget;
    console.log(actualSavingsPossible);

    //Update monthly expense
    document.getElementById('totalIncome').textContent = totalIncome;
    
    // document.getElementById('rentExpenses').textContent = rentExpense;
    document.getElementById('housingExpenses').textContent = calculateHousingExpenses();
    document.getElementById('livingExpenses').textContent = calculateLivingExpenses();
    document.getElementById('otherExpenses').textContent = calculateOtherExpenses();
    document.getElementById('totalExpenses').textContent = calculateTotalExpense();
    document.getElementById('remainingBudget').textContent = remainingBudget;
    document.getElementById('actualSavings').textContent = actualSavingsPossible;

    //Update Savings sections
    document.getElementById('savingsGoal').textContent = savingsTarget;

    //update yearly projections
    document.getElementById('yearlyIncome').textContent = totalIncome * 12;
    document.getElementById('yearlyExpenses').textContent = totalExpenses * 12;
    document.getElementById('yearlySavings').textContent = actualSavingsPossible * 12;
}