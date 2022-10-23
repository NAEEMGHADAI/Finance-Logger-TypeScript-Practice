import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// //This will work because Invoice and Payment both are of type HasFormatter
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing", 200);
// let docs: HasFormatter[] = []; //This will now gaurentee that every object here will have same format of type HasFormatter
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice("naeem", "works at website", 250);
// const invTwo = new Invoice("mario", "works at website", 350);
// console.log(invOne, invTwo);
// let invoice: Invoice[] = [invOne]; //This will only take elements of type Invoice
// invoice.push(invTwo);
// invoice.forEach((inv) => {
// 	console.log(inv.client, inv.amount, inv.format());
// });
//Typesrcipt have defined very element with unique identifier like anchor variable have type : const anchor: HTMLAnchorElement
// const form = document.querySelector('form')!; this have type const form: HTMLFormElement
// const form = document.querySelector(".new-item-form")!; //If we get form with a class then typescript will not be able to able identify this element : const form: Element
const form = document.querySelector(".new-item-form"); //Typescript will identify these element: const form: HTMLFormElement, and it is not necessary to write "!" here
// console.log(form.children);
// // inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//List template instance
const ul = document.querySelector(".item-list");
let list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Using Tuples here
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
