
// problem: 01
// function calculateTax(income, expenses) {
//     if(income < 0 || expenses < 0){
//         return "invalid input"
//     }
//     if(expenses > income){
//         return "invalid input"
//     }
//         const monthlyIncome = income - expenses;
//         const tax = monthlyIncome * 0.20;
//         return tax; 
// }
// console.log(calculateTax(3000, 2000))


// problem: 02

function sendNotification(email) {
 const emailExpression = /@/;
 if(!emailExpression.test(email)){
    return "Invalid Email"
 }else{
    const massage  = email.split('@');
    const notification = massage[0]+" sent you an email from "+massage[1];
    return notification;
 }

}

console.log(sendNotification('hello@gmail.com'));




