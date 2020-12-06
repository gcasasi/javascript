/*
https://github.com/full-stack-bcn/problem-sets/blob/master/javascript.md
3. Write a NodeJS program that shows the arguments that you passed:
$ node show-args.js first second " third " 
Argument[0] = "first"
Argument[1] = "second"
Argument[2] = " third "
*/

let arguments = process.argv.slice(2);

for (let i = 0; i < arguments.length; i++) {
  console.log(`Argument[${i}] = "${arguments[i]}"`);
}