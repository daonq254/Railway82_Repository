// object student
var student = {
    id: 1,
    name: "Hiệp",
    gender: true
};
// let v_id = student.id;
// let v_name = student.name;
// let v_gender = student.gender;
// Desructuring Object
// let { id: v_id } = student; // ==>  let v_id = student.id;
// let { name: v_name } = student;
// let { gender: v_gender } = student;
// let { id: v_id, name: v_name, gender: v_gender } = student;
// console.log(`v_id: ${v_id}`);
// console.log(`v_name: ${v_name}`);
// console.log(`v_gender: ${v_gender}`);
// let { id: id } = student; // ==> let id = student.id
// let { id } = student; //==> let { id: id } = student; ==> ==> let id = student.id
// let { id, name, gender } = student;
// let { name } = student;
// console.log(`id: ${id}`);
var name_82 = ["Sơn", "Nam", "Lâm"];
// ==> Destructuring mảng
// let v_1 = name_82[0];
// let v_2 = name_82[1];
// let v_3 = name_82[2];
var v_1 = name_82[0], v_2 = name_82[1], v_3 = name_82[2];
console.log("v_1: " + v_1);
console.log("v_2: " + v_2);
console.log("v_3: " + v_3);
