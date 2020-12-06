/*
https://github.com/full-stack-bcn/problem-sets/blob/master/javascript.md
4.Write a NodeJS program that produces the sum of its arguments:
$ node sum-args.js 1 2 3 4
10
$ node sum-args.js abra kedavra
NaN
*/

let arguments = process.argv.slice(2);
let suma = arguments.map((x) => parseInt(x, 10));

let result = 0;

for (let i = 0; i < suma.length; i++) {
  result += suma[i];
}

console.log(result);