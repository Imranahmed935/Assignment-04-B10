
// problem: 01
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0){
        return "invalid input"
    }
    if(expenses > income){
        return "invalid input"
    }
        const monthlyIncome = income - expenses;
        const tax = monthlyIncome * 0.20;
        return tax; 
}

console.log(calculateTax(3000, 2000))



