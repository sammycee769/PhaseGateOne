const prompt = require("prompt-sync")();
let first_integer = parseInt(prompt("Enter An Integer: "))
let second_integer = parseInt(prompt("Enter An Integer: "))
let third_integer = parseInt(prompt("Enter An Integer: "))

let sum_of_integers = first_integer+ second_integer+third_integer

let average = sum_of_integers /3

let product = first_integer * second_integer*third_integer

let smallest=first_integer
let largest=first_integer

if (second_integer > largest){
    largest=second_integer }
else if (third_integer>largest){
    largest=third_integer
}
if (second_integer < smallest)
    smallest=second_integer
else if (third_integer>smallest)
    smallest=third_integer 

console.log(`the sumof integers are ${sum_of_integers} average is ${average} product is ${product} the smallest is ${smallest} and largest ${largest}`)
