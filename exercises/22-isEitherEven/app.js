// Write your function here
function isEitherEven(num1, num2) {
  //if (num1 % 2 !== 0 && num2 % 2 !== 0) return true;
    return num1%2 === 0 || num2%2 === 0? true : false;
}
console.log(isEitherEven(1,8));