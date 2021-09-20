"use strict";

function solveEquation(a, b, c) {
let arr = [];
let d;
    
  if ((a || a == 0) && (b || b == 0) && (c || c == 0)) {
    const discr = b**2-4*a*c;
    if (discr === 0) {
        arr.push(-b/(2*a));
        console.log(arr);
    }
      else if (discr > 0) {
          arr.push((-b + Math.sqrt(discr))/(2*a));
          console.log(arr);
          arr.push((-b - Math.sqrt(discr))/(2*a));
          console.log(arr);
      }
}
  return arr; // array
}

solveEquation(1, 12, 36);




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
