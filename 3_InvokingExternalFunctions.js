// We can create variables and functions and call the function in another module without actually creating that specific function in another file
// See 2_Modules.js for execution
const num1 = 1;
const num2 = 5;

const add = () => {
   console.log(`The sum is: ${num1 + num2}`);
}

add();