var a = Number(prompt('Input First Number'));
var b = Number(prompt('Input Second Number'));
var c = (prompt('Input Operator (+, -, * or /)'));

if(isNaN(a)) {
  alert('Error!, Input 1 is not a number');
}
if(isNaN(b)) {
  alert('Error!, Input 2 is not a Number');
}
if(c == '*') {
  alert(Number(a) * Number(b));
}
else if (c == '-') {
    alert(Number(a) - Number(b));
}
else if (c == '/') {
  alert(Number(a) / Number(b));
}
else if (c == '+') {
  alert(Number(a) + Number(b));
}
else if(c !== '*' && c !== '-' && c !== '/' && c !== '+'){
  alert('Input a valid operator (+, -, * or /)')
}