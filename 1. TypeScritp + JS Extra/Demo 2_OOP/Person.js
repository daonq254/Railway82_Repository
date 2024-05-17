"use strict";
exports.__esModule = true;
exports.v_vti = exports.Person = void 0;
// Khai báo class Person
// export
var Person = /** @class */ (function () {
    function Person() {
    }
    //   Khai báo phương thức
    Person.prototype.go = function () {
        console.log("I can go!!");
    };
    Person.prototype.showInfo = function () {
        console.log("Th\u00F4ng tin Person l\u00E0, ID: " + this.id + ", Name: " + this.name + ", Address: " + this.address + " ");
    };
    return Person;
}());
exports.Person = Person;
// export var v_vti = "VTI Academy";
var v_vti = "VTI Academy";
exports.v_vti = v_vti;
var v_myAge = 20;
// export default v_myAge;
// Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "Hoàng Tuấn";
// person1.address = "HN";
// var person2 = new Person();
// person2.id = 2;
// person2.name = "Văn Lâm";
// person2.address = "HCM";
// console.log(`Thông tin Person 1 là, ID: ${person1.id}, Name: ${person1.name}, Address: ${person1.address} `);
