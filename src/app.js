"use strict";
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
var docOne;
var docTwo;
var invOne = new Invoice_js_1.Invoice('Giorgos', 'work', 250);
var invTwo = new Invoice_js_1.Invoice('Kate', 'work', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.format());
});
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
