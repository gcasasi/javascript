/*
https://github.com/full-stack-bcn/problem-sets/blob/master/javascript.md
7.Write a program that receives 2 operands and an operation and produces the result:
$ node expr.js 15 + 14
29
$ node expr.js 2 '*' 3
6
$ node expr.js 1234 / 16
77.125
*/

let arguments = process.argv.slice(2);

let first = parseInt(arguments[0], 10);
let op = arguments[1];
let second = parseInt(arguments[2], 10);

let result;

switch (op) {
  case "+":
    result = first + second;
    break;
  case "-":
    result = first - second;
    break;
  case "*":
    result = first * second;
    break;
  case "'*'":
    result = first * second;
    break;
  case "/":
    result = first / second;
    break;
}

console.log(result);
