var PI = 3.14; // Khai báo số PI
console.log("S\u1ED1 PI: " + PI);
// int x =10;
// x = 20;
// PI = 3.15;
// Khai báo 1 Object
var student = {
    id: 1,
    name: "Hiệp",
    gender: true
};
console.log("Thông tin của bạn sinh viên là: ", student);
// Thông tin của bạn sinh viên là:  { id: 1, name: 'Hiệp', gender: true }
// Thay đổi thông tin của bạn sinh viên
student.id = 10;
student.name = "Hiệp_update";
console.log("Thông tin của bạn sinh viên sau khi thay đổi là: ", student);
// Thông tin của bạn sinh viên sau khi thay đổi là:  { id: 10, name: 'Hiệp_update', gender: true }
