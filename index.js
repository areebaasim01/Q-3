"use strict";
// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "areeba asim";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1)); //titlecase
