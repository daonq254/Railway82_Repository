// Bạn hãy viết 1 function dùng để tính tổng 2 số

// Cách 1
function sum_1(a: number, b: number) {
  let resutl = a + b;
  return resutl;
}

let v_resutl_sum = sum_1(20, 50);
console.log(`Tổng 2 số là: ${v_resutl_sum}`);

// Cách 2
// Tạo 1 biến tham chiếu tới 1 function
let v_sum = function (a: number, b: number) {
  let resutl = a + b;
  return resutl;
};

// 30,40
let v_result_sum_2 = v_sum(30, 40);
console.log(`Tổng 2 số là: ${v_result_sum_2}`);

// Cách 3
// Arrow Function
let v_sum_3 = (a: number, b: number) => {
  let resutl = a + b;
  return resutl;
};

let v_result_sum_3 = v_sum(100, 40);
console.log(`Tổng 2 số là: ${v_result_sum_3}`);

// TH Đặc biệt của hàm Arow, phần thân hàm chỉ có duy nhất 1 dòng lệnh

// let v_sum_4 = (a: number, b: number) => {
//   return a + b;
// };

let v_sum_4 = (a: number, b: number) => a + b;
