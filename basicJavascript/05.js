/*
https://github.com/full-stack-bcn/problem-sets/blob/master/javascript.md
5. Write a program that draws a triangle like the one below given the height as an argument (using for and then using while):
$ node triangle.js 5
*
**
***
****
*****
*/

let num = process.argv.slice(2);

let i = 1;
let ast = "";
while (i <= num) {
  ast += "*";
  console.log(ast);
  i++;
}

console.log("----------------");
ast = "";
for (let ii = 0; ii < num; ii++) {
  ast += "*";
  console.log(ast);
}