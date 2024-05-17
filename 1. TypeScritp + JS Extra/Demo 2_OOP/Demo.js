"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
// import v_age from "./Person";
var person1 = new Person_1.Person();
person1.id = 1;
person1.name = "Hoàng Tuấn";
person1.address = "HN";
var person2 = new Person_1.Person();
person2.id = 2;
person2.name = "Văn Lâm";
person2.address = "HCM";
// In thông tin
// console.log(`Đây là ${v_vti}`);
// console.log(`Thông tin Person 1 là, ID: ${person1.id}, Name: ${person1.name}, Address: ${person1.address} `);
person1.go();
person1.showInfo();
person2.showInfo();
// console.log(`Tuổi của tôi là ${v_age}`);
