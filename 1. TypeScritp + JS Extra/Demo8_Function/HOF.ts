// Bạn hãy xây dựng 1 chương trình máy tính, để tính toán
// Tính tổng 2 số
// Tính hiệu 2 số
// Tính phép nhân 2 số
// ...
function sum(a: number, b: number) {
  return a + b;
}

function minus(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

let resultSum = sum(10, 20);
let resultMinus = minus(40, 10);
let resultMultiply = multiply(10, 5);

// Khai báo hàm calculate
function calculate(aInput, bInput, fInput) {
  let v_result = fInput(aInput, bInput);
  return v_result;
}

// tính tổng 2 số 50,60
let v_cal_Sum = calculate(50, 60, sum);
console.log(`v_cal_Sum: ${v_cal_Sum}`); //110

// Tính hiệu 2 số 200,180
let v_cal_Minus = calculate(200, 100, minus); //100

let v_cal_Multiply = calculate(10, 15, multiply);

// function x() {
//   function y() {}

//   return y;
// }
