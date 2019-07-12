var add = function(num1, num2) {
return num1 + num2;
};

var num1 = parseInt(prompt("Enter a number:"));
var num2 = parseInt(prompt("Enter another number:"));
// alert(add(num1,num2));

var result = add(num1,num2);
alert(result);

function subtract(num1,num2) {
  return num1-num2;
}

num1 = parseInt(prompt("Please enter the first number in the subtract equation:"));
num2 = parseInt(prompt("Please enter the second number in the substract equation:"));

alert("The answer is: "+subtract(num1,num2));

function multiply(num1,num2) {
  return num1*num2;
};
num1 = parseInt(prompt("Please enter the first number in the multiplication equation:"));
num2 = parseInt(prompt("Please enter the second number in the multiplication equation:"));
alert("The multiplication is: "+multiply(num1,num2));

function divide(num1,num2) {
  return num1/num2;
}
num1 = parseInt(prompt("Please enter the number to be divided:"));
num2 = parseInt(prompt("Please enter the denominator to divide:"));
alert("The division result is: "+divide(num1,num2));
