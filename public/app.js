import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// list template instance
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// let values:[string,string,number]
// values= [tofrom.value,details.value,amount.valueAsNumber]
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
