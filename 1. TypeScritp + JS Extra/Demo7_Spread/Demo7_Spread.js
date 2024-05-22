var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Khai báo đối tượng student
var student = {
    id: 1,
    name: "daonq",
    gender: true
};
// Bạn hãy tạo đối tương student_new: id: 1,  name: "daonq", gender: true, address:"HN", age:20
// let student_new = {
//   id: 1,
//   name: "daonq",
//   gender: true,
//   address: "HN",
//   age: 20,
// };
var student_new = __assign(__assign({}, student), { address: "HN", age: 20 });
console.log("id: " + student_new.id);
console.log("name: " + student_new.name);
console.log("gender: " + student_new.gender);
console.log("address: " + student_new.address);
