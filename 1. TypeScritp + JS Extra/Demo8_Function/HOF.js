// Bạn hãy xây dựng 1 chương trình máy tính, để tính toán
// Tính tổng 2 số
// Tính hiệu 2 số
// Tính phép nhân 2 số
// ...
function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
var resultSum = sum(10, 20);
var resultMinus = minus(40, 10);
var resultMultiply = multiply(10, 5);
// Khai báo hàm calculate
function calculate(aInput, bInput, fInput) {
    var v_result = fInput(aInput, bInput);
    return v_result;
}
// tính tổng 2 số 50,60
var v_cal_Sum = calculate(50, 60, sum);
console.log("v_cal_Sum: " + v_cal_Sum); //110
