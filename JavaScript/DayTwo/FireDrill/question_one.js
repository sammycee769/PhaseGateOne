const prompt = require("prompt-sync")();
let first_integer = parseInt(prompt("Enter An Integer: "))
let second_integer = parseInt(prompt("Enter An Integer: "))

first_integer_squared = first_integer **2
second_integer_squared = second_integer ** 2

let sum_squared = first_integer_squared + second_integer_squared
let difference_of_squares = first_integer_squared - second_integer_squared

console.log("The square of: " + first_integer + " is " + first_integer_squared + " and " + second_integer + " is " + second_integer_squared + " the sumof their squares is " + sum_squared + " while the difference is " + difference_of_squares)
