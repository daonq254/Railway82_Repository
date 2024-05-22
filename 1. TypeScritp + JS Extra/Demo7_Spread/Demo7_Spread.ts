// Khai báo đối tượng student
let student = {
  id: 1,
  name: "daonq",
  gender: true,
};

// Bạn hãy tạo đối tương student_new: id: 1,  name: "daonq", gender: true, address:"HN", age:20
// let student_new = {
//   id: 1,
//   name: "daonq",
//   gender: true,
//   address: "HN",
//   age: 20,
// };

let student_new = {
  ...student,
  address: "HN",
  age: 20,
};

console.log(`id: ${student_new.id}`);
console.log(`name: ${student_new.name}`);
console.log(`gender: ${student_new.gender}`);
console.log(`address: ${student_new.address}`);

// Demo Mảng
let name_82 = ["Sơn", "Nam", "Lâm"];

// let name_82_new = ["Sơn", "Nam", "Lâm", "Hà", "Hiệp"];
let name_82_new = [...name_82, "Hà", "Hiệp"];
