"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("./classes/invoice");
const invOne = new invoice_1.Invoice("Mario", "draw", 500);
const invTwe = new invoice_1.Invoice("Luigi", "work", 400);
console.log(invOne, invTwe);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
