
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


// // problem: 02

// function sendNotification(email) {
//  const emailExpression = /@/;
//  if(!emailExpression.test(email)){
//     return "Invalid Email"
//  }else{
//     const massage  = email.split('@');
//     const notification = massage[0]+" sent you an email from "+massage[1];
//     return notification;
//  }

// }
// console.log(sendNotification('hello@gmail.com'));

// // problem:03

// function checkDigitsInName(name) {
//     if(typeof name !== 'string'){
//         return "invalid input"
//     }
//     const num = /\d/.test(name)
//     return num;
    
// }
// console.log(checkDigitsInName('imran'))


//  problem:04

// function calculateFinalScore(obj) {
//     if(typeof obj !== "object" || obj === null){
//         return "Invalid Input"
//     }

//     const finalSum = obj.testScore + obj.schoolGrade;
    
//     let sum = 0;
//     if(obj.isFFamily === true){
//         sum += 20;
//     }

//     const finalScore = finalSum + sum;
   
//     if(finalScore >= 80){
//         return true;
//     }else{
//         return false;
//     }
  
// };

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 40,  schoolGrade: 25, isFFamily : false  }));



