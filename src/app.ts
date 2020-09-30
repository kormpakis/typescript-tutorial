import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import {HasFormatter} from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

const invOne = new Invoice('Giorgos', 'work', 250);
const invTwo = new Invoice('Kate', 'work', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})
